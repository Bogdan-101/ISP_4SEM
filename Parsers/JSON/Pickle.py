from Parser import Parser
import pickle


class Pickle(Parser):
    @staticmethod
    def serialize(obj):
        str = pickle.dumps(obj)
        return str

    @staticmethod
    def parse(str):
        obj = pickle.loads(str)
        return obj