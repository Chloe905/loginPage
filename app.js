const express = require('express')
const ephbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')
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
app.use(session({
  secret: 'My secret', // 存放在cookie的sessionID
  name: 'user', // optional ，預設為connect.sid
  // 代表在每次與使用者互動後，不會強制把 session 儲存，除非 session 有變動
  resave: false,
  saveUninitialized: false
}))

app.get('/', (req, res) => {
  if (req.session.isLogin) {
    res.render('welcome', { firstName: req.session.user })
  } else {
    res.render('login')
  }
})

app.post('/', (req, res) => {
  const { inputEmail, inputPassword } = req.body
  Login.findOne({ email: inputEmail, password: inputPassword })
    .lean()
    .then((user) => {
      if (!user) {
        // 輸入錯誤顯示錯誤訊息及原本輸入的顯示於輸入框
        const errMessage = 'Wrong Email or Password!'
        res.render('login', { email: inputEmail, password: inputPassword, errMessage })
      } else {
        req.session.user = user.firstName
        req.session.isLogin = true
        res.render('welcome', { firstName: user.firstName })
        console.log('sessionID:' + req.sessionID)
      }
    })
})
// 加入homepage 驗證sessionID
app.get('/home', (req, res) => {
  console.log('sessionID:' + req.sessionID)
  res.send('home page')
})

app.listen(PORT, () => {
  console.log(`This is running on http://localhost:${PORT}`)
})