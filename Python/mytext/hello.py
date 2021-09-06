'a test module'
_author_ = 'ren'
import sys
def test():
	args = sys.argv
	if len(args) == 1:
		print('Hello World!')
	elif len(args) == 2:
		print('Hello, %s!'%args[1])
	else:
		print('Too many arguments!')
