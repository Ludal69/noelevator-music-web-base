**Start from scratch :** 

* Remove old containers (WARNING only if you want)

  * docker-compose down -v
  * docker system prune

* build 

  * docker-compose up --build –watch

* if you need to make a new migration : 

  * cd backend
  * npx prisma generate
  * pnpx knex migrate:make init-db

* if not :

  * cd backend
  * npm run docker:db:migrate
  * npm run rebuild:be
  * npm run docker:seed:dev

* start : 

  * docker-compose up –watch
