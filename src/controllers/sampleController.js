
module.exports = {
    root: (req, res) => {
        res.status(200).send('Wellcome to Audit Server');
    },
    getSample: (req, res) => {
        res.status(200).send('This is API');
    }
}