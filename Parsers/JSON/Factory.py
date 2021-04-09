from abc import ABC
from JSON import JSON
from Pickle import Pickle
from YAML import YAML
from TOML import TOML


class Creator(ABC):
    @staticmethod
    def createSerializer(obj={}, type='JSON', filePath=''):
        if type.lower() == 'json':
            parser = JSON()
        elif type.lower() == 'pickle':
            parser = Pickle()
        elif type.lower() == 'yaml':
            parser = YAML()
        elif type.lower() == 'toml':
            parser = TOML()
        else:
            raise Exception('Unknown type! Type must be JSON/TOML/YAML/Pickle')

        if filePath == '':
            str = parser.dumps(obj)
            return str
        else:
            if type.lower() == 'pickle':
                parser.dump(obj, filePath, isPickle=True)
            else:
                parser.dump(obj, filePath)
            return 'Done by path ' + filePath

    @staticmethod
    def createDeserializer(str='', type='JSON', filePath='', isBuffer=False):
        parser = None
        if type.lower() == 'json':
            parser = JSON()
        elif type.lower() == 'pickle':
            parser = Pickle()
        elif type.lower() == 'toml':
            parser = TOML()
        elif type.lower() == 'yaml':
            parser = YAML()
        else:
            raise Exception('Unknown type! Type must be JSON/TOML/YAML/Pickle')

        if filePath == '':
            obj = parser.loads(str)
            return obj
        else:
            if type.lower() == 'pickle':
                obj = parser.load(filePath, isPickle=True, isBuffer=isBuffer)
            else:
                obj = parser.load(filePath, isBuffer=isBuffer)
            return obj
