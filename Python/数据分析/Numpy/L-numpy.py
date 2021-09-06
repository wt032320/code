import numpy as np
#创建数组
list1 = [1,3,5,-2,0,9]
list2 = [2,4,-3,-7,1,-7]
list3 = [[2,5,0],[12,3,4]]
list4 = [[3,-1,8],[9,-3,9]]
#通过列表创建
#创建一维数组
arr1 = np.array(list1)
# print(arr1)

#创建二维数组
arr2 = np.array(list3)
# print(arr2)
"""------------------------------------"""

#通过函数创建
arr3 = np.arange(1,10,2)#从1到10 步长为2
# print(arr3)

arr4 = np.linspace(1,15,5)#从1到15 平均划分为5个数据
# print(arr4)

arr_zero = np.zeros((3,4))#创建三行四列全为零的数组,zeros()方法参数为一个元组
# print(arr_zero)

arr_one = np.ones((3,3))#创建三行三列全为一的数组，ones()方法参数为一个元组
# print(arr_one)
# print(arr_one*15)

arr_s = np.eye(4,4)#创建四行四列对角线上为1，其余为0的矩阵，eye()方法参数为(行数，列数)
# print(arr_s)

"""------------------------------------------"""
#数组的索引和切片

# print(arr2[0])#取第一行(二维数组),取第一个元素(一维数组)
# print(arr2[0][1])#取第一行第二个元素
#
# print(arr1[2:6])#左闭右开

"""------------------------------------------"""
#通用的函数运算
print("sqrt:\n",np.sqrt(arr2))#开平方

print("exp:\n",np.exp(arr2))#e次方

arr6 = np.array(list2)
new_arr = np.maximum(arr1,arr6)#比较两个数组，取较大的元素组成新数组
print(new_arr)

    