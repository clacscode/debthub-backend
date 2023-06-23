import { sv } from './config.js'
import usersRoute from './routes/users.route.js'
import debtRoute from './routes/debt.route.js'
import app from './app.js'

const port = (sv.port || '4000');

app.use('/api', usersRoute);

app.use('/api', debtRoute);

app.use((err, req, res, next) => {
    return res.status(500).json({
        message: err.message
    })
});

app.listen(port);
console.log('Server on port', port);    