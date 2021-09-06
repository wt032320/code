my_file = open('C:\\AppData\\text3.txt','w')   #用只写方式打开文件
for data in range(5):
	my_friend = input('Friend`s name:')
	my_friend = my_friend+'\n'
	my_file.write(my_friend)
my_file.close()   #close()方法用于关闭文件
my_file = open('C:\\AppData\\text3.txt','r')   #用只读方式打开文件
for data in my_file:  #可以使用一个文件对象变量作为遍历整个文件的方法
	print(data,end='')
my_file.close()
my_file = open('C:\\AppData\\text3.txt','a')   #用追加的方式打开文件
for data in range(2):
	new_friend = input('New friends name:')
	new_friend = new_friend+'\n'
	my_file.write(new_friend)
my_file.close()
my_file = open('C:\\AppData\\text3.txt','r')
for data in range(7):
	the_data = my_file.readline()      #readline()方法用于逐行读取
	print(the_data,end='')
my_file.close()
# my_file.tell() #tell()方法用于显示文件指针的位置
# my_file.closed()#closed()方法：如果文件关闭就返回true,否则返回false
# my_file.name()#name()方法返回被打开的文件名称
# my_file.mode()#mode()方法返回文件的当前模式
# my_file.seek(0)#seek()方法用于重新定位文件指针