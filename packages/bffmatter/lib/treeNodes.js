/**
 * gatsby accordion markdown folders generator
 * input: slug
 * output: recursive tree nodes
 */

/**
 * in: edges.[{node.fields.slug}]
 * out: [...slugs]
 * tip:  node.parent.getRelativePath, ignore '.history' folder
 */
export function getAllPathFiles(edges) {
  return edges.map(({ node }) => node.fields.slug)
}

/**
 * in: [...slugs]
 * out: recursive ordered tree-nodes. [f1,f2,{dir1}, {dir2}]
 * tip: tree-nodes include 2: file/folder
 * tip: /env/travis-ci/, /backend/request/, /courses/node-code-quality/ 
 */
export function parsePathFiles(files = []) {
  const menu = []

  files.forEach(str => {
    const ary = str.replace(/^\//, '').replace(/\/$/, '').split('/')
    const file = ary.pop()
    const len = ary.length

    if (len === 0) {
      menu.push(file)
      return
    }
    let tempClose = new Array(len)
    for (let idx = 0; idx < len; idx += 1) {
      if (idx === 0) {
        const indx = menu.findIndex(tt => Object.keys(tt)[0] === ary[0])
        if (indx === -1) {
          menu.push({ [ary[0]]: [] })
          tempClose[idx] = menu[menu.length - 1]
        } else {
          tempClose[idx] = menu[indx]
        }
        if (len === 1) {
          tempClose[0][ary[idx]].push(file)
        }
      } else {
        const prevKey = Object.keys(tempClose[idx - 1])[0]
        let exist = false
        const dary = tempClose[idx - 2] || tempClose[0]

        if (dary) {
          Object.values(dary)[0].forEach(obj => {
            if (typeof obj === 'object' && Object.keys(obj)[0] === ary[idx]) {
              exist = true
            }
          })
        }

        // if exists, refs to it; if not exist, create it.
        if (!exist) {
          tempClose[idx - 1][prevKey].push({ [ary[idx]]: [] })
        }

        tempClose[idx] = tempClose[idx - 1][prevKey].find(
          obj => Object.keys(obj)[0] === ary[idx]
        )

        if (len === idx + 1) {
          tempClose[idx][ary[idx]].push(file)
        }
      }
    }

    tempClose = []
  })

  return menu
}

/**
 * in: tree-nodes folders
 * out: [{backend: 14}, {bigdata: 21}, {bigdata2: 18},...]
 * tip: how many files/sub-folders under individual folder
 */
export function getDirTotal(tree) {
  const initAry = tree
    .filter(item => typeof item === 'object')
    .reduce((acc, item) => [...acc, { [Object.keys(item)[0]]: 0 }], [])

  return tree
    .filter(item => typeof item === 'object')
    .reduce((acc, item, idx) => {
      const key = Object.keys(item)[0]
      acc[idx][key] = item[key].length
      return [...acc]
    }, initAry)
}

/**
 * in: `microservice-design-pattern`
 * out: `Microservice Design Pattern`
 * e.g.: elastic-stack: Elastic Stack
 */
export function setTitle(fname, delimiter = '-') {
  return fname
    .split(delimiter)
    .map(str => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ')
}

/**
 * in: microservices
 * out: Microservices 
 */
export function setDir(dir) {
  return dir.charAt(0).toUpperCase() + dir.slice(1)
}

/**
 * in: ['misc', 'poc']
 * out: {'misc': false, 'poc': false}
 * tip: tree-nodes default collapse is close
 */
export function initNodesKeys(nodes) {
  return nodes.reduce(
    (acc, node) => ({ ...acc, [Object.keys(node)[0]]: false }),
    {}
  )
}
