// Read https://docs.mongodb.com/drivers/node/current/quick-start/ to setup
// Documentation: https://mongodb.github.io/node-mongodb-native/4.0/

async function myAsyncFunction(){
    const { MongoClient } = require("mongodb");
    // TODO: Replace the uri string with your MongoDB deployment's connection string.
    const uri =
        "mongodb+srv://<username>:<password>cluster0.vomg3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    await client.connect()
    console.log('hello')
    // TODO: create a database called attendance
    const database = client.db('attendance')

    // TODO: create a collection called students
    const students = database.collection('students')

    // Example for how to add a student. You can check the documentation at https://docs.mongodb.com/manual/reference/method/db.collection.insert/#mongodb-method-db.collection.insert
    // Here's another example: https://docs.mongodb.com/drivers/node/usage-examples/insertOne/
    await students.insertOne({
        // this is a document (or object)
        name: "Jeb",
        regNum: 14,
        age: 17,
        favColour: "Orange"
    })
    await students.insertOne({
        // this is a document (or object)
        name: "Jan",
        regNum: 6,
        age: 16,
        favColour: "Yellow"
    })

    // Documentation: https://mongodb.github.io/node-mongodb-native/markdown-docs/queries.html
    // Documentation 2: https://mongodb.github.io/node-mongodb-native/4.0/classes/collection.html#findone
    // Usage example: https://docs.mongodb.com/drivers/node/usage-examples/findOne/
    // TODO: find (obtain data for) the student with the age 17
    let query = { age: 'what is my age?' }
    let student = await students.findOne(query) // Recap: Lesson 1 Example 7
    console.log(student)

    // TODO: obtain data for the student with the name Jan
    query = {}
    student = await // ...
    console.log(student)

    // You can check out https://docs.mongodb.com/drivers/node/current/usage-examples/ to learn more too.
}
myAsyncFunction()


