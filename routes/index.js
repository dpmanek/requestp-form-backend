const form = require('./form');
const constructorMethod = (app) => {
	app.use('/form', form);
	app.use('*', (req, res) => {
		res.status(404).json({ error: 'Not Found' });
	});
};
module.exports = constructorMethod;
