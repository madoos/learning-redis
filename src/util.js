'use strict'

export default {
  makeSync
}

function makeSync (fn, context) {
  return function (...args) {
    let ret
    context = context || this
    fn.call(context, ...args, (err, data) => {
      ret = (!err) ? data : err
    })

    while (ret === undefined) require('deasync').sleep(100)
    return ret
  }
}
