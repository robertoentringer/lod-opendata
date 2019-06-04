# lod-opendata

A NPM package for get data of Lëtzebuerger Online Dictionnaire (LOD) from data.public.lu

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

// Exemple : get all fields
const getAllFields = async () => {
  const data = await lodAPI()
  console.log(data)
}
getAllFields()

// Exemple : get all fields from resources field
const getFieldResources = async () => {
  const fields = "resources"
  const data = await lodAPI(fields)
  console.log(data)
}
getFieldResources()

// Exemple : get the url field from resources field
const getFieldResourcesUrl = async () => {
  const fields = "resources/{url}"
  const data = await lodAPI(fields)
  console.log(data)
}
getFieldResourcesUrl()

// Exemple : get multiple fields
const getMultipleFields = async () => {
  const fields = "page,title,tags"
  const data = await lodAPI(fields)
  console.log(data)
}
getMultipleFields()
```

See all fields available :  
https://data.public.lu/api/1/datasets/letzebuerger-online-dictionnaire-raw-data/  

API Documentation - Portail Open Data :   
https://data.public.lu/en/apidoc/#!/datasets/get_dataset
