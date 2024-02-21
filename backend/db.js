const mongoose = require('mongoose');
const mongoURI="mongodb://localhost:27017/notesphere"

const connectDatabase = () => {
    mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB Connected')) // Log success message
    .catch(err => console.log('MongoDB Connection Error:', err));
};
module.exports=connectDatabase;