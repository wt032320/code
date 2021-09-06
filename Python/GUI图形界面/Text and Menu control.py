"""使用Text控件(提供了多行输入或显示的功能),Menu控件(菜单栏(下拉式))"""

from tkinter import *
class Application(Frame):
	"""Build the basic window frame template"""
	def __init__(self,master):
		super(Application,self).__init__(master)
		self.grid()
		self.create_widgets()

	def create_widgets(self):
		menubar = Menu(self)
		filemenu = Menu(menubar)
		filemenu.add_command(label = 'Convert',command = self.convert)
		filemenu.add_command(label = 'Clear',command = self.clear)
		#用add_command()方法来添加一个单个的菜单项。每一个add_command()方法都需要
		#指定一个label参数来定义菜单项应该显示什么文本以及一个command参数来定义当
		#选中菜单项时应执行的方法
		menubar.add_cascade(label = 'work',menu = filemenu)
		#add_cascade()方法用来添加一个更高级的菜单栏
		root.config(menu = menubar)#将菜单栏连接到根对象Tk

		self.labell = Label(self, text = 'Enter the text to convert:')
		self.labell.grid(row = 0,column = 0,sticky = W)

		self.text1 = Text(self,width = 20,height = 10)
		self.text1.grid(row = 1,column = 0)
		self.text1.focus_get()

		self.button1 = Button(self, text = 'Convert',command = self.convert)
		self.button1.grid(row = 2,column = 0)
		self.button2 = Button(self, text = 'Clear',command = self.clear)
		self.button2.grid(row = 2 ,column = 1)

	def convert(self):
		varText = self.text1.get("1.0",END)#索引"x.y" ---> x是行的位置(从1开始),y是列的位置(从0开始)
		varReplaced = varText.upper()
		self.text1.delete("1.0",END)
		self.text1.insert(END,varReplaced)

	def clear(self):
		self.text1.delete("1.0",END)
		self.text1.focus_set()

root = Tk()
root.title('Text widget test')
root.geometry('300x250')
app = Application(root)
app.mainloop()