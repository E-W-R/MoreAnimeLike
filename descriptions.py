import pandas as pd
import json
from openai import OpenAI
import os

ids = pd.read_csv("similarities.csv", index_col = 0).index
df = pd.read_csv("anime_data.csv", index_col = 0)
titles = [df.loc[ID]["title"] for ID in ids]

messages = []
i = 1

for title in titles:

    os.environ["OPENAI_API_KEY"] = ...
    client = OpenAI()

    completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "Your job is to write anime descriptions. Give a description of the plot and don't include spoilers. Aim for around 80 words. Speak only on the plot, no themes."},
        {"role": "user", "content": title}
    ]
    )

    message = completion.choices[0].message.content

    messages.append(message.replace('"', ''))
    print(i)
    i += 1

out = dict(zip(ids, messages))

with open('descriptions.json', 'w') as f:
    json.dump(out, f, indent = 4)