import json

from JSON import *
from Factory import Creator
import yaml
from TOML import TOML


class C:
    pass


class B(C):
    pass


class A(B):
    name = 'name'
    age = 'test'

    def __init__(self):
        print('init')

    def test(self):
        print('test1')
        print('test12')

    def test2(self):
        print('test21')
        print('test22')


def testing():
    print('31')
    print('32')
    return 5


if __name__ == '__main__':
    # a = Creator.createSerializer({"b": A, "c": testing, "a": 1}, type='pickle')
    # obj = Creator.createDeserializer(a, type='pickle')

    # a = TOML.serialize({"b": A, "c": testing, "a": 1})
    # a_obj = TOML.parse(a)
    # print(type(a_obj["b"]))
    # aa = a_obj["b"]()
    pass
