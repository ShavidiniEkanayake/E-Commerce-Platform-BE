var express = require('express');
const { isValidObjectId } = require('mongoose');
const ProductModel = require('../models/product');
var router = express.Router();
var mongoose = require('mongoose');

const createProduct = (req, res, next)=>{

    const Product = new ProductModel({
        name: req.body.name,
        description: req.body.description,
        price:req.body.price,
        avalilableQTY:req.body.avalilableQTY,
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
  };

  const getAll = (req,res,next)=>{
    ProductModel.find()
    .then((product)=>{
      res.status(200).json({
        success: true,
        message: 'Read successfuly',
        product
      })
    }).catch((e)=>{
      res.status(400).json({
        success:false, 
        message: e.message, 
        payload: {}})
    })
  };

  const viewone = (req,res,next)=>{
    ProductModel.find({_id:req.query.product_id})
    .then((Product)=>{
      res.status(200).json({
        success: true,
        message: 'Read successfuly',
        Product
      })
    }).catch((e)=>{
      res.status(400).json({success:false, message: e.message, payload: {}})
    })
  };

module.exports = {
    createProduct,getAll,viewone
  }