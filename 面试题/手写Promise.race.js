function MyPromiseRace (_promises) {
  const promises = Array.from(_promises)
  return new Promise((resolve, reject)) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => resolve(value))
        .catch(err => reject(err))
    }) 
  } 
}