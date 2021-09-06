import requests
r = requests.get('http://www.baidu.com')
#get()方法构造一个向服务器请求资源的Request对象，并返回一个包含服务器资源的Response对象
"""Response对象的属性"""
#    r.status_code  -------> HTTP请求的返回状态，200表示成功 404或其他表示失败
#    r.text         -------> HTTP响应内容的字符串格式，即 链接的对应的页面内容
#    r.encoding     -------> 从HTTP header中猜测的响应内容的编码方式
#    r.apparent_encoding ----->从内容中分析出的响应内容编码方式（备选编码方式）
#    r.content      -------> HTTP 响应内容的二进制形式

print(r.status_code)
print(r.encoding)
print(r.apparent_encoding)
r.encoding = 'utf-8'
print(r.text)