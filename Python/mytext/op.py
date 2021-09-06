from product1 import Product1
prod1 = Product1('carrot',1.23,10)
print(prod1)
print('Buying 4 carrots...')
prod1.buy_Product(4)
print(prod1)
print('Changing the price to $2.43...')
prod1.price = 2.43
print(prod1)