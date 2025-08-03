// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'

// import connectDB from './config/mongodb.js'

// import userRouter from './routes/userRoutes.js'
// import imageRouter from './routes/imageRoutes.js'
// // import imageRouter from './routes/imageRoutes.js'

// const PORT = process.env.PORT || 5002

// const app = express()


// app.use(express.json())
// app.use(cors())
// await connectDB()

// // app.use('/api/user' , userModel)
// app.use('/api/user' , userRouter)
// app.use('/api/image', imageRouter)
// app.get('/' , (req,res)=> res.send("API Working fineee") )

// app.listen(PORT , ()=> console.log('server running on port ' + PORT));




// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import path from 'path'

// import connectDB from './config/mongodb.js'

// import userRouter from './routes/userRoutes.js'
// import imageRouter from './routes/imageRoutes.js'
// // import imageRouter from './routes/imageRoutes.js'

// const PORT = process.env.PORT || 5002

// const app = express()

// app.use(express.json())
// app.use(cors())
// await connectDB()

// // app.use('/api/user' , userModel)
// app.use('/api/user' , userRouter)
// app.use('/api/image', imageRouter)

// // Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static(path.join(__dirname, 'client/dist')));

//     // Handle React routing, return all requests to a single 'index.html' file
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
//     });
// } else {
//     app.get('/', (req, res) => res.send("API Working fineee"));
// }

// app.listen(PORT , ()=> console.log('server running on port ' + PORT));


import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url';

import connectDB from './config/mongodb.js'

import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 5002

const app = express()

app.use(express.json())
app.use(cors())
await connectDB()

app.use('/api/user' , userRouter)
app.use('/api/image', imageRouter)

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Correctly get __dirname for ES modules
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    // Set static folder
    app.use(express.static(path.join(__dirname, 'client/dist')));

    // Handle React routing, return all requests to a single 'index.html' file
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
} else {
    app.get('/', (req, res) => res.send("API Working fineee"));
}

app.listen(PORT , ()=> console.log('server running on port ' + PORT));