const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Access successfully!"));

app.use(cors());

//all student urls here
//app.use('/app/admin/auth', studentUrls);


//all Lecrure urls here



//all admin urls here


app.listen(4000, () => console.log("server is up and running"));