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

Return to console and run the followind commands:
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

You should now have a backend server up and running.


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

You should now have a frontend server up and running.

## Built With

Frontend:
```
material-ui

axios

google-maps-react

i18next

react-i18next

moment

react

redux

redux-thunk

styled-components
```

Backend:
```
pg

faker

geocoder

random-location
```


## Authors

* **Augustas Macijauskas** - *Initial work* - [AugustasMacijauskas](https://github.com/AugustasMacijauskas)