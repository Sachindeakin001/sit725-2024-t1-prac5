
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sachinynr2002:XyLL4TAN643dlKio@cluster0.kbklocx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect(err => {
    if (err) {
      console.error("Error connecting to MongoDB", err);
      return;
    }
    console.log("Connected to MongoDB");
  });

module.exports = client;