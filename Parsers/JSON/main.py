#!/usr/bin/env python
import inspect

from Factory import Creator
import argparse
import json
import os


# converter --from "PATHTOORIG" -t JSON --WHERE "PATHTODEST"
# parser = argparse.ArgumentParser(description='Convert files from one notation into another')
# parser.add_argument('-t', '--type', type=str, metavar='T', required=True,
#                     help='Type of converter(JSON, TOML, YAML, Pickle). In this format your file will be converted')
# parser.add_argument('-s', '--start', type=str, metavar='S', required=True,
#                     help='Path to starting file')
# parser.add_argument('-d', '--dest', type=str, metavar='D',
#                     help='Path to file where to put the result of convertation')
# args = parser.parse_args()


class C:
    test = "test"


class B(C):
    pass


class A(B):
    name = "name"


x = 5


def testing():
    return x


if __name__ == '__main__':
    obj = {"a": testing}
    g = testing.__globals__
    str = inspect.getsource(testing)
    print(str)
    f = {"g": g}
    exec(str, f)
    print(f["testing"]())
    # str = Creator.createSerializer(obj)
    # print(str)
    # o = Creator.createDeserializer(str)
    # print(o)
    # if args.type.lower() == 'json':
    #     dest_ext = 'json'
    # elif args.type.lower() == 'yaml':
    #     dest_ext = 'yaml'
    # elif args.type.lower() == 'toml':
    #     dest_ext = 'toml'
    # elif args.type.lower() == 'pickle':
    #     dest_ext = 'pickle'
    # else:
    #     raise TypeError("Wrong type of extension passed! Available formats are: JSON/TOML/YAML/Pickle")
    #
    # if args.start[(len(args.start) - 5):] == '.json':
    #     start_ext = '.json'
    # elif args.start[(len(args.start) - 5):] == '.yaml':
    #     start_ext = '.yaml'
    # elif args.start[(len(args.start) - 5):] == '.toml':
    #     start_ext = '.toml'
    # elif args.start[(len(args.start) - 7):] == '.pickle':
    #     start_ext = '.pickle'
    # else:
    #     raise TypeError("Wrong type of file passed! You must provide file with extension like JSON/TOML/YAML/Pickle")
    #
    # if start_ext[1:] == dest_ext:
    #     print("Type of destination file is same as extension of existing file. I will not convert one type of data "
    #           "into the same type! See you later!")
    #     exit()
    #
    # obj = Creator.createDeserializer(type=start_ext[1:], filePath=args.start)
    #
    # if args.dest is not None:
    #     pf = args.dest
    # else:
    #     pf = args.start[:(len(args.start) - len(start_ext))] + "." + dest_ext
    #
    # Creator.createSerializer(obj, dest_ext, pf)
