# User Registration and Data Display System

This repository contains a simple user registration and data display system built with PHP, MySQL, and Bootstrap. It includes the following functionalities:
- User registration with form validation.
- Displaying a list of registered users.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [License](#license)

## Installation

### Prerequisites
- PHP 7.x or higher
- MySQL
- Web server (e.g., Apache, Nginx)

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    ```
2. Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```
3. Import the `user_db` database. Create a database in MySQL named `user_db` and import the `users` table:
    ```sql
    CREATE DATABASE user_db;
    USE user_db;
    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );
    ```
4. Configure the database connection in `db.php`:
    ```php
    $servername = "localhost";
    $username = "YOUR USERNAME HERE";
    $password = "YOUR PASSWORD HERE";
    $db = "user_db";
    ```

5. Start your web server and navigate to `index.html` in your browser.

## Usage

1. **Register a new user:**
    - Open `index.html`.
    - Fill in the registration form and click "Sign Up".
    - The form data will be validated before being sent to `register.php` for processing.
    - If successful, the user will be registered and stored in the database.

2. **View registered users:**
    - Open `data.php`.
    - A table will display a list of all registered users.

## File Structure

  ```structure
  ├── images/
  │ ├── logo.png
  │ └── background.jpg
  ├── index.html
  ├── data.php
  ├── db.php
  ├── register.php
  ├── script.js
  ├── style.css
  ```

- `index.html`: The registration form page.
- `data.php`: Displays the list of registered users.
- `db.php`: Database connection setup.
- `register.php`: Handles user registration.
- `script.js`: Contains form validation logic.
- `style.css`: Styles for the pages.

## Technologies Used

- **Frontend:**
    - HTML5
    - CSS3
    - Bootstrap 5.3.3
    - JavaScript

- **Backend:**
    - PHP 7.x or higher
    - MySQL

## Screenshots

### Registration Form
![Registration Form](images/registration_form.png)

### User Data Table
![User Data Table](images/user_data_table.png)

## Credits

Created by Muhammad Muzzamil Khan

---

Explore and contribute to PHP Product Manager to enhance its functionality. If you have questions or suggestions, please open an issue or contact khanmuhammadmuzzamil500@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
