from const import *

JSON_WHITESPACE = [' ', '\t', '\b', '\n', '\r']
JSON_SYNTAX = [JSON_COMMA, JSON_COLON, JSON_LEFTBRACKET, JSON_RIGHTBRACKET,
               JSON_LEFTBRACE, JSON_RIGHTBRACE]

FALSE_LEN = len('false')
TRUE_LEN = len('true')
NULL_LEN = len('null')


class Deserializer:
    def __init__(self, str):
        self.str = str

    def lex_string(self, string):
        json_string = ''

        if string[0] == JSON_QUOTE:
            string = string[1:]
        else:
            return None, string

        for c in string:
            if c == JSON_QUOTE:
                return json_string, string[len(json_string) + 1:]
            else:
                json_string += c

        raise Exception('Expected end-of-string quote')

    def lex_number(self, string):
        json_number = ''

        number_characters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '-', 'e', '.']

        for c in string:
            if c in number_characters:
                json_number += c
            else:
                break

        rest = string[len(json_number):]

        if not len(json_number):
            return None, string

        if '.' in json_number:
            return float(json_number), rest

        return int(json_number), rest

    def lex_bool(self, string):
        string_len = len(string)

        if string_len >= TRUE_LEN and \
                string[:TRUE_LEN] == 'true':
            return True, string[TRUE_LEN:]
        elif string_len >= FALSE_LEN and \
                string[:FALSE_LEN] == 'false':
            return False, string[FALSE_LEN:]

        return None, string

    def lex_null(self, string):
        string_len = len(string)

        if string_len >= NULL_LEN and \
                string[:NULL_LEN] == 'null':
            return True, string[NULL_LEN]

        return None, string

    def lex(self, string):
        tokens = []

        while len(string):
            json_string, string = self.lex_string(string)
            if json_string is not None:
                tokens.append(json_string)
                continue

            json_number, string = self.lex_number(string)
            if json_number is not None:
                tokens.append(json_number)
                continue

            json_bool, string = self.lex_bool(string)
            if json_bool is not None:
                tokens.append(json_bool)
                continue

            json_null, string = self.lex_null(string)
            if json_null is not None:
                tokens.append(None)
                continue

            if string[0] in JSON_WHITESPACE:
                string = string[1:]
            elif string[0] in JSON_SYNTAX:
                tokens.append(string[0])
                string = string[1:]
            else:
                raise Exception('Unexpected character: {}'.format(string[0]))

        return tokens

    def parse_array(self, tokens):
        json_array = []

        t = tokens[0]
        if t == JSON_RIGHTBRACKET:
            return json_array, tokens[1:]

        while True:
            json, tokens = self.parse(tokens)
            json_array.append(json)

            t = tokens[0]
            if t == JSON_RIGHTBRACKET:
                return json_array, tokens[1:]
            elif t != JSON_COMMA:
                raise Exception('Expected comma after object in array')
            else:
                tokens = tokens[1:]

        raise Exception('Expected end-of-array bracket')

    def parse_object(self, tokens):
        json_object = {}

        t = tokens[0]
        if t == JSON_RIGHTBRACE:
            return json_object, tokens[1:]

        while True:
            json_key = tokens[0]
            if type(json_key) is str or type(json_key) is int:
                tokens = tokens[1:]
            else:
                raise Exception('Expected string key, got: {}'.format(json_key))

            if tokens[0] != JSON_COLON:
                raise Exception('Expected colon after key in object, got: {}'.format(t))

            json_value, tokens = self.parse(tokens[1:])

            json_object[json_key] = json_value

            t = tokens[0]
            if t == JSON_RIGHTBRACE:
                return json_object, tokens[1:]
            elif t != JSON_COMMA:
                raise Exception('Expected comma after pair in object, got: {}'.format(t))

            tokens = tokens[1:]

        raise Exception('Expected end-of-object bracket')

    def parse(self, tokens=0, is_root=False):
        if tokens == 0:
            tokens = self.lex(self.str)

        t = tokens[0]

        if is_root and t != JSON_LEFTBRACE:
            raise Exception('Root must be an object')

        if t == JSON_LEFTBRACKET:
            return self.parse_array(tokens[1:])
        elif t == JSON_LEFTBRACE:
            return self.parse_object(tokens[1:])
        else:
            return t, tokens[1:]
