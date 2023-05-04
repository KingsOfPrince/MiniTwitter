import { Request, Response, Express } from 'express'
import { Database } from '../database'


const db = new Database();

export class API {
  // Properties
  app: Express
  // Constructor
  constructor(app: Express) {
    this.app = app
    this.app.get('/login', this.sayHello.bind(this));
    this.app.post('/tweets', this.tweets.bind(this));
    
  }
  private async tweets (req: Request, res: Response){

    const user_id: number = 1;
    const content: string = 'erth';
    const likes: number = 1;
    const dislike: number = 1;
    
    const query = `INSERT INTO tweets (user_id, content, likes, dislike) VALUES (?, ?, ?, ?)`;
    const values: (string | number)[] = [user_id, content, likes, dislike];
    
    await db.executeSQL(values);
    await db.executeSQL(query);
        res.send(result)
    
  }
  // Methods
  private sayHello(req: Request, res: Response) {
    res.send('Hello There!')
  } 
  private async postTweet(req: Request, res: Response) {
      const { user_id, content, likes, dislike } = req.body
        

      


  }}




function result(result: any) {
  throw new Error('Function not implemented.');
}

