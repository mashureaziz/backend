const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieSession = require('cookie-session');
const { scrypt, randomBytes } = require('crypto');

const { fileUploadRouter } = require('./routes/upload');
const { writeFileRouter } = require('./routes/writeFile');
const { loginRouter } = require('./routes/login');

const {handleError} = require('./middlewares/handleError');
const { dashRouter } = require('./routes/dashboard');

const app = express();
app.use(fileUpload({
    createParentPath: true
}))

app.use(cookieSession({
    keys: new Array(10).fill(0).map(el => randomBytes(12).toString('hex')),
    maxAge: 600 * 1000
}))

app.use(cors({
    origin : true,
    credentials : true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileUploadRouter);
app.use(writeFileRouter);
app.use(loginRouter);
app.use(dashRouter);
app.use(handleError);

const port = process.env.PORT || 3000;

app.listen(port, (e) => {
    console.log(`Listening on ${port}`);
})