const functions = require("./functions");
const Model1 = require("../../models/Model1");

require("dotenv").config({ path: "variables.env", });

const mutation = {
    Mutation: {
        newItemModel1: async (_, { input }) => {
            const result = await functions.CreateRecord(Model1, input);
            return result
        }
    }
}