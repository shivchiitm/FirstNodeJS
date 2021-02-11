const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('',
{useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
   console.log("DB Connection Done")
})