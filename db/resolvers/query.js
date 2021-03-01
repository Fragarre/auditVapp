const functions = require("./functions");
const Model1 = require("../../models/Model1");

const query = {
    Query: {
        getModel: async () => {
            const result = await functions.ReadAllRecords(Model1);
            return result;
        }
    }
}

module.exports = query;