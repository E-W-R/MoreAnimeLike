import pandas as pd
import numpy as np
import json
import urllib.parse

def to_url(name):
    name = name.lower()
    name = name.replace(' ', '-')
    name = name.replace('/', '')
    name = urllib.parse.quote(name, safe='-')
    return name

out = pd.read_csv('c_similarities.csv', index_col = 0)
anime_info = pd.read_csv('anime_data.csv', index_col = 0)
genres = ["Isekai", "Mystery", "Psychological", "Sports", "Romance", "Action", "Drama", "Comedy", "Other"]
genre_dict = dict(zip(genres, range(1, len(genres) + 1)))
users_dict = dict(zip(anime_info.index, anime_info['num_list_users']))
ids = sorted(list(set(anime_info.index) & set(out.index)))

distances = out.values.flatten()
distances = sorted(distances[(0.000001 < distances) & (distances < 0.999999)], reverse = True)[:50000]
distances = [distances[i] for i in range(1, len(distances), 100)][::-1]

nodes = []
edges = []
titles = []

def ecdf(d):
    return np.searchsorted(distances, d, side='right') / len(distances)

for i in range(len(ids)):
    ID1 = ids[i]
    row = anime_info.loc[int(ID1)]
    name = row['title']
    n_users = row['num_list_users']
    size = int(row['num_list_users'] ** 0.5) // 50
    url = '../anime/' + to_url(name) + '.html'
    genre = genre_dict[row['main_genre']]
    titles.append({'name': name, 'url': url})
    if n_users < 400000:
        continue
    nodes.append({'id': int(ID1), 'name': name,
        'size': size, 'url': url, 'genre': genre})
    nearest = [out.index[j] for j in np.argsort(out[str(ID1)])[-1:-300:-1]]

    n = 0
    for ID2 in nearest:
        if n == 10:
            break
        if ID2 not in ids or ID1 == ID2:
            continue
        if users_dict[int(ID2)] < 400000:
            continue
        weight = float(out[str(ID1)][int(ID2)])
        if weight == 0:
            continue
        n += 1
        weight = round(max(ecdf(weight), 0.1), 3)
        edges.append({'source': int(ID1), 'target': int(ID2),
                      'weight': weight})

with open('graph.json', 'w') as f:
    json.dump({'nodes': nodes, 'edges': edges, 'titles': titles}, f, indent = 4)