import forEach from 'callbag-for-each'
import pipe from 'callbag-pipe'

import fromEventPattern from '../src'

test('works', () => {
  const actual = []
  let next

  const addHandler = handler => {
    next = handler
  }

  const removeHandler = () => {}

  pipe(
    fromEventPattern(addHandler, removeHandler),
    forEach(data => {
      actual.push(data)
    }),
  )

  return Promise.resolve()
    .then(() => {
      expect(actual).toEqual([])
    })
    .then(() => {
      next(2)
      next(4)
      next(6)
    })
    .then(() => {
      next(8)
      next(10)
    })
    .then(() => {
      expect(actual).toEqual([2, 4, 6, 8, 10])
    })
})
