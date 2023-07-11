// import mongoose to build model
const mongoose = require("mongoose");

// the rules we need to follow
// to create a model we need to call mongoose.schema 
const HeroSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "{PATH} is required"],
        minlength :[3, "{PATH} must be at least 3 characters"]
    },
    Power: {
        type :Number,
        required: [true, "{PATH} is required"],
        min :[ 1 , " You must at least have one {PATH}"],
        max: [10000, "You have extra {PATH}"]
    },
    isAlive:{
        type:Boolean,
        required: [true, "{PATH} is required"],
        default: false,
        date: {type:Date,default: Date.now}
    }  
// Created at ,Updated At
},{timestamps:true})

// We need to export our model in order to be able to call it from other files
const Hero = mongoose.model("Hero",HeroSchema)
module.exports= Hero;