Github Finder
Github Finder is a React application that allows users to search for GitHub profiles and view detailed information, including repositories and followers. It uses the GitHub API and demonstrates the use of context, hooks, routing, and state management.

🚀 Features
Search GitHub users by username

View user profile info, including bio, location, and followers

View user repositories

Alert system for invalid searches

Error handling for non-existing users

Responsive layout and navigation

🛠️ Built With
React

Context API + useReducer

React Router DOM (v6)

GitHub API

Font Awesome

Axios (optional for HTTP requests)

📂 Project Structure (Simplified)
bash
Copy
Edit
src/
│
├── components/
│   └── layout/
│       ├── Navbar.js
│       ├── Alert.js
│       ├── users/
│       │   └── User.js
│       └── pages/
│           ├── Home.js
│           ├── About.js
│           └── NotFound.js
│
├── context/
│   ├── github/
│   │   ├── GithubState.js
│   │   └── ...
│   └── alert/
│       ├── alertState.js
│       └── ...
│
├── App.js
└── App.css
⚙️ Getting Started
Clone the repository


git clone https://github.com/yourusername/github-finder.git
cd github-finder
Install dependencies

npm install
Run the application

npm start

🔑 Environment Variables
To use the GitHub API without rate limiting, create a .env file and add:

REACT_APP_GITHUB_CLIENT_ID=your_client_id
REACT_APP_GITHUB_CLIENT_SECRET=your_client_secret


Live: https://githubfinder8366373.netlify.app/

