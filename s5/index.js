const express = require('express')
require('./db/connect')
const student_router = require('./routers/students')
const classes_router = require('./routers/classrooms')
const app = express()
const port = 3000
app.use(express.json());
app.use('/api/students',student_router);
app.use('/api/classes',classes_router);
app.listen(port, () => console.log(`Student app listening on port ${port}!`))