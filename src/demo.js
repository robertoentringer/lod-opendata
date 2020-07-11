const lodAPI = require("./lod-opendata.js")

// Example : get all fields
const getAllFields = async () => {
  const data = await lodAPI()
  console.log("getAllFields: ", data)
}
getAllFields()

// Example : get all fields from resources field
const getFieldResources = async () => {
  const fields = "resources"
  const data = await lodAPI(fields)
  console.log("getFieldResources : ", data)
}
getFieldResources()

// Example : get the url field from resources field
const getFieldResourcesUrl = async () => {
  const fields = "resources/{url}"
  const data = await lodAPI(fields)
  console.log("getFieldResourcesUrl: ", data)
}
getFieldResourcesUrl()

// Example : get multiple fields
const getMultipleFields = async () => {
  const fields = "page,title,tags"
  const data = await lodAPI(fields)
  console.log("getMultipleFields: ", data)
}
getMultipleFields()

// Example : get multiple subfields
const getMultipleSubfields = async () => {
  const fields = "resources/{format,title,url}"
  const {
    resources: [{ format, title, url }],
  } = await lodAPI(fields)
  console.log("format: ", format)
  console.log("title: ", title)
  console.log("url: ", url)
}
getMultipleSubfields()

// Example : get all fields from resources field from a custom endPoint
const getCustomEndPoint = async () => {
  const customEndPoint =
    "https://data.public.lu/api/1/datasets/letzebuerger-online-dictionnaire-raw-data/"
  const fields = "resources"
  const data = await lodAPI(fields, customEndPoint)
  console.log("getCustomEndPoint : ", data)
}
getCustomEndPoint()
