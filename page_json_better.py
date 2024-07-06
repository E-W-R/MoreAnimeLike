import pandas as pd
import numpy as np
import json

sim = pd.read_csv("similarities.csv", index_col = 0)
df = pd.read_csv("anime_data.csv", index_col = 0)
ids = sim.index

genres = ["Adventure", "Romance", "Sports", "Drama", "Fantasy", "Supernatural", "Psychological", "Comedy", "Action", "Isekai", "Mystery", "Slice of Life"]
weights = [348, 417, 140, 509, 624, 191, 108, 681, 738, 200, 194, 146]

out = {}
for ID1 in ids:
    similar = [ids[j] for j in np.argsort(sim[str(ID1)])[-50:-1]][::-1]
    radar = [0] * 12
    weight = 50
    for ID2 in similar:
        row = df.loc[ID2]
        G = [row["genre" + str(j)] for j in range(1, 6)]
        for g in G:
            if g in genres:
                i = genres.index(g)
                radar[i] += weight / (weights[i] ** 0.5)
        weight -= 1
    # radar = [r ** 2 for r in radar]
    radar = [int(r * 100 // sum(radar)) for r in radar]
    out[int(ID1)] = radar

with open('anime/better_page.json', 'w') as f:
    json.dump(out, f, indent = 4)