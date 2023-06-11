# bookStoreAPI
A REST API for a Book Store. The API should allow user to perform the following actions: Create, Read, Update, and Delete books in our database. Register, login and authenticate users and CRUD operations.

Steps to set-up the project:

1) install nodejs on your system.
2) create your project folder.
3) open the project folder in a code editor like VS Code.
4) open terminal there.
5) run the command 'npm init' in the terminal
6) install mongoose by running 'npm install mongoose'
7) signup on Mongoose Atlas (you can signup for free too)
8) set up the environment on mongoose atlas
9) go to database -> create new cluster -> go to the 'connect' of new cluster
10) get the "connection string" from there add it to mongoose.connect("") in 'app.js';
11) install the following packages a) express b) jsonwebtoken c) http d) body-parser e) bcryptjs f) nodemon g) path
12) run 'nodemon index.js' in the terminal
