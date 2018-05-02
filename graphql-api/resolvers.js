const fetch = require('node-fetch')

const { API_KEY, API_URI } = process.env

module.exports = {
  Query: {
    faces: async (root, args, ctx, info) => {
      const qs = await Object.keys(args)
        .map(k => `${k}=${args[k]}`)
        .join('&')
      const api = `${API_URI}?${qs}`

      const request = await fetch(api, {
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': API_KEY
        }
      })
      const faces = await request.json()

      return faces
    }
  }
}
