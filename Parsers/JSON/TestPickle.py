import unittest
from Pickle import Pickle
from testFunctions import *


class TestPickle(unittest.TestCase):
    def setUp(self):
        self.pickle = Pickle()

    def testSerialize(self):
        testObj = {"a": 1, "b": {"c": 3}}

        self.assertEqual(self.pickle.serialize(testObj), b'\x80\x04\x95\x18\x00\x00\x00\x00\x00\x00\x00}\x94(\x8c\x01a\x94K\x01\x8c\x01b\x94}\x94\x8c\x01c\x94K\x03su.')

    def testParse(self):
        testString = b'\x80\x04\x95\x18\x00\x00\x00\x00\x00\x00\x00}\x94(\x8c\x01a\x94K\x01\x8c\x01b\x94}\x94\x8c\x01c\x94K\x03su.'
        self.assertEqual(self.pickle.parse(testString), {"a": 1, "b": {"c": 3}})

    def testBackAndForth(self):
        testObj = {"func": testFunc, "testClass": A}
        pickled = self.pickle.dumps(testObj)
        pickledPickled = self.pickle.loads(pickled)
        self.assertEqual(pickledPickled, testObj)


if __name__ == "__main__":
    unittest.main()
