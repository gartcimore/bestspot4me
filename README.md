# bestspot4me

###Start the Dev Env

- install vagrant and Virtual Box
- $ vagrant plugin install ruby_dep --plugin-version 1.3.1
- $ vagrant plugin install vagrant-fsnotify
- run vagrant up --provision

- connect via ssh to 127.0.0.1:2122 vagrant/vagrant
- $ su
- $ vagrant/vagrant
- $ curl -L https://github.com/docker/compose/releases/download/1.8.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
- $ chmod +x /usr/local/bin/docker-compose
- $ exit
- $ bestSpot4me_start

- in the windows prompt
- $ vagrant fsnotify

### Backend Serv

> Backend Serv is running on http://localhost:8081/
> REST API should be accessible on http://localhost:8081/api/
> Mongo Express is accessible via http://localhost:8081/mongo_express/

### WebApp Serv
> WebApp Serv is running on http://localhost:8080/
> HMR is enabled
