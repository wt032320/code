import requests
from bs4 import BeautifulSoup
#Beautiful Soup库是解析，遍历，维护“标签树”（HTML,XML文件）的功能库

r = requests.get("http://python123.io/ws/demo.html")
demo = r.text
soup = BeautifulSoup(demo,"html.parser") # html.parser 为HTML解析器
print(soup.prettify())#prettify()方法用于html文档的输出
print(soup.a)
print(soup.a.name)
print(soup.a.attrs)
print(soup.a.attrs['href'])
print(soup.p.string)