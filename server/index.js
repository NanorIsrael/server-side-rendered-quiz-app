import express from 'express';


const app = express();

app.get('/', async (_req, res) => {
	res.send("Hello world!");
})

const port = 7777;
app.listen(port);
console.info(`App listening on port ${port}`);