const app = require('./src/app/app/app');

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const jwt = require('jsonwebtoken');
const token = jwt.sign({userId:"user-123"},"dev-secret");
console.log(token);