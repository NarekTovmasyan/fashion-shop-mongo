const express=require('express');
const router=express.Router();
const controller=require('../controller/order');

router.get('/',controller.getAll)
router.post('/',controller.create)

module.exports=router;
