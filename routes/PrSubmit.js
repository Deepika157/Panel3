const express = require('express');
const router = express.Router();
const prSchema = require('../models/Pr');


router.post('/', async (req,res)=>{
    try{
        const {content} = req.body;
        
        const wordCount = content.split(/\s+/).filter(Boolean).length;
        console.log(wordCount);

        if (wordCount > 1000) {
            return res.status(400).send({ message: 'PR content should be atmost 1000 characters long' });
        }

        const pr = new prSchema({content, wordCount});
        await pr.save();

        res.status(201).send({ message: 'PR saved successfully', data: pr });

    } catch(error){
        res.status(400).send(error);
    }
});

module.exports = router;