/**
 * This file is for Mongooes
 */

 const mongoose = require('mongoose');
 // optional shortcut to the mongoose.Schema class
 const Schema = mongoose.Schema;


 const flightSchema = new Schema({
   airline: {
     type: String,
     default: 'n/a',
     enum: ['American', 'Delta', 'Southwest', 'United']
   },
   airport: {
     type: String,
     default: 'DEN',
     enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']
    },
   flightNo: {
     type: Number,
     dafault: 'n/a',
     min: 10,
     max: 9999
   },
   departs: {
     type: Date}
   });

 module.exports = mongoose.model('Flight', flightSchema);