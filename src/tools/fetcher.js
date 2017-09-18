import 'whatwg-fetch'
const reqHeaders = {
  Accept: 'application/json',
  'Cache-Control': 'no-cache',
  sysCode: 'market',
  'market-token': localStorage.market_TOKEN || ''
}
const convertQuery = params => {
  if (!params) {
    return ''
  }
  return Object.keys(params).reduce((pre, key) => (pre + `${key}=${params[key]}&`), '').slice(0, -1)
}
// export default (url, method, params) => {
//   return new Promise((resolve, reject) => {
//     fetch(url, {
//       method: method,
//       body: convertQuery(params)
//     }).then((r s) => {
//       if (res.ok) {
//         resolve(res.json())
//       } else {
//         reject(res)
//       }
//     })
//   })
// }

// export default {
//   get: (url, params) => {
//     return request(url + '?' + convertQuery(params), {
//       method: 'GET',
//       headers: reqHeaders
//     })
//   },
//   post: (url, params) => {
//     return request(url, {
//       method: 'POST',
//       headers: Object.assign({},reqHeaders,{
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }),
//       mode: 'cors',
//       body: convertQuery(params)
//     })
//   }
// }

const request = (url, init) => new Promise((resolve, reject) => {
  fetch(url, init).then((res) => {
    if (res.ok) {
      resolve(res.json())
    } else {
      reject(res)
    }
  })
})

export default {
  get: (url, params) => {
    return request(url + '?' + convertQuery(params), {
      method: 'GET',
      headers: reqHeaders
    })
  },
  post: (url, params) => {
    return request(url, {
      method: 'POST',
      headers: Object.assign({}, reqHeaders, {
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      mode: 'cors',
      body: convertQuery(params)
    })
  }
}
