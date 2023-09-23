const express = require('express');
const router = express.Router();
const Student = require('../models/data');

router.get('/', async(req, res)=>{
    try {
        const studentData = await Student.find({});
        res.render('home.ejs',
        {
            St_Data:studentData
        }
        );
    } catch (error) {
        console.log(error);
        res.redirect('back');
    }
});


router.post('/sendData', async(req, res)=>{
    try {
        await Student.create(req.body);
        res.redirect('back');
    } catch (error) {
        console.log(error);
        res.redirect('back');
    }
});

router.get('/edit/:id', async(req, res)=>{
    try {
        const newUpdatedData = await Student.findById(req.params.id);
        res.render('edit.ejs',{Student:newUpdatedData});
    } catch (error) {
        console.log(error);
        res.redirect('back');
    }
});

router.post('/edit/:id', async(req, res)=>{
    try {
        const newUpdatedData = await Student.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true});
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.redirect('back');
    }
});

router.get('/delete/:id', async(req, res)=>{
    try {
        const newUpdatedData = await Student.findByIdAndDelete({_id:req.params.id});
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.redirect('back');
    }
})


module.exports = router;