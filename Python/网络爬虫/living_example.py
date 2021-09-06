""" 最好大学排名"""

import requests
from bs4 import BeautifulSoup
import bs4

def getHTMLText(url):
	try:
		r = requests.get(url,timeout = 30)
		r.raise_for_status()
		r.encoding = r.apparent_encoding
		return r.text
	except:
		return ""

def fillUnIvinformation(ulist,html):
	soup = BeautifulSoup(html,"html.parser")#解析HTML页面
	for tr in soup.find('tbody').children:#循环遍历tbody标签下的子节点
		if isinstance(tr,bs4.element.Tag):#判断遍历到的内容是否为标签属性
			tds = tr('td')       #<tag>() 等价于 <tag>.find_all()
			ulist.append([tds[0].string,tds[1].string,tds[2].string,tds[3].string,tds[4].string])
            #<>.string表示标签内的字符串
def printUnivInformation(ulist,num):
	#处理中英文混合输出格式
	tplt = "{0:^10}\t{1:{5}^10}\t{2:{5}^10}\t{3:^10}\t{4:^10}"
	print(tplt.format("排名","学校名称","省市","总分","指标得分",chr(12288)))
	for i in range(num):
		u = ulist[i]
		print(tplt.format(u[0],u[1],u[2],u[3],u[4],chr(12288)))

def main():
	uninfo = []
	url = "http://www.zuihaodaxue.com/zuihaodaxuepaiming2018.html"
	html = getHTMLText(url)
	fillUnIvinformation(uninfo,html)
	printUnivInformation(uninfo,30) #前30所大学

main()
