str1=input()
str1=str1.split()
str2=input()
str2=str2.split()
a_dict=dict(zip(str1,str2))
print(sorted(a_dict.items(), key=lambda e:e[0], reverse=False))#按键排序，True为降序，False为升序
#sorted(a_dict.items(), key=lambda e:e[1], reverse=False)按键值排序