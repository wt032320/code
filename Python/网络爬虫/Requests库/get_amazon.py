import requests
url = "https://www.amazon.cn/dp/B07NJR58LW/"
try:
	kv = {'user-agent':'Mozilla/5.0'}
	r = requests.get(url,headers = kv)
	r.raise_for_status()
	r.encoding = r.apparent_encoding
	print(r.text[:1000])
except:
	print('ERROR')
