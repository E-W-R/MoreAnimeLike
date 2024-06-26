import pandas as pd
import numpy as np
import urllib.parse
import json
import os

sim = pd.read_csv("similarities.csv", index_col = 0)
df = pd.read_csv("anime_data.csv", index_col = 0)
ids = sim.index
with open("descriptions.json", "r") as f:
    descriptions = json.load(f)

def delete_non_html_files(directory):
    for filename in os.listdir(directory):
        file_path = os.path.join(directory, filename)
        if os.path.isfile(file_path) and filename.endswith('.html'):
            os.remove(file_path)
delete_non_html_files("anime")

def convert_to_url_path(anime_names):
    url_paths = []
    for name in anime_names:
        name = name.lower()
        name = name.replace(' ', '-')
        name = name.replace('/', '')
        name = urllib.parse.quote(name, safe='-')
        url_paths.append(name)
    return url_paths

url_paths = convert_to_url_path(df["title"])
url_dict = dict(zip(df.index, url_paths))

genres = set(df['main_genre'])
genre_dict = dict(zip(genres, range(1, len(genres) + 1)))

tail = """
        </section>
    </main>
</body>
</html>
"""

for ID1 in ids:
    out = ""
    row1 = df.loc[ID1]
    name1 = row1['title']
    url1 = url_dict[ID1] + '.html'
    genre1 = row1['main_genre']
    if genre1 == "Other":
        genre1 = "Other Genre"
    year1 = row1["start_date"]
    if len(year1) < 4:
        year1 = "Unknown Date"
    else:
        year1 = year1[:4]
    description1 = descriptions[str(ID1)]
    image1 = row1["picture"]
    similar = [ids[j] for j in np.argsort(sim[str(ID1)])[-31:-1]]

    head = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like {name1}</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="page.css">
    <link rel="icon" href="../favicon.png" type="image/png">
    <script src="page.js"></script>
</head>
<body>
    <header>
        <script>const number = "{ID1}";</script>
        <a href="../index.html" class="home-icon"><i class="fas fa-home"></i></a>
        <a href="javascript:void(0);" class="home-icon", id="randomPageLink"><i class="fas fa-random"></i></a>
        <div class="header-content">
            <h1>Find more anime like: </h1>
            <div class="search-container">
                <input type="text" id="searchBox" class="searchBox" placeholder="">
                <div id="autocomplete-list" class="autocomplete-items"></div>
            </div>
        </div>
        <label class="switch">
            <input type="checkbox" id="themeToggle">
            <span class="slider round"></span>
        </label>
    </header>
    <p id="tagline"><a href="../about.html">Discover more anime like your favorites based on the experiences of over one hundred thousand others.</a></p>
    <div class="black-bar"></div>
    <main>
        <section id="main-anime">
            <div class="anime-details">
                <img src="{image1}" alt="{name1}">
                <div>
                    <h2 id="title">{name1}</h2>
                    <p>{genre1}</p>
                    <p>{year1}</p>
                    <br><br>
                    <p>{description1}</p>
                </div>
            </div>
            <div id="d3-container"></div>
        </section>
        <br>
        <section id="recommendations">
"""
    out += head

    rank = 30
    for ID2 in similar:
        row2 = df.loc[ID2]
        name2 = row2['title']
        url2 = url_dict[ID2] + '.html'
        genre2 = row2['main_genre']
        if genre2 == "Other":
            genre2 = "Other Genre"
        year2 = row2["start_date"]
        if len(year2) < 4:
            year2 = "Unknown Date"
        else:
            year2 = year2[:4]
        description2 = descriptions[str(ID2)]
        image2 = row2["picture"]
        sim_pct = str(min(round((float(sim[str(ID1)][ID2]) - 0.86) * 100 // 0.06), 99)) + "%"
        if int(sim_pct[:-1]) < 5:
            rank -= 1
            continue

        body = f"""
            <div class="recommendation">
                <div class="rank-container">
                    <div class="rank">{rank}</div>
                    <div class="similarity-meter">
                        <div class="meter">
                            <span style="width: {sim_pct};"></span>
                        </div>
                        <p>{sim_pct} Similarity</p>
                    </div>
                </div>
                <div class="rec-details"></div>
                <img src="{image2}" alt="{name2}">
                <div class="details">
                    <a href="{url2}"><h3>{name2}</h3></a>
                    <p>{genre2}</p>
                    <p>{year2}</p>
                    <br>
                    <p>{description2}</p>
                </div>
            </div>
"""
        out += body
        rank -= 1

    out += tail

    outname = name1.lower().replace(' ', '-').replace('/', '')
    with open(f'anime/{outname}.html', 'w') as f:
        f.write(out)

out = []
directory = "anime"
for filename in os.listdir(directory):
    file_path = os.path.join(directory, filename)
    out.append("../" + file_path)
with open("pages.json", "w") as f:
    json.dump({"pages": out}, f, indent = 4)