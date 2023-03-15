var express = require('express');
const { isValidObjectId } = require('mongoose');
const ProductModel = require('../models/product');
const UserModel = require('../models/user');
const UserProductModel = require('../models/userProduct');
var router = express.Router();
var mongoose = require('mongoose');

const calcDiscount = (req,res,next)=>{
  const price = req.query.price;
      const discount = price * 0.9;
      console.log(discount);
      UserProductModel.updateOne({product:req.query.product_id},{
      $set: {
        "newPrice":discount
      }
    })
    .then((DiscountDes)=>{
      res.status(200).json({
        success: true,
        message: 'Updated success',
        payload : DiscountDes
      })
    }).catch((e)=>{
      res.status(400).json({
        success:false, 
        message: e.message, 
        payload: {}})
    })
  };

  const addCart = (req,res) => {
    const Product = new UserProductModel({
      userId: req.query.userId,
      product: req.query.product,
      newPrice: null
  });

  try{
      Product.save();
    res.status(200).json(
      {
        succuss: true,
        message: 'Insertion succussfull',
        payload: {}
      }
    );
  }
  catch (error) {
    res.status(400).json(
      {
        message: 'Cannot add data right now!'
      }
    );
  }
  }

  const getNewDiscount = (req,res,next)=>{
    UserProductModel.find({product:req.query.product_id})
    .then((discount)=>{
      res.status(200).json({
        success: true,
        message: 'Read successfuly',
        discount
      })
    }).catch((e)=>{
      res.status(400).json({success:false, message: e.message, payload: {}})
    })
  };

module.exports = {
    calcDiscount,addCart,getNewDiscount
  }