"""---------------------------------------------------------------"""
"""使用Checkbutton控件(提供一个开关类型的界面)"""

from tkinter import *
class Application(Frame):
	"""Build the basic window frame template"""

	def __init__(self,master):
		super(Application,self).__init__(master)
		self.grid()
		self.varSausage = IntVar()
		self.varPepp = IntVar()
		self.create_widgets()

	def create_widgets(self):
		self.labell = Label(self,text = 'What do you want on your pizza?',bg = 'red')
		self.labell.grid(row = 0)
		self.check1 = Checkbutton(self, text = 'Sausage',variable = self.varSausage)
		self.check2 = Checkbutton(self, text = 'Pepperoni',variable = self.varPepp)
		self.check1.grid(row = 1)
		self.check2.grid(row = 2)
		self.button1 = Button(self,text = 'Order',command = self.display)
		self.button1.grid(row = 3)
	def display(self):
		"""Event handler for the button ,displays selections"""
		if (self.varSausage.get()):
			print('You want Sausage')
		if (self.varPepp.get()):
			print('You want pepperoni')
		if (not self.varSausage.get() and not self.varPepp.get()):
			print('You do not want anything on your pizza?')
		print('--------')

root = Tk()
root.title('Text checkbutton events')
root.geometry('300x300')
app = Application(root)
app.mainloop()
