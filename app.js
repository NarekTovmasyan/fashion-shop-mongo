const express=require('express');
const app=express();
const authRouter=require('./routers/auth');
const analyticsRouter=require('./routers/analytics');
const categoryRouter=require('./routers/category');
const orderRouter=require('./routers/order');
const positionRouter=require('./routers/position');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const keys=require('./config/keys')
const cors=require('cors');
const morgan=require('morgan');

mongoose.connect(keys.mongoURL)
    .then(()=> console.log("mongo DB connect"))
    .catch(error => console.log(error))

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/api/auth', authRouter)
app.use('/api/analytics', analyticsRouter)
app.use('/api/category', categoryRouter)
app.use('/api/order', orderRouter)
app.use('/api/position', positionRouter)

module.exports=app;