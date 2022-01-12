# contact-list
Contact list for registered users

**Description:** Project is developed using Node.js with Nest.js, Next.js, Typescript, React, Redux Saga, Ant Design, MongoDB, Mongoose, Typegoose

**Note:** This is sample project which uses password storage in plain text (till I update code to use desired method). In production it is not recommended. Use hashing with salt to store password.

To run this project

1) Open `contact-list.code-workspace` in vs code
2) execute `npm i` in vs code terminal
3) Make sure MongoDB is up and running. Default localhost connection is being used. If you want to connect any other database you can update `.env` file's `MONGO_URI` variable.
4) Hit F5 or execute `npm run start`.
5) Open browser with `http://localhost:3000/registration-login`

Following are the screenshots of the project.

# Login Page
![alt text](https://github.com/hnviradiya/contact-list/blob/main/screenshots/UserRegistrationAndLoginPage.png?raw=true)


# Home Page
![alt text](https://github.com/hnviradiya/contact-list/blob/main/screenshots/WelcomeHomePage.png?raw=true)


# Contact List Page
![alt text](https://github.com/hnviradiya/contact-list/blob/main/screenshots/ContactListPage.png?raw=true)


# Contact List Delete Option
![alt text](https://github.com/hnviradiya/contact-list/blob/main/screenshots/ContactListPageDelete.png?raw=true)




