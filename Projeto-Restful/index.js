const express = require('express');

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));

app.utils = {
  error: require('./utils/error'),
  validator: require('./utils/validator')
};

require('./routes')(app);
require('./routes/users')(app);

app.listen(4000, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:3000/`);
});