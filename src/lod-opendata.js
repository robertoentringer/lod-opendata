const https = require("https")

const endPoint = "https://data.public.lu/api/1/datasets/letzebuerger-online-dictionnaire/"

const request = (fields = "") =>
  new Promise((resolve, reject) => {
    ;(function req(endPoint) {
      https
        .get(endPoint, { headers: { "X-Fields": fields } }, resp => {
          if (resp.statusCode >= 300 && resp.statusCode < 400 && resp.headers.location)
            return req(resp.headers.location)
          if (resp.statusCode !== 200)
            reject(`${resp.statusCode} : ${resp.statusMessage} ${endPoint}`)
          let body = ""
          resp.on("data", data => (body += data))
          resp.on("end", () => resolve(body))
        })
        .on("error", reject)
    })(endPoint)
  })

module.exports = fields =>
  request(fields)
    .then(resp => JSON.parse(resp))
    .catch(err => err)
