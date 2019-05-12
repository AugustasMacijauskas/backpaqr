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