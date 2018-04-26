# callbag-from-event-pattern

Callbag source factory from `addHandler` and `removeHandler` pair.

## Example

```js
import forEach from 'callbag-for-each'
import fromEventPattern from 'callbag-from-event-pattern'
import map from 'callbag-map'
import pipe from 'callbag-pipe'

const addHandler = handler => {
  document.addEventListener('click', handler)
}

const removeHandler = handler => {
  document.removeEventListener('click', handler)
}

pipe(
  fromEventPattern(addHandler, removeHandler),
  map(({ clientX: x, clientY: y }) => ({ x, y })),
  forEach(coord => {
    // will log coordinate of each click
    console.log(coord)
  }),
)
```
