const express = require('express')
const ephbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const Login = require('./models/login')
const PORT = 3000

mongoose.connect(process.env.MONGODB_URI) //資料庫連線
const db = mongoose.connection // 取得資料庫連線狀態
db.on('error', () => {
  console.log('mongodb connect error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

const app = express()
app.engine('handlebars', ephbs.engine({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('login')
})

app.post('/', (req, res) => {
  const inputEmail = req.body.inputEmail
  const inputPassword = req.body.inputPassword
  Login.findOne({ email: inputEmail, password: inputPassword })
    .lean()
    .then((user) => {
      if (!user) {

        res.redirect('/')
      } else {
        res.render('welcome', { firstName: user.firstName })
      }
    })
})

app.listen(PORT, () => {
  console.log(`This is running on http://localhost:${PORT}`)
})