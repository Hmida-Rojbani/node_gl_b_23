const express = require('express');
const student_router = require('./routers/students')
const welcome_router = require('./routers/welcome')
const morgan = require('morgan')
const appDebug= require('debug')('app:index')
const appPort= require('debug')('app:port')
const config = require('config')
const app = express();
const port = 3000

appDebug('Env : ', app.get('env'));
appDebug('Env : ', process.env.NODE_ENV);
appDebug('Application name :',config.get('app'))
appDebug('Data Base :',config.get('db'))
app.use(express.json())
if(app.get('env')==='development')
    app.use(morgan('dev'))

app.use('/api/welcome',welcome_router)
// app.use(function (req,res,next) {
//     console.log('I passed from here');
//     next()
// })

app.use('/api/students',student_router);



app.listen(port, () => appPort(`Student app listening on port ${port}!`))