def move(n,x,z):
	print("将第%d个盘子从%c->%c"%(n,x,z))
def hanoi(n,x,y,z):
	if n==1:
		move(n,x,z)
	else:
		hanoi(n-1,x,z,y)
		move(n,x,z)
		hanoi(n-1,y,x,z)
#hanoi(5,'a','b','c')
