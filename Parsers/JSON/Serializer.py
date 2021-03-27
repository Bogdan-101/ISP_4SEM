from const import *


class Serializer:
    def __init__(self, obj):
        self.obj = obj

    def serialize_str_int(self, key, value):
        if type(value) is str:
            value = JSON_QUOTE + value + JSON_QUOTE
        if type(value) is int:
            value = str(value)
        if type(key) is str:
            key = JSON_QUOTE + key + JSON_QUOTE
        if type(key) is int:
            key = str(key)
        return key + \
               ':' + \
               value

    def serialize(self, obj=0):
        if obj == 0:
            obj = self.obj
        string = '{'
        for key, value in obj.items():
            if type(value) is str or type(value) is int:
                string += self.serialize_str_int(key, value)
            if type(value) is dict:
                key_string = str(key)
                if type(key) is str:
                    key_string = JSON_QUOTE + key_string + JSON_QUOTE
                string += key_string + ':' + self.serialize(value)
            string += JSON_COMMA
        string = string[:(len(string) - 1)] + '}'
        return string
