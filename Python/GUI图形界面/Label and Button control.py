from tkinter import *
class Application(Frame):
	"""Build the basic window frame template"""
	def __init__(self,master=None):
		super(Application,self).__init__(master)
		self.varCheckl = BooleanVar()
		self.grid()
		self.create_widgets()
	def create_widgets(self):
		self.labell = Label(self,text = 'Welcome to my window!',bg = 'red')
		self.labell.grid(row = 1,column = 1,sticky = N)
		self.buttonl = Button(self,text = 'Click me',command = self.display)
		self.buttonl.grid(row = 2,column = 2,sticky = W)
		self.checkl = Checkbutton(self,text = 'Option1',variable = self.varCheckl)
		self.checkl.grid(row = 3,column = 3, sticky = W)
	def display(self):
		"""Event handler for the button"""
		if (self.varCheckl.get()):
			print('The checkbutton was selected')
		else:
			print('the checkbutton was not selected')
root = Tk()
root.title('Test Application window with Label')
root.geometry('400x400')
app = Application(root)
app.mainloop()