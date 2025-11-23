 // getting-started.js
const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("connection successful");
    
  })
  .catch((err) => console.log(err)
  );

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);



//const Employee = mongoose.model("Employee", userSchema); 

// const user1 = new User({
 // name: "Ayush",
 // email: "ayush@gmail.com",
 // age: 22,
//});

//user1.save();

 /*const user2 = new User({
  name : "Akash",
  email: "akash@gmail.com",
  age: 25,
});

user2
.save()
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
  
})*/

// User.insertMany([
//   {name: "Tony", email: "tony@gmail.com", age: 50},
//   {name: "Peter", email: "peter@gmail.com", age: 30},
//   {name: "Bruce", email: "bruce@gmail.com", age: 47},
// ]).then((res) => {
//   console.log(res);
  
// });

// User.findById("69137bc7228fe8119031dc34")
// //User.findOne({ age: {$gte: 47}})
// .then((res) =>{
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
  
// });

// User.updateOne({name: "Peter"}, {age: 49})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
  
// });


// User.findOneAndUpdate({name: "Akash"}, {age: 36}, {new: true})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
  
// });

// User.deleteOne({name: "Peter"}).then((res) => {
//   console.log(res);
  
// });

User.findByIdAndDelete("69137bc7228fe8119031dc34").then((res) => {
  console.log(res);
  
});

