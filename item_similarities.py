import pandas as pd
import numpy as np

df = pd.read_csv('list_data.csv')
ids = list(df.columns)
score_matrix = df.values

n_cols = len(ids)
def cosine(v1, v2):
    b1, b2 = v1 > 0, v2 > 0
    non_zero_indices = (b1) & (b2)
    if np.sum(non_zero_indices) < 50:
        return 0
    v1, v2 = v1[non_zero_indices], v2[non_zero_indices]
    dot_product = np.dot(v1, v2)
    norm_v1 = np.linalg.norm(v1)
    norm_v2 = np.linalg.norm(v2)
    similarity = dot_product / (norm_v1 * norm_v2)
    return similarity

def common(v1, v2):
    b1, b2 = v1 > 0, v2 > 0
    non_zero_indices = (b1) & (b2)
    return np.sum(non_zero_indices) / min(np.sum(b1), np.sum(b2))

def mad(v1, v2):
    b1, b2 = v1 > 0, v2 > 0
    non_zero_indices = (b1) & (b2)
    if np.sum(non_zero_indices) < 50:
        return 0
    v1, v2 = v1[non_zero_indices], v2[non_zero_indices]
    return 1 - np.mean(np.abs(v1 - v2)) / 10

distance_matrix = np.zeros((n_cols, n_cols))
for i in range(n_cols):
    print(i)
    vec = score_matrix[:, i]
    distances = np.apply_along_axis(lambda col: mad(vec, col),
        axis = 0, arr = score_matrix)
    distance_matrix[i, :] = distances

out = pd.DataFrame(distance_matrix)
out.index = ids
out.columns = ids
out.to_csv("item_similarities3.csv", index = True)