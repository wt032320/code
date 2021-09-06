def factorial(n):

    if n == 1 or n == 0:
        return 1
    else:
        return factorial(n-1)*n
def triangle(max):
	L = [1]
	yield L
	L = []
	for i in range(1, max):
		for j in range(0, i + 1):
			L.append(int(factorial(i)/(factorial(i-j)*factorial(j))))
		yield L
		L = []
	return 'done'
# for n in triangle(10):
# 	print()
a = triangle(3)
print(next(a))