b_list=[]
b_list=[int(x) for x in b_list.split(input())]
n=len(b_list)
aver=sum(b_list)/n
for i in range(n):
	if b_list[i]>aver:
		print("%d "%b_list[i],end="")
