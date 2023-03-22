# Note Taker - Express

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Netlify Status](https://api.netlify.com/api/v1/badges/6e1ccdc5-d0b8-480f-9d3d-27af9539a175/deploy-status)](https://app.netlify.com/sites/ianaack-note-taker/deploys)

## Description

Note Taker is an application that can be used to write and save notes. This application uses an Express.js back end, and saves and retrieves note data from a JSON file.

This application can either be deployed locally by running a localhost server on your machine, or can be accessed through the following link:
[Note Taker](https://ianaack-note-taker.netlify.app/)

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#License)

##

## Installation

To install this application clone the repository to your local machine either by an HTTP or an SSH link.

```bash
git clone
```

Once you have the repository cloned to your local machine, navigate to the root folder of the repository in terminal and copy to install the following dependencies:

Express:

```bash
npm i express
```

This will install all necessary dependancies in order for the application to run

## Usage

To use this application, navigate to the root of this repository in the terminal and enter the following command: 

```bash
npm start
```

This will start the server and the deployed application can be accessed in their browser via a localhost. 

The user can also the deployed application via the Heroku link provided above.

The following images show the web application's appearance and functionality:

Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.
![11-express-homework-demo-01](https://user-images.githubusercontent.com/47282257/165008942-e8faed7c-30bb-46e8-9f23-bbdfe3794201.png)

Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.
![11-express-homework-demo-02](https://user-images.githubusercontent.com/47282257/165008953-42c48145-9104-4c44-9b54-2071359caca3.png)

## Contribution

No contribution is required at this time.

## Tests

Testing for this application has been implemented using the node package "Jest". 
Use the following command to test whether all files are working correctly:

```bash
npm run test
```

## Questions

To view more projects that I've created visit my [Github](#https://github.com/ianaack).

How to reach me for additional questions: ianaack@gmail.com

## License

This project is covered under the MIT License.
