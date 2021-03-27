from Parser import Parser
from const import *


class Pickle(Parser):
    @staticmethod
    def serialize(obj):
        print('pickle serialize')

    @staticmethod
    def parse(str):
        print('pickle parse')