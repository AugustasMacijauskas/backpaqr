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

You should now have a backend server up and running. To set up the frontend, navigate to /client/app and open a console window. Run these commands:
```
npm install
```
if you are using npm, or
```
yarn install
```
if you are using yarn.

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

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc