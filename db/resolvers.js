const Model1 = require('../models/Model1');
const functions = require('./functions')
const resolvers = {
    Query: {
        getModels: async () => {
            const result = await functions.ReadAllRecords(Model1)
            return result
        }
    },
    Mutation: {
        newModel: async (_, { input }) => {
            const result = await functions.CreateRecord(Model1, input);
            return result
        }
    }
};


module.exports = resolvers;

