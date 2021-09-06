"""  通过聚类，了解1999年各省份的消费水平在国内的情况   """

import numpy as np
from sklearn.cluster import KMeans
# 导入sklearn相关包

def loadData(filePath):
    fp = open(filePath,'r+',encoding= 'utf-8') #读写方式打开存储城市信息的文件
    lines = fp.readlines()  #读取文件中的所有信息
    retData = []       #用来存储城市的各项消费信息
    recityname = []    #存储城市名称
    for line in lines:
        items = line.strip().split(",")
        recityname.append(items[0])
        retData.append([float(items[i]) for i in range(1,len(items))])
    return retData,recityname


if __name__ == '__main__':
    filepath = r"C:\Users\14760\Documents\city.txt"
    data,cityName = loadData(filepath)
    km = KMeans(n_clusters = 4) #n_clusters参数用来指定聚类中心的个数
    label = km.fit_predict(data) #fit——predict()方法用于计算簇中心以及为簇分配序号
    expenses = np.sum(km.cluster_centers_,axis=1)  #axis:按行求和
    CityCluster = [[],[],[],[]]
    for i in range(len(cityName)):
        CityCluster[label[i].append(cityName[i])]
    for i in range(len(CityCluster)):
        print('Expenses:%.2f'% expenses[i])
        print(CityCluster[i])
