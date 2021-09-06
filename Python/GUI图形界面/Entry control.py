"""-----------------------------------------------------"""
"""使用Entry控件(创建一个单行的表单字段)"""

from tkinter import *

class Application(Frame):
	"""Build the basic window frame template"""

	def __init__(self,master):
		super(Application,self).__init__(master)
		self.grid()
		self.create_widgets()

	def create_widgets(self):
		self.labell = Label(self, text ='Please enter some text in lower case')
		self.labell.grid(row = 1)
		self.text1 = Entry(self)
		self.text1.grid(row = 2)
		self.button1 = Button(self, text = 'Convent text',command = self.convert)
		self.button2 = Button(self, text = 'Clear result',command = self.clear)
		self.button1.grid(row = 6,column = 0)
		self.button2.grid(row = 6,column = 1)
		self.text1.focus_set()#focus_set()方法允许你告诉窗口那个控件应该控制光标

	def convert(self):
		"""Retrieve the text and convert to upper case"""
		varText = self.text1.get()#get()方法用来检索表单字段的文本
		varReplaced = varText.upper()#upper()方法用于返回转换为大写的字符串
		self.text1.delete(0,END)#delete()方法用于删除Entry控件原始的文本
		self.text1.insert(END,varReplaced)#insert()方法将文本重新放到Entry控件中显示

	def clear(self):
		"""Clear the Entry widget"""
		self.text1.delete(0,END)
		self.text1.focus_set()

root = Tk()
root.title('Testing and Entry widget')
root.geometry('500x200')
app = Application(root)
app.mainloop()
