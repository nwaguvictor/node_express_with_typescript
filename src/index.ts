import express, { Request, Response, Application } from 'express'

const app: Application = express();

app.get('/', (req: Request, res: Response): void => {
  res.end('Welcome to Node/Express')
});

app.get('/home-page', (req: Request, res: Response): void => {
  res.status(200).send('Welcome to home page')
})

app.listen(2021, (): void => console.log(`Application running on port ${2021}`))