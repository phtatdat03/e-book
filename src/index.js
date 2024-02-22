const express = require('express')
const app = express()
const port = 5555

const routes = require('./routes')
const db = require('./config/db')

var cors = require('cors')
app.use(cors()) // Use this after the variable declaration

//Connect to DB
db.connect();

//middleware xử lí dữ liệu từ form
app.use(express.urlencoded({
  extended: true
}));
//middleware xử lí dữ liệu từ javascript
app.use(express.json());

//routes init
routes(app);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})