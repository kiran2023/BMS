require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.CONN_URI).then(() => {
    console.log('Database connected');
}).catch((err) => { 
    console.log(err);
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
}); 