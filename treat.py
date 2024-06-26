import pandas as pd

genres = ["Isekai", "Mystery", "Psychological", "Sports", "Romance", "Action", "Drama", "Comedy"]

df = pd.read_csv("short_anime_data.csv", index_col = 0)

main_genre = []

for i in range(5008):
    row = df.iloc[i]
    G = [row["genre" + str(j)] for j in range(1, 6)]
    def key(g):
        if g in genres:
            return genres.index(g)
        return 10
    G.sort(key = key)
    b = False
    for j in range(0, 5):
        genre = G[j]
        if genre in genres:
            print(row["title"] + ": " + genre)
            main_genre.append((genre))
            b = True
            break
    if not b:
        print(row["title"] + ": " + str(G))
        main_genre.append("Other")

from collections import Counter
Counter(main_genre)

for i in range(8879):
    row = df.iloc[i]
    for j in range(1, 6):
        genre = row["genre" + str(j)]
        if genre == "Isekai":
            main_genre[i] = "Isekai"

df["main_genre"] = main_genre

df.to_csv("anime_data.csv", index = True)


df = df[df["num_list_users"] > 8700]
df.to_csv("short_anime_data.csv", index = True)


ids = df.index
main_anime = []
best_anime = []
for i in range(5008):
    row = df.iloc[i]
    title = row["title"]
    users = row["num_list_users"]
    main = ids[i]
    main_title = title
    score = row["mean"]
    best = ids[i]
    best_title = title
    try:
        related = [int(r) for r in row["related"].split()]
        b = True
        for r in related:
            try:
                more = [int(m) for m in df.loc[r]["related"].split()]
            except:
                continue
            for m in more:
                if m not in related:
                    related.append(m)
    except:
        best_anime.append(main)
        main_anime.append(main)
        continue
    for r in related:
        try:
            if df.loc[r]["num_list_users"] > users:
                users = df.loc[r]["num_list_users"]
                main = r
                main_title = df.loc[r]["title"]
            if df.loc[r]["mean"] > score:
                score = df.loc[r]["mean"]
                best = r
                best_title = df.loc[r]["title"]
        except:
            continue
    main_anime.append(main)
    best_anime.append(best)
    print(title, "\n", main_title, "\n", best_title)
    print()

df["main_anime"] = main_anime
df["best_anime"] = best_anime

df.to_csv("short_anime_data.csv", index = True)
