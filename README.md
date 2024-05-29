Cinema app

project config:

1. \# echo "127.0.0.1  db" >> /etc/hosts (add 127.0.0.1  db to /etc/hosts file)
2. from root folder run:
   $ docker compose up
3. from server folder run:
   $ npx prisma migrate dev (will ask migration name)
   $ npx prisma db seed
