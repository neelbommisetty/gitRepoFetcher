# Git Repository Fetcher
This application fetches public repositories of any user on github.com.

# Technologies used
* angular - framework used to build this application
* angular - ui-router - used for routing
* sass - css preprocessor
* webpack - for build system
* webpack-dev-server - for development server
* express - for production server
* yarn - package manager

# Usage
```
Clone the repo
# git clone <repo-url>
# cd <project-name>

Install all dependencies
# yarn install

To start dev server
# yarn start

To make production build
# yarn build

To start production server
# yarn prod
```

# Limitations
If user has more than 30 repositories . It fetches only top 30 in alphabetical order