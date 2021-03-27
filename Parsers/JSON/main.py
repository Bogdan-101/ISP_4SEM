from JSON import JSON
from Pickle import Pickle


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
    print({(1, 2, 3): 1})
    print(type(list([1, 2, 3])))
    str = JSON().dumps({"b": A, "c": testing, "a": 1})
    json = JSON().loads(str)
    print(json, str)
    a = json["b"]()
    a.test2()

    try:
        raise KeyError
    except Exception:
        print('yes')
