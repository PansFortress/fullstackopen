const express = require ('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.static('build'))
app.use(cors())

const PORT = process.env.PORT || 3001
let NOTES = [
  {
    name: "Jason",
    number: "123-412-1234",
    id: 1
  },
  {
    name: "Tom",
    number: "123-412-3311",
    id: 2
  },
  {
    name: "Sarah",
    number: "333-412-3311",
    id: 3
  },
]

app.get('/', (req, res) => {
  res.send("<h1> Hello World </h1>")
})

app.get('/info', (req, res) => {
  const count = NOTES.length
  const time = Date.now()

  res.send(`
    <p>There are ${count} numbers in the phonebook</p>
    <p> ${Date(time)} </p>
  `)
})

app.get('/api/persons', (req, res) => {
  res.json(NOTES)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const item = NOTES.find(note => note.id === id)

  if(item){
    res.json(item)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  NOTES = NOTES.filter(note => note.id != id)

  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const content = req.body.content
  const newPerson = {
    content: content,
    id: Math.random()
  }

  NOTES = NOTES.concat(newPerson)

  //Any reason we return this instead of the appropriate code?
  res.json(NOTES)
})

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
})