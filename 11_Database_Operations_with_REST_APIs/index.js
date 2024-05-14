// Introduction to API
// API - Application Programing Interface
// It has "API endpoints" which are called by client requests.
// API is a service / a program / an interface through which the client side developer
// can commincate with the server.
// The APIs used for data sharing are known as REST APIs.
// REST - Representational State Transfer

const express = require('express');
const router = require('./routes/products');
const app = express();

app.use('/', router);

const server = app.listen(3000, () => {
  console.log('Server is Running...');
});

// Status codes
// - Code(100-199) : Informational responses
// - Code(200-299) : Successful responses
// - Code(300-399) : Redirection messages
// - Code(400-499) : Client error responses
// - Code(500-599) : Server error responses

// What are PUT & PATCH requests?
// Both are updating type of requests.
// When making a query to update the database in any sense, we use either of
// these two methods.
// PUT is used when an entire dataset, e.g a record is to be updated at once
// PUT will overwrite the entire record
// PATCH request will make a patch & edit the specific field value only.
// PATCH wil overwrite only the specific fields.
