from abc import ABC
from JSON import JSON
from Pickle import Pickle
from YAML import YAML
from TOML import TOML


class Creator(ABC):
    @staticmethod
    def createSerializer(obj, type='JSON', filePath=''):
        parser = None
        if type.lower() == 'json':
            parser = JSON()
        elif type.lower() == 'pickle':
            parser = Pickle()
        elif type.lower() == 'yaml':
            parser = YAML()
        elif type.lower() == 'toml':
            parser = TOML()

        if filePath == '':
            str = parser.dumps(obj)
            return str
        else:
            parser.dump(obj, filePath)
            return 'Done by path ' + filePath

    @staticmethod
    def createDeserializer(str='', type='JSON', filePath=''):
        parser = None
        if type.lower() == 'json':
            parser = JSON()
        elif type.lower() == 'pickle':
            parser = Pickle()

        if filePath == '':
            obj = parser.loads(str)
            return obj
        else:
            obj = parser.load(filePath)
            return obj
