# MongoDB ()

 

MongoDB is an open-source, document-oriented NoSQL database that stores data in flexible, JSON-like documents. It is used for its scalability, flexibility, and performance, making it ideal for applications with large volumes of semi-structured data or those that require rapid development. Key advantages include horizontal scaling, a flexible schema, and powerful query capabilities




TestDB> db.Players.find( {$or: [{score: {$gt: 80}}, {name: "ashu"}] })
[
  {
    _id: ObjectId('690f552ea8458c6f6f63b115'),
    name: 'ashu',
    age: 21,
    score: 65
  }
]

TestDB>


