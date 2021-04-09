import unittest
from TOML import TOML
from testFunctions import *


class TestTOML(unittest.TestCase):
    def setUp(self):
        self.toml = TOML()

    def testSerialize(self):
        testObj = {"a": 1, "b": {"c": 3}}
        self.assertEqual(self.toml.dumps(testObj), 'a = 1\n\n[b]\nc = 3\n')

    def testParse(self):
        testStr = 'a = 1\n\n[b]\nc = 3\n'
        self.assertEqual(self.toml.loads(testStr), {"a": 1, "b": {"c": 3}})

    def testBackAndForth(self):
        self.assertEqual(self.toml.loads(self.toml.dumps({"a": testFunc, "b": A})), {"a": testFunc, "b": A})


if __name__ == "__main__":
    unittest.main()