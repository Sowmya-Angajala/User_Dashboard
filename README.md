# User Management Dashboard

A responsive User Management Dashboard built using React, Vite, Chakra UI, and Axios. The application allows users to view, add, edit, delete, search, sort, filter, and paginate user records fetched from the JSONPlaceholder API.

---

## Live Demo



## GitHub Repository

repository link here:

```text
https://github.com/Sowmya-Angajala/User_Dashboard
```

---

## Features

* View all users from JSONPlaceholder API
* Add new users
* Edit existing users
* Delete users
* Search users by name or email
* Sort users alphabetically
* Filter users by:

  * First Name
  * Last Name
  * Email
  * Department
* Pagination support:

  * 10
  * 25
  * 50
  * 100 records per page
* Responsive design
* Form validation
* Error handling
* Loading state management

---

## Tech Stack

### Frontend

* React
* Vite
* Chakra UI
* Axios
* React Toastify

### API

* JSONPlaceholder

Endpoint Used:

```text
https://jsonplaceholder.typicode.com/users
```

---

## Folder Structure

```text
src
│
├── api
│   └── axios.js
│
├── components
│   ├── FilterDrawer.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   ├── Pagination.jsx
│   ├── UserForm.jsx
│   └── UserTable.jsx
│
├── pages
│   └── Dashboard.jsx
│
├── App.jsx
├── main.jsx
└── theme.js
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd user-management-dashboard
```

Install dependencies:

```bash
npm install
```

---

## Run Locally

Start the development server:

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## User Operations

### View Users

Fetches user data from JSONPlaceholder API and displays it in a responsive table.

### Add User

Creates a new user using a POST request.

### Edit User

Updates user information using a PUT request.

### Delete User

Removes a user using a DELETE request.

### Search

Search users by:

* First Name
* Last Name
* Email

### Sort

Sort users alphabetically:

* Ascending (A-Z)
* Descending (Z-A)

### Filter

Filter users based on:

* First Name
* Last Name
* Email
* Department

### Pagination

Supports page sizes:

* 10
* 25
* 50
* 100

---

## Validation

The application validates:

* First Name is required
* Last Name is required
* Email is required
* Department is required
* Valid email format

---

## Error Handling

The application handles:

* API failures
* Network issues
* Invalid form submissions
* Empty results

---

## Future Improvements

* Backend integration with database
* Authentication and authorization
* Dark mode support
* Unit testing
* Infinite scrolling
* Export users to CSV/Excel

---

## Author

Sowmya Angajala 
