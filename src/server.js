const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { sv } = require('./config');
const usersRoute = require('./route/users.route');
const debtRoute = require('./route/debt.route');

const app = express();

app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

const port = (sv.port || '4000');

app.use(usersRoute);

app.use(debtRoute);

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
});

app.listen(port);
console.log('Server on port', port);    