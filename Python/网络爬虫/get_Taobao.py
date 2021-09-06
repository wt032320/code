# 淘宝商品比价定向爬虫
# 
# 
import requests
import re

def getHTMLText(url):
    try:
        r = requests.get(url,timeout = 30)
        r.raise_for_status()
        r.encoding = r.apparent_encoding
        return r.text
    except:
        return " "

def parsePage(ilt,html):
    try:
        
    except:

def printGoodsList(ilt):


def main():
    goods = '手机'
    depth = 3
    start_url = "https://uland.taobao.com/sem/tbsearch?keyword=" + goods
    infolist = []
    for i in range(depth):
        try:
            url = start_url + '&page=' + str(i)
            html = getHTMLText(url)
            parsePage(infolist,html)
        except:
            continue
    printGoodsList(infolist)

main()