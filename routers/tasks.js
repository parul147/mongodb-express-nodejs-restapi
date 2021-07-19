const express = require('express');
const router = express.Router();
const Task = require('../models/tasksmodel')
router.get('/', async(req,res) => {
    console.log('get request');
  
    try{
        const tasks =  await Task.find();
        res.json(tasks)

    }catch(err){
        res.send('Error:'+ err)
    }
})

router.post('/', async(req,res) => {
    const task = new Task({
        Task: req.body.Task,
        Daytime: req.body.Daytime,
        reminder: req.body.reminder

    })

    try{
 const a1= await task.save()
 res.json(a1);
    }catch(err){
        res.send('Error:'+ err)
    }
})

router.get('/:id', async(req,res)=>{
   try{
    const task = await Task.findById(req.params.id)
res.json(task);
   }
   catch(err){
    res.send('Error:'+ err)
}
})
router.patch('/:id', async(req,res)=>{
    try{
        const task = await Task.findById(req.params.id)
        task.reminder = req.body.reminder
        const a1 = await task.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error:'+ err)
    }
    
})

router.delete('/:id', async(req,res)=>{
    try{
        const task = await Task.findById(req.params.id)
        
        const a1 = await task.remove()
        res.json(a1)
    }
    catch(err){
        res.send('Error:'+ err)
    }

})

module.exports = router;