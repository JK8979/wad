const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = 3000;

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://jayeshkande4:6Ly1hVrsIhV8ONgv@cluster0.vduhegh.mongodb.net/students");

// 6Ly1hVrsIhV8ONgv

console.log("db connected");

const studentSchema = new mongoose.Schema({
  name: String,
  marks: Number
});

const student = mongoose.model('student', studentSchema);

app.get('/students',async(req,res)=>{

  const students=await student.find();
  res.send(students);
});

app.get('/students/:name',async(req,res)=>{

  const{name}=req.params;
  const students=await student.find({name});
  res.send(students);
})

app.post('/add-student',async(req,res)=>{
  const{name,marks}=req.body;

  const newStudent=new student({name,marks});
  await newStudent.save();
})

app.delete('/delete-student/:name',async(req,res)=>{
   
  const {name} =req.params;
  const del=await student.findOneAndDelete({name});
})

app.put('/update',async(req,res)=>{

  const{name,marks}=req.body;

  const upstudent =await student.findOneAndUpdate({name,marks});
})



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
