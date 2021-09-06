n=int(input())
for i in range(1,10**n):
    a=str(i)
    sum=0
    for j in range(0,len(a)):
        sum=sum+int(a[j])**5
    if sum==i:
        print(i)