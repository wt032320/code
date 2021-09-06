sum=2
for i in range(3,100):
    flag=1
    for j in range(2,i):
        if i%j==0:
            flag=0
            break
    if flag==1:
        print(" %d"%i,end="")
        sum+=i
print("\n")
print("sum=%d"%sum)
