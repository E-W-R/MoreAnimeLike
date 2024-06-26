import pandas as pd
import numpy as np
import urllib.parse
import json

sim = pd.read_csv("similarities.csv", index_col = 0)
df = pd.read_csv("anime_data.csv", index_col = 0)
ids = sim.index

def convert_to_url_path(anime_names):
    url_paths = []
    for name in anime_names:
        name = name.lower()
        name = name.replace(' ', '-')
        name = name.replace('/', '')
        name = urllib.parse.quote(name, safe='-')
        url_paths.append(name)
    return url_paths

distances = sim.values.flatten()
distances = sorted(distances[(0.000001 < distances) & (distances < 0.999999)], reverse = True)[:1000000]
distances = [distances[i] for i in range(1, len(distances), 100)][::-1]

def ecdf(d):
    return np.searchsorted(distances, d, side='right') / len(distances)

url_paths = convert_to_url_path(df["title"])
url_dict = dict(zip(df.index, url_paths))

genres = ["Isekai", "Mystery", "Psychological", "Sports", "Romance", "Action", "Drama", "Comedy", "Other"]
genre_dict = dict(zip(genres, range(1, len(genres) + 1)))

out = {}
for ID1 in ids:
    nodes = []
    links = []
    row1 = df.loc[ID1]
    name1 = row1['title']
    n_users1 = row1['num_list_users']
    size1 = int(row1['num_list_users'] ** 0.5) // 50
    url1 = url_dict[ID1] + '.html'
    genre1 = genre_dict[row1['main_genre']]
    nodes.append({"id": name1, "size": size1, "genre": genre1, "url": url1})
    similar = [ids[j] for j in np.argsort(sim[str(ID1)])[-11:-1]]
    for ID2 in similar:
        row2 = df.loc[ID2]
        name2 = row2['title']
        n_users2 = row2['num_list_users']
        size2 = int(row2['num_list_users'] ** 0.5) // 50
        url2 = url_dict[ID2] + '.html'
        genre2 = genre_dict[row2['main_genre']]
        nodes.append({"id": name2, "size": size2, "genre": genre2, "url": url2})
        weight = max(min(round((float(sim[str(ID1)][ID2]) - 0.86) * 100 // 0.06), 99), 1)
        links.append({"source": name1, "target": name2, "weight": weight})
    out[ID1] = {"nodes": nodes, "links": links}


with open('anime/page.json', 'w') as f:
    json.dump(out, f, indent = 4)