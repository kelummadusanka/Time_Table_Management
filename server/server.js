const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');

const cors = require('cors');

dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Access successfully!"));
const LecCrudUrls = require('./routes/AdminRouts/LecCrudroutes');

app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded({limit: "30mb",extended:true}));
app.use(cors());

//all Student urls here


//all admin urls here
app.use('/app/Lecturer', LecCrudUrls);


app.listen(4000, () => console.log("server is up and running"));