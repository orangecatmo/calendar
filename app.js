const express = require('express')
const fs = require('fs/promises')
const app = express()
const PORT = 3000

const dbPath = './db/data.json'

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next()
})

app.get('/notes', async (req, res) => {
  let data = await fs.readFile(dbPath, 'utf-8')
  res.end(data)
})

app.post('/note/:id', async (req, res) => {
  let { id } = req.params
  if (isNaN(id)) {
    res.end('none')
    return
  }
  id = parseInt(--id)
  let { content } = req.body
  let data = JSON.parse(await fs.readFile(dbPath, 'utf-8'))

  data[id].content = content

  await fs.writeFile(dbPath, JSON.stringify(data), 'utf-8')

  res.send({
    msg: 'ok'
  })

})

app.listen(PORT, () => {
  console.log('server is running to', PORT)
})
