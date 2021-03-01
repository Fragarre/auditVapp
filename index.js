const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers')
const sampleRouter = require('./src/routes/sampleRouter');
require("dotenv").config({ path: "variables.env" });

const app = express();
// CONECTAR DB
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('DB Connected')
    } catch (error) {
        window.alert('Error! ' + error.message)
        process.exit(1);
    }
};
connectDB();
//SETINGS
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
// ROUTES
app.use('/api', sampleRouter);
//GRAPHQL
const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
});
//MIDDLEWARE
server.applyMiddleware({ app })
//SATRT SERVER
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server runing on port: ${PORT} ${server.graphqlPath}`)
});
