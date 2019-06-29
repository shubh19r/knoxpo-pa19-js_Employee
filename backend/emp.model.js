const mongoose = require('mongoose');
const EMP = new mongoose.Schema({
ID: {
  
  type: Number
 },
NAME: {
  
  type: String
 },
EMAIL: {
  type: String
 },
Mob: {
  type: String
 },
Title: {
  type: String
 },
});
module.exports = mongoose.model('emps',EMP);