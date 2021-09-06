'a calculator'
a=int(input())
ch=input()
b=int(input())
if b==0:
	print('divided by zero')
else:
	d={'+':a+b,'-':a-b,'*':a*b,'/':a/b}
	n=d.get(ch)
	print("%.2f"%n)