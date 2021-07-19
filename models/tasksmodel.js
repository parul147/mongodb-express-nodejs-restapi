const mongoose = require('mongoose');
const tasksScehma = new mongoose.Schema({
   Task: {
       type: String,
       required: true
   },
   Daytime: {
       type: String,
       required: true
   },
   reminder: {
       type: Boolean,
       default: false
   }
})
module.exports =mongoose.model('Task',tasksScehma)