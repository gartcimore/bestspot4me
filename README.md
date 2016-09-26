# bestspot4me

###Start the Dev Env

- install vagrant and Virtual Box
- $ vagrant plugin install ruby_dep --plugin-version 1.3.1
- $ vagrant plugin install vagrant-fsnotify
- run vagrant up --provision

- connect via ssh to 127.0.0.1:2122 vagrant/vagrant
- $ start_db
- $ bestSpot4me_build
- $ bestSpot4me_start

- $vagrant fsnotify

### Backend Serv

> Backend Serv is running on http://localhost:8081/
> REST API should be accessible on http://localhost:8081/api/
> Mongo Express is accessible via http://localhost:8081/mongo_express/

### WebApp Serv
> WebApp Serv is running on http://localhost:8080/
> HMR is enabled
