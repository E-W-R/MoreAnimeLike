import pandas as pd

df1 = pd.read_csv("c_similarities.csv", index_col = 0)
df2 = pd.read_csv("similarities.csv", index_col = 0)

remove = [17437]
rem_str = [str(ID) for ID in remove]

df1 = df1.drop(remove)
df2 = df2.drop(remove)
df1 = df1.drop(rem_str, axis = 1)
df2 = df2.drop(rem_str, axis = 1)

df1.to_csv("c_similarities.csv", index = True)
df2.to_csv("similarities.csv", index = True)

## rerun sim_to_json.py and page_json.py