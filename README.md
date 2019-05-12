# backpaqr

Augustas Macijauskas solution for Backpaqr internship task.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Setting up

What things you need to install the software and how to install them

First you have to copy project files. Then open console and navigate to /api-server and run:
```
bundle install
```

Then you need to insert your database user. Open /config/database.yml and under *default* enter your postgresql username and password:
```
default: &default
  # some code
  username: your_username
  password: your_password
  # some code
```

Return to console and run the following commands:
```
rake db:create
```
```
rake db:migrate
```
```
rake db:seed
```

Finally, run:
```
rails s
```

You should now have a backend server up and running on port 3000.


To set up the frontend, navigate to /client/app and open a console window. If you are using npm, run:
```
npm install
```
Or, if you are using yarn, run:
```
yarn install
```

Then run:
```
npm run start
```

You should now have a frontend server up and running on port 8080.

## Built With

Frontend:
```
react - library to build frontend applications

redux, redux-thunk - used for global store management, creating actions and reducers and connecting with components

material-ui - a collection of beautiful responsive components to build applications

axios - used to fetch data by making requests to the backend server

google-maps-react - a google maps library easing work with maps

i18next, react-i18next - both used for adding translation functionality to the website

moment - used to manipulate dates

styled-components - useful library to style components
```

Backend:
```
pg - postgres database is used

faker - used for generating fake data to seed the database

geocoder - used for generating fake data to seed the database

random-location - used for generating locations to seed the database
```


## Authors

* **Augustas Macijauskas** - [AugustasMacijauskas](https://github.com/AugustasMacijauskas)