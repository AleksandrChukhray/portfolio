const wait = (wrapper, predicate, timeout = 10) => new Promise((resolve, reject) => {
  if (predicate(wrapper)) {
    return resolve(true)
  }
  setTimeout(() => {
    wrapper.update()

    return predicate(wrapper)
      ? resolve(true)
      : reject(new Error('Timeout expired'))
  }, timeout)
})

export default wait
