const express = require('express');
const app = express();

const configRoutes = require('./routes/index');
configRoutes(app);

app.use(express.json());

const port = 8000;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
