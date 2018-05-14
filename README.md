Use rvm with ruby version 2.4.2 and rails version 5.1.4
<br>
You’ll need to have Node >= 6 on your machine
 ```sh
rvm install 2.4.2
rvm gemset create pi
gem install rails -v 5.1.4
bundle install

npm install -g yarn
cd app/frontend
yarn install
```

Run development server
```sh
rake start
```
