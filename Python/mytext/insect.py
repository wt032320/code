#  insect base class
#
class Insect():
	"""The Insect class creates for insect characteristics"""
	# Initialize Insect class data attributes
	body = ['head','chest','belly']
	def __init__(self, backbone = 'none', exoskeleton = 'chitinous', body=['head','chest','belly'],
	leg = 'three_jointed_leg_pairs',eyes = 'compound',tentacle = 'pair'):
		self.__backbone = backbone
		self.__exoskeleton = exoskeleton
		self.__body = body
		self.__leg = leg
		self.__eyes = eyes
		self.__tentacle = tentacle
	def get_backbune(self):
		return self.__backbone
	def get_exoskelton(self):
		return self.__exoskeleton
	def get_body(self):
		return self.__body
	def get_leg(self):
		return self.__leg
	def get_eyes(self):
		return self.__eyes
	def get_tentacle(self):
		return self.__tentacle
