import pathlib
import os

class Parser():
    @staticmethod
    def lex():
        raise NotImplementedError()

    @staticmethod
    def parse(self):
        raise NotImplementedError()

    @staticmethod
    def serialize(self):
        raise NotImplementedError()

    @classmethod
    def dump(cls, obj, pf):
        str = cls.serialize(obj)
        if pf[:2] == './':
            pf = pf[2:]
        if os.path.isfile(pf):
            print('File by this path will be overridden')
        file = open(pf, 'w')
        file.write(str)
        file.close()

    @classmethod
    def dumps(cls, obj):
        return cls.serialize(obj)

    @classmethod
    def load(cls, pf):
        if pf[:2] == './':
            pf = pf[2:]
        try:
            file = open(pf, 'r')
            str = file.read()
            return cls.loads(str)
        except Exception as e:
            print('There is no such file by path: ' + pf)

    @classmethod
    def loads(cls, str):
        json = cls.parse(str)
        return json


