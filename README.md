# final-project- loan tracker 
file:///C:/Users/tarza/OneDrive/Desktop/final%20project/loan%20tracker/frontend/index.html
Loan Tracker App
The Loan Tracker App is a simple web-based application that allows users to add, manage, and track loans. It stores loan details such as borrower's name, loan amount, and due date. The app uses a Node.js backend with MySQL as the database and a responsive frontend built with HTML, CSS, and JavaScript.

Features
Add new loans (Borrower, Loan Amount, Due Date)
View a list of all loans
Responsive and user-friendly interface
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MySQL
Styling: CSS with a clean, blue-themed design
Project Structure
bash
Copy code
loan_tracker/
│
├── backend/
│   ├── server.js         # Backend server (Node.js & Express.js)
│   ├── db.js             # Database connection (MySQL)
│
├── frontend/
│   ├── index.html        # Main HTML file
│   ├── style.css         # CSS for styling the frontend
│   ├── app.js            # JavaScript to handle frontend functionality
│
└── README.md             # Project documentation
Prerequisites
Node.js (with npm)
MySQL
Setting Up the Project
Step 1: Set Up the MySQL Database
Open MySQL (using MySQL Workbench or terminal).
Create the database and table by running the following SQL commands:
sql
Copy code
CREATE DATABASE loan_tracker;

USE loan_tracker;

CREATE TABLE loans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    borrower VARCHAR(255) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    dueDate DATE NOT NULL
);
Step 2: Backend Setup (Node.js)
Navigate to the backend folder in the project directory:

bash
Copy code
cd loan_tracker/backend
Install the necessary Node.js dependencies:

bash
Copy code
npm install express mysql body-parser
Update the MySQL credentials in the db.js file, if needed, to match your local setup:

javascript
Copy code
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',       // Replace 'root' with your MySQL username if needed
    password: '',       // Replace with your MySQL password if any
    database: 'loan_tracker'
});
Start the Node.js backend server:

bash
Copy code
node server.js
The backend will be running on http://localhost:3000.

Step 3: Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd loan_tracker/frontend
Open the index.html file in a web browser to access the frontend interface. You can double-click it or use the command below:

bash
Copy code
open index.html    # Mac
start index.html   # Windows
How to Use the Loan Tracker
Add a Loan:

Enter the borrower's name, loan amount, and due date in the form.
Click the "Add Loan" button.
The loan will be saved to the MySQL database, and the loan list will automatically update.
View Loans:

The loans you add will be displayed in a list on the page.
Each loan shows the borrower's name, the loan amount, and the due date.
API Endpoints
The backend provides the following REST API endpoints:

Add a Loan (POST /addLoan)

Adds a loan to the MySQL database.
Request body should include borrower, amount, and dueDate.
Get All Loans (GET /getLoans)

Fetches all loans from the database.
Troubleshooting
MySQL Connection Issues
Ensure your MySQL server is running and the credentials in db.js are correct.
Check the database connection by manually querying the loan_tracker database.
Backend Not Starting
If the server doesn't start, ensure you have installed the required Node.js packages with npm install.
Frontend Not Updating the Loan List
Make sure the /getLoans and /addLoan API routes are working.
Check the browser's console and network tab for any JavaScript or API errors.
Future Improvements
Add functionality to update or delete loans.
Implement user authentication.
Improve styling with more detailed UI components.
License
This project is open-source and free to use.


