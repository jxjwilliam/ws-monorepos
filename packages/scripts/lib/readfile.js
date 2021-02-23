const fs = require('fs')
const path = require('path')
const dayjs = require('dayjs')

/**
 * 1. node readfile.js --append
 * 2. node readfile.js
 */
let appendHeaderFlag = false
const opts = process.argv.slice(2)
if (opts.some(opt => opt.indexOf('append') !== -1)) {
  appendHeaderFlag = true
}

/**
 * author: William Jiang
 * bio: Founder @ ms-fullstack, ms-graphql
 */
const appendHeader = file => {
  const fname = file.slice(0, -3) // remove .md
  const slug = `slug: /${fname.toLowerCase().replace(/\s+/g, '-')}`
  const date = `date: ${dayjs().format('YYYY-MM-DD')}`
  const title = `title: ${fname.charAt(0).toUpperCase()}${fname.slice(1)}`
  const data = ['---', slug, date, title, '---', ''].join('\n')

  try {
    const filename = path.join(__dirname, file)
    const odata = fs.readFileSync(filename)
    const fd = fs.openSync(filename, 'w+')

    fs.writeSync(fd, data, 0, data.length, 0)
    fs.writeSync(fd, odata, 0, odata.length, data.length)
    // fs.appendFileSync(filename, odata)
    fs.closeSync(fd)
  } catch (err) {
    console.error(err)
  }
}

/**
 * path.resolve: absolute path
 * path.join: relative path
 * ignore gitbook SUMMARY.md
 */
try {
  // fs.readdirSync(path.resolve(__dirname), { withFileTypes: true })
  fs.readdirSync(path.join(__dirname))
    .filter(file => file.slice(-3) === '.md' && file.toLowerCase().indexOf('summary') < 0)
    .forEach(file => {
      if (appendHeaderFlag) {
        console.log('+++: ', file)
        appendHeader(file)
      } else {
        // const model = require(path.join(__dirname, file))
        console.log('===: ', file)
      }
    })
} catch (err) {
  console.error(err)
}
