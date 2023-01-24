const { query } = require('express');
const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/signup',(req,res) =>{

    let user = req.body;
    query = "Select email,password,role,status from users where email=?"
    connection.query(query,[user.email], (err,results) => {
        if(!err){
            if(results.length <= 0 ){
                
            }
        }
        else{
            return res.status(500).json(err);
        }
    });
    

})

module.exports = router;