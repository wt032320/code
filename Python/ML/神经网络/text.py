import numpy as np
from sklearn.cluster import KMeans


def loadData(filePath):
    fr = open(filePath, 'r+')
    lines = fr.readlines()
    retData = []
    retCityName = []
    for line in lines:
        items = line.strip().split(",")
        retCityName.append(items[0])
        retData.append([float(items[i]) for i in range(1, len(items))])
    return retData, retCityName


if __name__ == '__main__':
    filepath = r"C:\Users\14760\Documents\city.txt"
    data, cityName = loadData(filepath)  # 利用loadData方法读取数据
    km = KMeans(n_clusters=4)  # 创建实例
    label = km.fit_predict(data)  # 调用Kmeans() fit_predict()方法进行计算
    print(km.cluster_centers_)
    expenses = np.sum(km.cluster_centers_, axis=1)
    # print(expenses)
    CityCluster = [[], [], [], []]  # 将城市 按label分成设定的簇，将每个簇的城市输出
    for i in range(len(cityName)):
        CityCluster[label[i]].append(cityName[i])
    for i in range(len(CityCluster)):
        print("Expenses:{}.2f".format(expenses[i]))
        print(CityCluster[i])
