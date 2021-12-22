import express, { response } from 'express';
import cors from 'cors';
import knex from 'knex';
import bcrypt from 'bcrypt';
import signin from './controllers/signin.js';
import register from './controllers/register.js';
import addtofav from './controllers/addto.js';
import deletefavourite from './controllers/deletefav.js';
import viewfavourites from './controllers/favourites.js';



const app = express();
app.use(express.json());
app.use(cors());
const saltRounds = 10;


const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: 'test',
        database: 'news'
    }
});

app.get('/', (req, res) => {
    db.select().table('users')
    .then(res.json("DB Connected"))
});


app.post('/register',(req,res)=>{register(req,res,db,bcrypt,saltRounds)});
app.post('/signin', (req,res)=>{signin(req,res,db,bcrypt)});//DONE 
app.post('/addto',(req,res)=>{addtofav(req,res,db)});
app.post('/favourites',(req,res)=>{viewfavourites(req,res,db)});
app.delete('/deletefav',(req,res)=>{deletefavourite(req,res,db)});


app.listen(3000, () => {
    console.log('app is runnig on port 3000')
}); 
