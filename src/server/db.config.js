const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/telegram';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
});

const { connection } = mongoose;

connection.once('open', () => {
    console.log('DB is Connected');
});