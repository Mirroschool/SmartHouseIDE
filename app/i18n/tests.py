

import common
import re
import unittest

class TestSequenceFunctions(unittest.TestCase):
  def test_insert_breaks(self):
    spaces = re.compile(r'\s+|\\n')
    def contains_all_chars(orig, result):
      return re.sub(spaces, '', orig) == re.sub(spaces, '', result)

    sentences = [u'Quay Pegman qua bên trái hoặc bên phải 90 độ.',
                 u'Foo bar baz this is english that is okay bye.',
                 u'If there is a path in the specified direction, \nthen ' +
                 u'do some actions.',
                 u'If there is a path in the specified direction, then do ' +
                 u'the first block of actions. Otherwise, do the second ' +
                 u'block of actions.']
    for sentence in sentences:
      output = common.insert_breaks(sentence, 30, 50)
      self.assert_(contains_all_chars(sentence, output),
                   u'Mismatch between:\n{0}\n{1}'.format(
                       re.sub(spaces, '', sentence),
                       re.sub(spaces, '', output)))


if __name__ == '__main__':
    unittest.main()
