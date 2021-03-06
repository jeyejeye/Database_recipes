import express from 'express';
import { restRouter } from './api';
import { connect } from './db';
import config from './config';
import setupMiddleware from './middleware';

const app = express();

setupMiddleware(app);

const database = connect();

// {force: true} force: true will drop the table if it already exists
database.sequelize.sync().then(() => {
    console.log('Drop and Resync with { force: false }');
});

app.use('/api', restRouter);

app.get('/', function (req, res) {
    res.redirect('/authorization.html');
});

app.use(express.static(__dirname + '/public'));

//catch all
app.all('*', (req, res) =>  {
    res.json({ ok: true });
});

app.listen(config.port, () => {
    console.log('http://localhost:3000');
});

export default app;
