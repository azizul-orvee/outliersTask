const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)
  if (req.url.match(/^\/b64\//)) return respondBase64(req, res)
  if (req.url === '/user-agent') return respondUserAgent(req, res)

  res.end()
})

function respondHello (req, res) {
  res.end(JSON.stringify({ msg: 'hello' }))
}

<<<<<<< HEAD
function respondBase64 (req, res) {
  const phrase = req.url.replace(/^\/b64\//, '')
function respondUserAgent (req, res) {
  const ua = req.headers['user-agent']
>>>>>>> 33e4157 (feat: add user-agent endpoint)

console.log(`Server listening on port ${PORT}`)

