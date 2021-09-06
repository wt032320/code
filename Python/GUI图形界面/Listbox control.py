"""使用ListBox控件(提供了一个多个值得列表供程序用户选择)"""

from tkinter import *
class Application(Frame):

	def __init__(self,master):
		super(Application,self).__init__(master)
		self.grid()
		self.create_widgets()

	def create_widgets(self):
		self.labell = Label(self,text = 'Select your items')
		self.labell.grid(row = 0)

		self.listbox1 = Listbox(self,selectmode = MULTIPLE)
		#参数selectmode可以有下面这些可用的选项
		#SINGLE------一次只能选择一个项目
		#BROWSE------一次只能选择一个项目，但是可以从列表中移动到多个项目
		#MULTIPLE-----可以通过单击选择多个项目
		#EXTENDED-----可以在单击是使用Shift和Ctrl选择多个项目
		items = ['Jack','Rose','Tom']
		for item in items:
			self.listbox1.insert(END,item)
			#使用insert()方法向列表中添加项目
		self.listbox1.grid(row = 1)

		self.button1 = Button(self, text = 'Submit',command = self.display)
		self.button1.grid(row = 2)

	def display(self):
		items = self.listbox1.curselection()
		#curselection()方法获取包含了选项中项目索引的一个元组(从0开始)
		for item in items:
			stritem = self.listbox1.get(item)#使用get()方法获取索引位置的项目文本值
			print(stritem)
		print('-------')

root = Tk()
root.title('Listbox widget test')
root.geometry('300x200')
app = Application(root)
app.mainloop()