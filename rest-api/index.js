const { send } = require('micro')
const cors = require('micro-cors')()
const fetch = require('node-fetch')
const url = require('url')

const { API_KEY, API_URI } = process.env

module.exports = cors(async (req, res) => {
  const { query } = await url.parse(req.url, true)

  const qs = await Object.keys(query)
    .map(k => `${k}=${query[k]}`)
    .join('&')
  const api = `${API_URI}?${qs}`

  const request = await fetch(api, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': API_KEY
    }
  })
  const faces = await request.json()

  send(res, 200, faces)
})
