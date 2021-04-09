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
    def dump(cls, obj, pf, isPickle=False):
        str = cls.serialize(obj)
        try:
            if pf[:2] == './':
                pf = pf[2:]
            if os.path.isfile(pf):
                print('File by this path will be overridden')
            if isPickle is False:
                file = open(pf, 'w')
            else:
                file = open(pf, 'wb')
            file.write(str)
            file.close()
        except Exception as e:
            print('There is no such file by path: ' + pf)

    @classmethod
    def dumps(cls, obj):
        return cls.serialize(obj)

    @classmethod
    def load(cls, pf, isPickle=False, isBuffer=False):
        if pf[:2] == './':
            pf = pf[2:]
        try:
            if isPickle is False:
                file = open(pf, 'r')
            else:
                file = open(pf, 'rb')
            str = file.read()
            return cls.loads(str, isBuffer)
        except Exception as e:
            print('There is no such file by path: ' + pf)

    @classmethod
    def loads(cls, str, isBuffer=False):
        json = cls.parse(str, isBuffer)
        return json


