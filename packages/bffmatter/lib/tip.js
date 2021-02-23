/**
 * 对数组成员包含的关键字进行统计
 * ms-backend-framework/playground/reduce.js
 */
export function searchKeywords(messages = [], keywords = []) {
  return keywords.reduce((acc, cur) => (messages.some(message => message.includes(cur)) && acc.push(cur), acc), [])
}

/**
 * in: initAryWithNo(4)
 * out: [0,1,2,3]
 */
export function initAryWithNo(len) {
  return [...new Array(len).keys()]
}

/**
 * 异步累计, 需在async包围下使用
 * const result = await AsyncTotal();
 */
export async function AsyncTotal(ary = []) {
  return ary.reduce(async (acc, cur) => {
    const at = await acc
    const todo = await Promise.resolve(cur)
    at[cur] = todo
    return at
  }, Promise.resolve({}))
}

/**
 * in: getSiteMatadata(), getSiteMatadataTitle()
 * out: {}, ''
 * gatsby: data.site.siteMetadata: title, decription, author, siteUrl
 */
export const getSiteMatadata = data => ((data || {}).site || {}).siteMetadata || {}
export const getSiteMatadataTitle = data => data?.site?.siteMetadata?.title || ''
