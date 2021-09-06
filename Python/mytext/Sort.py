L = [('Bob',75),('Rose',64),('Lisa',88)]
def by_name(n):
	return n[0]
def by_score(n):
	return n[1]
print(sorted(L,key = by_name,reverse=True))
print(sorted(L,key = by_score))
