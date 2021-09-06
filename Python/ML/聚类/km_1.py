import numpy as np
import matplotlib.pyplot as plt
from sklearn import metrics
from sklearn.datasets.samples_generator import make_blobs
from sklearn.cluster import KMeans

X = np.array([[0.697, 0.460], [0.774, 0.376], [0.634, 0.264], [0.608, 0.318],

              [0.556, 0.215], [0.403, 0.237], [0.481, 0.149], [0.437, 0.211], [0.666, 0.091], [0.243, 0.267],
              [0.245, 0.057], [0.343, 0.099], [0.639, 0.161], [0.657, 0.198], [0.360, 0.370], [0.593, 0.042],
              [0.719, 0.103], [0.359, 0.188], [0.339, 0.241], [0.282, 0.257], [0.748, 0.232], [0.714, 0.346],
              [0.483, 0.312], [0.478, 0.437], [0.525, 0.369], [0.751, 0.489], [0.532, 0.472], [0.473, 0.376],
              [0.725, 0.450], [0.446, 0.459]])
plt.scatter(X[:, 0], X[:, 1], marker='o', color='brown')
plt.show()

y_pred = KMeans(n_clusters=3).fit_predict(X)
plt.scatter(X[:, 0], X[:, 1], c=y_pred)
plt.show()