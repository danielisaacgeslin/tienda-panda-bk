const mongoose = require('mongoose');

const schema = mongoose.Schema({
    products: [String],
    promotions: [String],
    secondHand: [String]
});

const model = mongoose.model('MLIds', schema);

module.exports = { schema, model };
