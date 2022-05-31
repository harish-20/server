const db = require( 'mongoose' );
const express = require( 'express' );
const app = express();
const router = require( './router/route.js' );
const cors = require( 'cors' );

//allowing cross orgin resource sharing
app.use(cors({
    orgin:'*'
}))

//for use of json
app.use(express.json())

//routing
app.use('/user',router)

//connecting to database
db.connect('mongodb://localhost:27017/mycruddb',(err)=>{
    if(err)
        console.log(err);
    else    
        console.log('db is connected to mycruddb');
})

app.listen(3001,(err)=>{
    if(err)
        console.log(err);
    else    
        console.log('Server start at port 3001...');
})