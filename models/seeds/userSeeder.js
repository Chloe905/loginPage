const mongoose = require('mongoose')
const Login = require('../login')
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI) //資料庫連線
const db = mongoose.connection // 取得資料庫連線狀態
db.on('error', () => {
  console.log('mongodb connect error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  Login.create(users)
  console.log('create seeder done!')
})

