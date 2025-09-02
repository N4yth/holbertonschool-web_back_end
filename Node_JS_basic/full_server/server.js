const app = require('express')();
require('./routes/index')(app, process.argv[2]);

app.listen(1245, () => {});

export default app;
