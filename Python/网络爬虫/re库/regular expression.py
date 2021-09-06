import re
pattern = re.compile(r'^\(?[2-9][0-9]{2}\)?(| |-|\.)[0-9]{3}( |-|\.)[0-9]{4}$')
"""compile()函数用于编译正则表达式"""
while True:
	phone = input('Enter a phone number:')
	if phone == 'exit':
		break
	if pattern.search(phone):
		print('That is a valid phone number')
	else:
		print('Sorry,that is not a valid phone number')
print('Thanks for trying our program')