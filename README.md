# CRUD App using Node.js, ExpressJS and MongoDB.

This repository contains an Express.js router designed to manage student data. It includes routes for displaying, adding, editing, and deleting student records. This README file provides an overview of the code and its functionality.

## Prerequisites

Before you can run this project, make sure you have the following installed:

- **Node.js**

- **npm (Node Package Manager)**

- **Express.js**

- **MongoDB (or any other database you are using)**

- **EJS (Embedded JavaScript) templating engine (used for rendering views)**
#

## Setup

1. Clone this repository to your local machine:

   ```shell
   https://github.com/PyDeveloperAniket/CRUD-App-Node-Express-Mongo.git

2. Navigate to the project directory:

   ```shell
   cd CRUD-App-Node-Express-Mongo

3. Install the required dependencies:

   ```shell
   npm install

4. Create a .env file in the project root and configure it with your environment variables:

   ```shell
   PORT=3001
#

## Run

1. **Starting the App**: To start the API, run the following command:
    ```
    npm start
    ```

    The API will be accessible at http://localhost:3001.
#

## Usage

1. **Displaying Student Data**:
    - Route: /
    - Method: GET
    - Description: Retrieves all student data from the database and renders it on the 'home.ejs' view.

2. **Adding Student Data**:
    - Route: /sendData
    - Method: POST
    - Description: Creates a new student record in the database based on the data provided in the request body. Afterward, redirects back to the home page.
3. **Editing Student Data (Retrieve Edit Form)**:
    - Route: /edit/:id
    - Method: GET
    - Description: Retrieves an existing student's data by ID and renders it on the 'edit.ejs' view. Users can edit the data on this page.
4. **Editing Student Data (Submit Edit Form)**:
    - Route: /edit/:id
    - Method: POST
    - Description: Updates an existing student's data by ID with the data provided in the request body. Redirects back to the home page after the update.
5. **Deleting Student Data**:
    - Route: /delete/:id
    - Method: GET
    - Description: Deletes an existing student's data by ID and redirects back to the home page.
#


**Error Handling:**

```
In case of errors during any of the above operations (e.g., database connection issues or data validation failures), the router will redirect back to the previous page and log the error to the console.

```

**Acknowledgments**

- The code in this repository was developed using Express.js and MongoDB.
- EJS was used for rendering views.
- Special thanks to the Express.js and Node.js communities for their valuable resources and documentation.
#

## Aniket Wandile 

*follow for more :*  **https://aniketwandile.tech**
