const https = require("https")

const endPoint = "https://data.public.lu/api/1/datasets/letzebuerger-online-dictionnaire-raw-data/"
const apiUrl = new URL(endPoint)

const request = (fields = "") =>
  new Promise((resolve, reject) => {
    const options = { headers: { "X-Fields": fields } }
    const req = https.get(apiUrl, options)
    req.on("error", reject)
    req.on("response", resp => {
      let body = ""
      resp.on("data", data => (body += data))
      resp.on("end", () => resolve(body))
    })
  })

module.exports = async fields => JSON.parse(await request(fields))
