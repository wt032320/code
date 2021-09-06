import requests
from bs4 import BeautifulSoup
url = "http://item.jd.com/100009177400.html"
try:
	r = requests.get(url)
	r.raise_for_status()
	r.encoding = r.apparent_encoding
	demo = r.text[:1000]
	soup = BeautifulSoup(demo,"html.parser")
	print(soup.prettify())
except:
	print('ERROR')