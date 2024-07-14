import xml.etree.ElementTree as ET
from datetime import datetime
import pandas as pd
import urllib.parse

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

url_paths = convert_to_url_path(df["title"])
url_dict = dict(zip(df.index, url_paths))

# List of anime names
anime_names = [url_dict[ID] for ID in ids]  # Add your list of anime names here

# Current date for lastmod
current_date = datetime.now().strftime("%Y-%m-%d")

# Base URL of the website
base_url = "https://www.moreanimelike.com"

# Create the root element of the sitemap
urlset = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")

# Function to add a URL to the sitemap
def add_url(loc, lastmod, changefreq, priority):
    url = ET.SubElement(urlset, "url")
    ET.SubElement(url, "loc").text = loc
    ET.SubElement(url, "lastmod").text = lastmod
    ET.SubElement(url, "changefreq").text = changefreq
    ET.SubElement(url, "priority").text = str(priority)

# Add homepage
add_url(f"{base_url}/", current_date, "daily", 1.0)

# Add about page
add_url(f"{base_url}/about", current_date, "yearly", 0.5)

# Add recommendation pages
for name in anime_names:
    add_url(f"{base_url}/anime/{name}", current_date, "monthly", 0.8)

# Convert the XML tree to a string
sitemap = ET.tostring(urlset, encoding="utf-8", method="xml").decode("utf-8")

# Save the sitemap to a file
with open("sitemap.xml", "w") as file:
    file.write(sitemap)

print("Sitemap generated successfully.")