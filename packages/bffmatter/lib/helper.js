function isEmpty(prop) {
  return (
    prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  )
}

const defer = (ms = 1000) =>
  new Promise(resolve => {
    setTimeout(resolve)
  }, ms)

function uniqObj(ary = [], obj = {}) {
  return ary.reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {})
}

function extractObj(ary = [], obj = {}) {
  return ary.reduce((acc, key) => ({ ...acc, ...(obj[key] && { [key]: obj[key] }) }), {})
}

module.exports = {
  isEmpty,
  defer,
  uniqObj,
  extractObj,
}
