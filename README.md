# lod-opendata

A NPM package for get data of Lëtzebuerger Online Dictionnaire (LOD) from data.public.lu.

Author : [Roberto Entringer](https://robertoentringer.com)
License: MIT
Repo on Github : https://github.com/robertoentringer/lod-opendata
Npm package : https://www.npmjs.com/package/lod-opendata

# Installation

```shell
$ npm install lod-opendata
```

# Usage

```js
const lodAPI = require("lod-opendata")

// Example : get all fields
const getAllFields = async () => {
  const data = await lodAPI()
  console.log(data)
}
getAllFields()

// Example : get all fields from resources field
const getFieldResources = async () => {
  const fields = "resources"
  const data = await lodAPI(fields)
  console.log(data)
}
getFieldResources()

// Example : get the url field from resources field
const getFieldResourcesUrl = async () => {
  const fields = "resources/{url}"
  const data = await lodAPI(fields)
  console.log(data)
}
getFieldResourcesUrl()

// Example : get multiple fields
const getMultipleFields = async () => {
  const fields = "page,title,tags"
  const data = await lodAPI(fields)
  console.log(data)
}
getMultipleFields()

// Example : get multiple subfields
const getMultipleSubfields = async () => {
  const fields = "resources/{format,title,url}"
  const { resources : [{ format, title, url }] } = await lodAPI(fields)
  console.log(format, title, url)
}
getMultipleSubfields()
```

See all fields available :
https://data.public.lu/api/1/datasets/letzebuerger-online-dictionnaire/

API Documentation - Portail Open Data :
https://data.public.lu/en/docapi/
