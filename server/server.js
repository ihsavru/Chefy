const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const next = require('next');
const auth = require('./auth');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const port = parseInt(process.env.PORT, 10) || 2000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.set('views', __dirname + '/views');
    server.set('view engine', 'ejs');

    server.use(cookieParser());

    server.use(
      bodyParser.json({
        limit: 1024
      })
    );

    server.use('/auth', auth);

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`)
    })
  });
