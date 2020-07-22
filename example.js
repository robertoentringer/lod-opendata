const opendata = require('lod-opendata')

// Example with async / Await

const asyncAwait = async () => {
  //Get all fields. Use defaults
  try {
    const result = await opendata()
    console.log(result)
  } catch (error) {
    console.log(error.message)
  }
}
asyncAwait()

// Example with then / catch

const thenCatch = () => {
  //Get all fields. Use defaults
  opendata()
    .then((obj) => console.log(obj))
    .catch((err) => console.log(err.message))

  //Get all fields from the main `resources` field'
  opendata('resources')
    .then((obj) => console.log(obj))
    .catch((err) => console.log(err.message))

  //Get the `url` field from `resources` field'
  opendata('resources/{url}')
    .then(({ resources: [{ url }] }) => console.log(url))
    .catch((err) => console.log(err.message))

  //Get multiple main fields: `page`, `title`, `slug`
  opendata('page,title,slug')
    .then(({ page, title, slug }) => console.log(page, title, slug))
    .catch((err) => console.log(err.message))

  //Get multiple subfields: `id`, `published`, `latest` from main field `resources`
  opendata('resources/{id,published,latest}')
    .then(({ resources: [{ id, published, latest }] }) => console.log(id, published, latest))
    .catch((err) => console.log(err.message))

  //Get all fields pass a custom api `url`. Useful if the API URL changes.
  const url = 'http://data.public.lu/api/1/datasets/letzebuerger-online-dictionnaire-raw-data'
  opendata('', url)
    .then((obj) => console.log(obj))
    .catch((err) => console.log(err.message))
}
thenCatch()
