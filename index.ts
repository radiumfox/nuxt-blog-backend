const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const mongoose = require("mongoose");
const { resolvers } = require("./resolvers.ts");
const { typeDefs } = require("./models/typeDefs.ts");

const MONGO_URI = "mongodb+srv://eteonelonga:0YlwOIihlKCAvCgW@cluster0.0qpxzjp.mongodb.net/radium_fox";

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`Db Connected`);
    })
    .catch(err => {
        console.log(err.message);
    });

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
    listen: { port: 5000 },
}).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});