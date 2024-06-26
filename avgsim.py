import pandas as pd
import numpy as np

df1 = pd.read_csv("/Users/evanrossiter/Documents/Code/Anime-Eye/similarities1.csv", index_col=0)
df2 = pd.read_csv("/Users/evanrossiter/Documents/Code/Anime-Eye/similarities2.csv", index_col=0)
df3 = pd.read_csv("/Users/evanrossiter/Documents/Code/Anime-Eye/similarities3.csv", index_col=0)
df4 = pd.read_csv("/Users/evanrossiter/Documents/Code/Anime-Eye/similarities4.csv", index_col=0)

dfs = [df1, df2, df3, df4]

def keep_min_20_non_zeros(df):
    df = df.loc[(df != 0).sum(axis=1) >= 20]
    df = df.loc[:, (df != 0).sum(axis=0) >= 20]
    return df

dfs = [keep_min_20_non_zeros(df) for df in dfs]
df1, df2, df3, df4 = dfs

ids1 = set(df1.columns)
ids2 = set(df2.columns)
ids3 = set(df3.columns)
ids4 = set(df4.columns)

ids = list(ids1 & ids2 & ids3 & ids4)
int_ids = sorted([int(ID) for ID in ids])
str_ids = [str(ID) for ID in int_ids]
dfs_common = [df.loc[int_ids, str_ids] for df in dfs]
df1, df2, df3, df4 = dfs_common

def average_similarity(dfs):
    sum_matrix = np.zeros((len(ids), len(ids)))
    count_matrix = np.zeros((len(ids), len(ids)))
    
    for df in dfs:
        mat = df.values
        non_zero_mask = mat != 0
        sum_matrix += mat * non_zero_mask
        count_matrix += non_zero_mask
    
    avg_matrix = np.round(np.divide(sum_matrix, count_matrix, where=count_matrix != 0), 3)
    
    return pd.DataFrame(avg_matrix, index=int_ids, columns=int_ids)

out = average_similarity(dfs_common)

out.to_csv("similarities.csv", index=True)

out = pd.read_csv("similarities.csv", index_col=0)
old = pd.read_csv("item_similarities3.csv", index_col=0)
CB = old["1"]
row = pd.DataFrame([{id: round(CB[int(id)], 3) for id in out.columns if id in old.columns}])
row.index = [1]
row

out = pd.concat([pd.DataFrame(row), out], axis = 0)

col = {id: round(CB[int(id)], 3) for id in list(out.columns) + ["1"] if id in old.columns or id == 1}

col = pd.DataFrame(list(col.items()), columns=['idx', '1'])
col.set_index('idx', inplace=True)

col.index = [int(ID) for ID in col.index]
pd.concat([col, out], axis = 1, ignore_index=False)

out.fillna(0, inplace = True)



cdf = pd.read_csv("/Users/evanrossiter/Documents/Code/Anime-Eye/c_similarities.csv", index_col=0)

cdf = cdf.loc[out.index, out.columns]
cdf.to_csv("c_similarities.csv", index = True)