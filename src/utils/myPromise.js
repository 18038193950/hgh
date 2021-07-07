const PENDING = 'pending'
const FULFILLED = 'fulfillde'
const REJECTDE = 'rejected'

class Mypromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }
    // 状态
    status = PENDING
    // 成功后的值
    value = undefined
    // 失败的原因
    reason = undefined

    // 成功回调
    successCallback = []

    // 失败回调
    failCallbakc = []
    resolve = value => {
      if (this.status !== PENDING) return
      this.status = FULFILLED
      this.value = value
      while (this.successCallback.length) this.successCallback.shift()()
    }

    reject = reason => {
      if (this.status !== PENDING) return
      this.status = REJECTDE
      this.reason = reason
      while (this.failCallbakc.length) this.failCallbakc.shift()()
    }
    then(successCallback, failCallback) {
      successCallback = successCallback || (value => value)
      failCallback = failCallback || (reason => { throw reason })
      const promise2 = new Mypromise((resolve, reject) => {
        if (this.status === FULFILLED) {
          try {
            const value = successCallback(this.value)
            resolvePromise(value, resolve, reject)
          } catch (error) {
            reject(error)
          }
        } else if (this.status === REJECTDE) {
          try {
            const reason = failCallback(this.reason)
            resolvePromise(reason, resolve, reject)
          } catch (error) {
            reject(error)
          }
        } else {
          this.successCallback.push(() => {
            const value = successCallback(this.value)
            resolvePromise(value, resolve, reject)
          })
          this.failCallbakc.push(() => {
            const reason = failCallback(this.reason)
            resolvePromise(reason, resolve, reject)
          })
        }
      })
      return promise2
    }

    finally(callback) {
      return this.then((value) => {
        return Mypromise.resolve(callback()).then((value) => value)
      }, (reason) => {
        return Mypromise.resolve(callback()).then((value) => { throw reason })
      })
    }
    catch(failCallback) {
      return this.then(undefined, failCallback)
    }

    static all(array) {
      const result = []
      let index = 0

      return new Mypromise((resolve, reject) => {
        function addData(key, value) {
          result[key] = value
          index++
          index === array.length && resolve(result)
        }
        for (let index = 0; index < array.length; index++) {
          const element = array[index]
          if (element instanceof Mypromise) {
            element.then(value => addData(index, value), reason => reject(reason))
          } else {
            addData(index, element)
          }
        }
      })
    }

    static resolve(value) {
      if (value instanceof Mypromise) return value
      return new Mypromise((resolve) => resolve(value))
    }
}

function resolvePromise(value, resolve, reject) {
  if (value instanceof Mypromise) {
    // promise
    value.then(resolve, reject)
  }
  resolve(value)
}

// const other = new Mypromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('other')
//   }, 3000)
// })

// const p = new Mypromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('ok')
//   }, 3000)
// })
const p = new Mypromise((resolve, reject) => {
  reject('error')
  // resolve('value')
})
// const p = Mypromise.all(['a', 'b', other, 'd', 'f'])

p.then((e) => {
  console.log('e')
})
  .then((e) => {
    console.log('e')
  })
  .catch((reason) => {
    console.log(reason)
  })

