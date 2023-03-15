var express = require('express');
const { isValidObjectId } = require('mongoose');
const UserModel = require('../models/user');
var router = express.Router();
var mongoose = require('mongoose');

const addUser = (req, res, next)=>{

    const Product = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password:req.body.password
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

  const insertPassword = (req, res, next)=>{
    const password = req.body.pass;
    if(password === "sefaadvsa"){
      res.status(200).json(
        {
          succuss: true,
          message: 'Your password is correct',
          payload: {}
        }
      );
    }else if(password != "sefaadvsa"){
      res.status(400).json(
        {
          succuss: false,
          message: 'Your password is incorrect'
        }
      );
    }
  };

module.exports = {
    addUser,insertPassword
  }