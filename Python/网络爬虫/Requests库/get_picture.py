import requests
import os
url = "https://c-ssl.duitang.com/uploads/item/201812/18/20181218140812_tbpzv.thumb.700_0.jpg"
root = "D://pics//"
path = root + url.split('/')[-1]
try:
	if not os.path.exists(root):# os.path.exists() 用于判断文件或文件夹是否存在
		os.mkdir(root)
	if not os.path.exists(path):
		r = requests.get(url)
		with open(path,'wb') as f:
			f.write(r.content)
			f.close()
			print("sucess")
	else:
		print("文件已存在")
except:
	print("ERROR")