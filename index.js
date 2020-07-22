const opendata = (
  fields = '',
  url = 'https://data.public.lu/api/1/datasets/letzebuerger-online-dictionnaire/'
) =>
  new Promise((resolve, reject) => {
    const { get } = url.startsWith('https') ? require('https') : require('http')
    try {
      get(url, { headers: { 'X-Fields': fields } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location)
          resolve(opendata(fields, res.headers.location))
        if (res.statusCode !== 200)
          reject(new Error(`${res.statusCode} : ${res.statusMessage} ${url} FIELDS : ${fields}`))
        let rawdata = ''
        res.setEncoding('utf8')
        res
          .on('data', (data) => (rawdata += data))
          .on('end', () => {
            try {
              const jsondata = JSON.parse(rawdata)
              resolve(jsondata)
            } catch (err) {
              reject(err)
            }
          })
      })
        .on('error', reject)
        .end()
    } catch (err) {
      reject(err)
    }
  })

module.exports = opendata
