import time,functools
def count_time(func):
	@functools.wraps(func)
	def wrapper(*args,**kw):
		t1 = time.time()
		func(*args,**kw)
		#time.sleep(2)
		t2 = time.time()
		print(t2-t1)
	return wrapper
@count_time
def func1(*num):
	time.sleep(2)
	print([x * x for x in num])
func1(2,3,4,5,6)