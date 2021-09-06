import pymysql
class PyMysql:
    def __init__(self):
        ##1.链接数据库
        self.db = pymysql.connect(user='root',host='localhost', port=3306,password='wt182320..',database='lianjia')
        ##2.创建游标
        self.c = self.db.cursor()
    def sql_caozuo(self,sql):
        ##3.执行sql语句
        self.c.execute(sql)
        ##查看回执
        print(self.c.fetchall())
    ##__del__魔术方法在主程序运行结束后,开始运行垃圾回收机制时候运行.
    def __del__(self):
        self.db.commit()
        self.c.close()
        self.db.close()

import requests
from lxml import etree
import json
import re
import math

def panduan(obj):
    if obj:
        return obj[0]
    else:
        return 'None'


def pinyin(url2,headers,proxies):
    response = requests.get(url=url2,headers=headers,proxies=proxies).text
    response = str(response)
    partten = re.compile(r'"short":"(.*?)"')
    pinyin_list= partten.findall(response)

    for pinyin in pinyin_list:
        full_url = 'https://{}.fang.lianjia.com/loupan/'.format(pinyin)
        response1 = requests.get(url=full_url,headers=headers,proxies=proxies).content.decode('utf-8')
        tree = etree.HTML(response1)
        # 提取页数：
        total_page = tree.xpath('//div[@class="page-box"]/@data-total-count')
        for page in range(1, math.ceil(int(total_page[0]) / 10) + 1):
            url = full_url+'pg{}'.format(page)
            # print(url)
            response = requests.get(url=url,headers=headers,proxies=proxies).content.decode('utf-8')
            tree = etree.HTML(response)
            li_list = tree.xpath('//ul[@class="resblock-list-wrapper"]/li')
            lianjia_list=[]
            for li in li_list:
                lianjia_dict = {}
                # （1）图片：
                src = li.xpath('.//img[@class="lj-lazy"]/@data-original')
                print(panduan(src))
                tupian = panduan(src)
                lianjia_dict["图片链接"] = tupian
                # (2) 楼盘名称，
                title = li.xpath('./a/@title')
                print(panduan(title))
                loupan = panduan(title)
                lianjia_dict["楼盘名称"] = loupan
                # (3) # 均价，
                price = li.xpath('.//span[@class="number"]/text()|.//span[@class="desc"]/text()')
                price_new = ''.join(price).replace('\xa0', '')
                print(price_new)
                lianjia_dict["均价"] = price_new


                # (4)建筑面积，
                area_list = li.xpath('.//div[@class="resblock-area"]/span/text()')
                print(panduan(area_list))
                jianzhu = panduan(area_list)
                lianjia_dict["建筑面积"] = jianzhu
                #(5) 区域
                add = li.xpath('.//div[@class="resblock-location"]/span/text()')
                quyu = panduan(add)
                print(panduan(add))
                lianjia_dict["区域"] = quyu
                #(6)商圈
                shop = li.xpath('.//div[@class="resblock-location"]/a/text()')
                print(panduan(shop))
                shangquan = panduan(shop)
                lianjia_dict["商圈"] = shangquan

                #详情页url:
                href = li.xpath('.//a[@class="resblock-room"]/@href')[0].replace("/loupan/","")
                detail_url = full_url+href
                # print(detail_url)
                response = requests.get(url=detail_url,headers=headers,proxies=proxies).content.decode('utf-8')
                detail_tree = etree.HTML(response)
                # 访问详情页
                # （5）户型
                li_list = detail_tree.xpath('//li[@data-index="0"]/ul')
                huxinglist = []
                chaoxianglist = []
                imglist = []
                for li in li_list:

                    #户型
                    huxing = li.xpath('.//div[@class="content-title"]/text()')
                    huxinglist.append(panduan(huxing).strip())
                    #朝向
                    chaoxiang = li.xpath('.//div[@class="content-area"]/text()')
                    chaoxianglist.append(panduan(chaoxiang))
                    #img
                    img = li.xpath('.//img/@src')[0]
                    imglist.append(img)
                print(imglist)
                lianjia_dict["户型图片"] = imglist

                #将户型朝向以键值对的形式存入字典中
                huchao_list = []
                for huxing,chaoxiang in zip(huxinglist,chaoxianglist):
                    dict = {}
                    dict[huxing] = chaoxiang
                    huchao_list.append(dict)
                print(huchao_list)
                lianjia_dict["户型朝向"] = huchao_list
                #楼盘详情信息
                xhref = detail_tree.xpath('.//div[@class="more-building"]/a/@href')[0]
                href = full_url.replace('/loupan/','')+xhref
                # print(href)
                response_xinxi = requests.get(url=href, headers=headers,proxies=proxies).content.decode('utf-8')
                xinxi_tree = etree.HTML(response_xinxi)
                xinxi_list = xinxi_tree.xpath('//div[@class="big-left fl"]')
                for xinxi in xinxi_list:
                    # 售楼处地址
                    shoulou = xinxi.xpath('.//ul[@class="x-box"][1]/li[@class="all-row"][2]/span[@class="label-val"]/text()')
                    sl = panduan(shoulou)
                    print(sl)
                    lianjia_dict["售楼处地址"] = sl

                    # 开发商
                    kaifa = xinxi.xpath('.//ul[@class="x-box"][1]/li[@class="all-row"][3]/span[@class="label-val"]/text()')
                    kf = panduan(kaifa)
                    print(kf)
                    lianjia_dict["开发商"] = kf
                    # 物业公司
                    wuye = xinxi.xpath('.//ul[@class="x-box"][3]//span[@class="label-val"]/text()')
                    wy = panduan(wuye)
                    print(wy)
                    lianjia_dict["物业公司"] = wy
                    # 最新开盘
                    kaipan = xinxi.xpath('./ul[@class="fenqi-ul"]/li[3]/span[@class="fq-td fq-open"]/span/text()')
                    kp = panduan(kaipan)
                    print(kp)
                    lianjia_dict["最新开盘"] = kp
                    # 物业类型
                    wuyetype = xinxi.xpath('.//ul[@class="x-box"][2]//span[@class="label-val"]/text()')
                    wuyet = panduan(wuyetype)
                    print(wuyet)
                    lianjia_dict["物业类型"] = wuyet
                    # 交房时间
                    jiaofangtime = xinxi.xpath('./ul[@class="fenqi-ul"]/li[@class="fq-nbd"]/span[@class="fq-td fq-open"]/span/text()')
                    jf = panduan(jiaofangtime)
                    print(jf)
                    lianjia_dict["交房时间"] = jf
                    # # 容积率
                    rongji = xinxi.xpath('./ul[@class="x-box"][2]/li[4]/span[@class="label-val"]/text()')
                    rj = panduan(rongji).strip()
                    print(rj)
                    lianjia_dict["容积率"] = rj
                    # 产权年限
                    chanquan = xinxi.xpath('.//ul[@class="x-box"][2]/li[8]/span[@class="label-val"]/text()')
                    cq = panduan(chanquan).strip()
                    print(cq)
                    lianjia_dict["产权年限"] = cq
                    # 绿化率
                    lvhua = xinxi.xpath('.//ul[@class="x-box"][2]/li[2]/span[@class="label-val"]/text()')
                    lh = panduan(lvhua).strip()
                    print(lh)
                    lianjia_dict["绿化率"] = lh
                    # 规划户数
                    yonghu = xinxi.xpath('.//ul[@class="x-box"][2]/li[7]/span[@class="label-val"]/text()')
                    yh = panduan(yonghu)
                    print(yh)
                    lianjia_dict["规划户数"] = yh
                    # 物业费用
                    wuyefei = xinxi.xpath('.//ul[@class="x-box"][3]/li[3]/span[@class="label-val"]/text()')
                    wyf = panduan(wuyefei)
                    print(wyf)
                    lianjia_dict["物业费用"] = wyf
                    # 车位情况
                    chewei = xinxi.xpath('.//ul[@class="x-box"][3]/li[7]/span[@class="label-val"]/text()')
                    cw = panduan(chewei).strip()
                    print(cw)
                    lianjia_dict["车位情况"] = cw
                    # 供暖方式
                    gongnuan = xinxi.xpath('.//ul[@class="x-box"][3]/li[4]/span[@class="label-val"]/text()')
                    gn = panduan(gongnuan)
                    print(gn)
                    lianjia_dict["供暖方式"] = gn
                    # 供水方式
                    gongshui = xinxi.xpath('.//ul[@class="x-box"][3]/li[5]/span[@class="label-val"]/text()')
                    gs = panduan(gongshui)
                    print(gs)
                    lianjia_dict["供水方式"] = gs
                    # 供电方式
                    gongdian = xinxi.xpath('.//ul[@class="x-box"][3]/li[6]/span[@class="label-val"]/text()')
                    gd = panduan(gongdian)
                    print(gd)
                    lianjia_dict["供电方式"] = gd
                    # # 嫌恶设施
                    # 占地面积
                    mianji = xinxi.xpath('.//ul[@class="x-box"][2]/li[3]/span[@class="label-val"]/text()')
                    mj = panduan(mianji).strip()
                    print(mj)
                    lianjia_dict["占地面积"] = mj
                    # print(lianjia_dict)
                    lianjia_list.append(lianjia_dict)
                # 存入
                p = PyMysql()
                sql = 'insert into lianjia_data(img,name,price,area,address,shangquan,huxinimg,huxingdata,shoulouadd,kaifa,wuye,kaipan,jianzhutype,jiaofangtime,rongji,chanquan,lvhau,usernum,wuyefei,chewei,gn,gs,gd,jzarea) values ("{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}")'.format(
                    tupian, loupan, price_new, jianzhu, quyu, shangquan, imglist, huchao_list, sl, kf, wy, kp,
                    wuyet, jf, rj, cq, lh, yh, wyf, cw, gn, gs, gd, mj)
                p.sql_caozuo(sql)
                # print(lianjia_list)
            # data =json.dumps(lianjia_list,ensure_ascii=False)
            # with open('lianjia.json','a',encoding='utf-8') as fp:
            #         fp.write(data)

if __name__ == '__main__':
    proxies = {'http': '125.110.90.93:9000'}
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36', }

    url2 = 'https://ajax.api.lianjia.com/config/cityConfig/getConfig?callback=jQuery1111039566567830421073_1574853147759&type=province&category=1&_=1574853147760'

    p = PyMysql()
    ##删除语句
    # p.sql_caozuo('drop tables demo03')
    ##建表语句
    p.sql_caozuo(
        'create table if not exists lianjia_data(id int primary key auto_increment,img varchar(255),name varchar(255),price varchar(255),area varchar(255),address varchar(255),shangquan varchar(255),huxinimg varchar(5555),huxingdata varchar(5555),shoulouadd varchar(255),kaifa varchar(255),wuye varchar(255),kaipan varchar(255),jianzhutype varchar(255),jiaofangtime varchar(255),rongji varchar(255),chanquan varchar(255),lvhau varchar(255),usernum varchar(255),wuyefei varchar(255),chewei varchar(255),gn varchar(255),gs varchar(255),gd varchar(255),jzarea varchar(255))')
    ##插入数据语句

    pinyin(url2,headers,proxies)