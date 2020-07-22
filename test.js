const test = require('ava')
const opendata = require('./index')

test('Get all fields. Use defaults.', async (t) =>
  await opendata().then((obj) => t.truthy(Object.keys(obj).length)))

test('Get all fields from the main `resources` field', async (t) =>
  opendata('resources').then((obj) => t.truthy('resources' in obj)))

test('Get the `url` field from `resources` field', async (t) =>
  await opendata('resources/{url}').then(({ resources: [{ url = '' }] }) => t.truthy(url !== '')))

test('Get multiple main fields: `page`, `title`, `slug`', async (t) => {
  const fields = ['page', 'title', 'slug']
  await opendata(fields.join()).then((obj) =>
    t.truthy(fields.every((key) => Object.keys(obj).includes(key)))
  )
})

test('Get multiple subfields: `id`, `published`, `latest` from main field `resources`', async (t) => {
  const subfields = ['id', 'published', 'latest']
  await opendata(`resources/{${subfields.join()}}`).then(({ resources: [obj] }) =>
    t.truthy(subfields.every((key) => Object.keys(obj).includes(key)))
  )
})

test('Get all fields pass a custom api `url`', async (t) => {
  const api = 'http://data.public.lu/api/1/datasets/letzebuerger-online-dictionnaire-raw-data'
  await opendata('', api).then((obj) =>
    t.truthy(Object.keys(obj).length && obj.constructor === Object)
  )
})
