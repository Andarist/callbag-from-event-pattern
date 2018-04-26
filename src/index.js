import create from 'callbag-create'

export default function fromEventPattern(addHandler, removeHandler) {
  return create(sink => {
    const handler = value => {
      sink(1, value)
    }

    addHandler(handler)

    return () => {
      removeHandler(handler)
    }
  })
}
