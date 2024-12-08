# graphql_apollo_server
## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)

## General Info
***  
This project is a basic GraphQL server built using `Apollo Server` and JavaScript. It serves a simple query that returns a "Hello World" message as a response. The purpose of this application is to demonstrate a minimal GraphQL implementation in JavaScript using Apollo Server.

- **GraphQL Query**:
    - Query: `hello`
    - Response: `"Hola Mundo desde GraphQL en javascript"`

## Technologies
***  
A list of technologies used within the project:
* [Node.js](https://nodejs.org): Version 20.0.0
* [Apollo Server](https://www.apollographql.com/docs/apollo-server/): Version 3.x
* [GraphQL](https://graphql.org): Specification for API queries

## Installation
***  
Follow these steps to install and run the project: 
### Via GitHub
Ensure you have Node.js installed on your machine:
```
node --version  
npm --version
```
Copy the repository
```
git clone https://github.com/nava2105/js_graphql.git
```
Enter the directory
```
cd ../js_graphql
```
Install the dependencies
```
npm install  
```
Run the server
```
node app.js
```
Open a browser and enter to
Server: [http://localhost:4000](http://localhost:4000)
### Via Docker-hub
Pull the image from Docker-hub
```
docker pull na4va4/js_graphql
```
Start a container from the image
```
docker run -p 4000:4000 na4va4/js_graphql
```
Open a browser and enter to
Server: [http://localhost:4000](http://localhost:4000)