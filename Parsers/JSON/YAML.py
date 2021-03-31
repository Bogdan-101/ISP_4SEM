from Parser import Parser
import yaml


class YAML(Parser):
    @staticmethod
    def serialize(obj):
        str = yaml.dump(obj)
        return str

    @staticmethod
    def parse(str):
        obj = yaml.load(str, Loader=yaml.FullLoader)
        return obj
