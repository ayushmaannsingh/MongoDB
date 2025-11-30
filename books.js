// getting-started.js
const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("connection successful");
    
  })
  .catch((err) => console.log(err)
  );

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low for Amazon selling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    genere: [String],
    category: {
        type: String,
        enum: ["friction", "non-friction"],
    }
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate(
    "691c69b6d2e3d906934af176", 
    { price: -100},
    
    )
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err); 
});



// let book1 = new Book({
//     title: "Mathematics XII",
//     author: "RD Sharma",
//     price: 799,
//     genere: "studying"
// });

// book1
// .save()
// .then((res) => {
//     console.log(res);    
// })
// .catch((err) => {
//     console.log(err);
    
// });

// --------

// let book1 = new Book({
//     title: "Mathematics XII",
//     author: "RD Sharma",
//     price: 799,
//     genere: "studying"
// });

// book1
// .save()
// .then((res) => {
//     console.log(res);    
// })
// .catch((err) => {
//     console.log(err);
    
// });



