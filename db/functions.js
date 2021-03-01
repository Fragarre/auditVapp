//require("dotenv").config({ path: "variables.env" });

module.exposts = {
    CreateRecord: async (model, data) => {
        try {
            const newRecord = new model(data);
            newRecord.save();
            return 'Record Created';
        } catch (error) {
            return error.message;
        }
    },
    ReadOneRecord: async (model, data) => {
        try {
            const record = await model.findOne(field);
            return record;
        } catch (error) {
            return error.message;
        }
    },
    UpdateRecord: async (model, id, input) => {
        try {
            const record = await model.findByIdAndUpdate(id, input, {
                new: true
            });
            return 'Updated';
        } catch (error) {
            return error.message;
        }
    },
    DeleteRecord: async (model, idField) => {
        try {
            const record = await model.findByIdAndRemove(idField);
            if (record === null) {
                return ('Does not Exist!')
            } else {
                return ('Removed!')
            }
        } catch (error) {
            return error.message;
        }
    },
    ReadAllRecords: async (model) => {
        try {
            let records = await model.find({});
            return records;
        } catch (error) {
            return error.message;
        }
    },
    getRecordsByField: async (model, field) => {
        try {
            const records = await model.find({
                field
            });
            return records;
        } catch (error) {
            return error.message;
        }
    },
    ResetCounter: async (model, id) => {
        try {
            const reset = await model.counterReset(id)
            return "Counter Reset"
        } catch (error) {
            return error.message
        }
    },
}
