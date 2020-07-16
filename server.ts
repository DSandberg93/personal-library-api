import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app: express.Application = express();
app.use(bodyParser.json());

// Configure Express to use EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req: express.Request, res: express.Response) => {
  res.json({ message: 'Welcome to my peculiar little library' });
});

app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
