import express from "express";
import authRoutes from "./routes/auth.js";  // Importing router for authentication routes 
import userRoutes from "./routes/users.js"; // Importing router for users routes
import postRoutes from "./routes/posts.js"; // Importing router for posts routes
import cookieParser from "cookie-parser"; // Middleware for parsing the cookies attached to the client requests
import multer from "multer"; // Middleware for handling file upload

const app = express(); // Create an instance of express 

app.use(express.json()); // This middleware will parse any incoming request with JSON payloads
app.use(cookieParser()); // This middleware will parse cookies that come with the client requests

/*
  The following three lines configures multer to accept file uploads in the client's request.
  It specifies a destination folder for the uploaded files and a naming convention for the 
  uploaded files before storing them in the specified folder.
*/

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

/*
  This creates an endpoint with the path '/api/upload' that accepts POST requests containing
  a single file under the 'file' key in the request body. When a request is made, multer will 
  handle the file upload and place the uploaded file in the folder specified above using the
  naming convention created above. Finally, it sends back the name of the saved file for further use.
*/

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

// Mount the router for '/api/auth' at this endpoint
app.use("/api/auth", authRoutes);

// Mount the router for '/api/users' at this endpoint
app.use("/api/users", userRoutes);


// Mount the router for '/api/posts' at this endpoint
app.use("/api/posts", postRoutes);

app.post('/', () => {
  return 'working'
})
/*
  This starts the Express server listening on port 8800. When the server is up and running, 
  'Connected!' will be printed to the console letting us know that everything is working.
*/

app.listen(9000, () => {
  console.log("Connected!");
});