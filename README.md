# Group project of REST API for User Mangement

# I. Project Overview
The CRUD (Create, Read, Update, Delete) features of the API are intended for user management. It enables the use of Node.js, Express, TypeORM, MySQL, and TypeScript to manage user accounts in a database. In order to ensure effective user data handling and management, the API offers endpoints for creating new users, retrieving user details, updating user information, and deleting users.

# II. Setup Instructions

1. After the repository is created and provided by the leader, run this command in your terminal.
    -> "git clone https://github.com/nancyromales19/user-management-api.git"

2. Install all dependencies needed.
    -> "npm i bcryptjs cors dotenv express helmet http-status-codes mysql reflect-metadata typeorm uuid"
    -> npm i --save-dev @types/bcryptjs @types/cors @types/dotenv @types/express @types/helmet @types/http-status-codes @types/node @types/uuid ts-node-dev typescript

3. We will then set up our ormconfig.ts with our MYSQL credentials for the database connection.
    ![alt text](image.png)
    ![alt text](image-1.png)

# III. API Documentation

CREATION OF USERS - ROMALES
    ![alt text](image-2.png)

DELETING USERS - LOAYON
    ![alt text](image-7.png)
 
UPDATING USER DETAILS - GURREA
   ![alt text](Update-1.png)
   ![alt text](Update-2.png)

RETRIEVING USER DETAILS - LOPEZ
    ![alt text](get.png)
    ![alt text](get2.png)

# IV. Testing

 1. In testing, we used POSTMAN to test the API. You can use anything you are comfortable with.
    ![alt text](image-8.png)

 2. Make sure that your sql is running first.
    ![alt text](image-9.png)
    ![alt text](image-10.png)

 3. Run "npm run dev" in your terminal, you will see a message saying the serving is listening at port 3000
    ![alt text](image-11.png)
    ![alt text](image-12.png)

4. You can now test in Postman.
    ![alt text](image-13.png)


# V. MERGE CONFLICT 

    During the process of creating our application, we encountered a conflict. And basically we were able to resolve the 
    conflict.
   ![alt text](image-15.png)
   ![alt text](image-16.png)


