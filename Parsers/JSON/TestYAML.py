import unittest
from YAML import YAML
from testFunctions import *


class TestPickle(unittest.TestCase):
    def setUp(self):
        self.yaml = YAML()

    def testSerialize(self):
        testObj = {"a": 1, "b": {"c": 2, 2: 3}}
        self.assertEqual(self.yaml.dumps(testObj), 'a: 1\nb:\n  c: 2\n  2: 3\n')

    def testParse(self):
        testStr = 'a: 1\nb:\n  c: 2\n  2: 3\n'
        self.assertEqual(self.yaml.loads(testStr), {"a": 1, "b": {"c": 2, 2: 3}})

    def testBackAndForth(self):
        self.assertEqual(self.yaml.loads(self.yaml.dumps({"a": testFunc, "b": A})), {"a": testFunc, "b": A})


if __name__ == "__main__":
    unittest.main()
