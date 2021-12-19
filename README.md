# Database 
    The following installation and process is intended for Mac users. Kindly check the Windows commands equiavlent to Homebrew

## Install Homebrew
	/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
## Install PostgreSQL
	brew install postgres
## Install Docker
    Run Docker
        docker run -d -p 5432:5432 --name strapi-postgre -e POSTGRES_PASSWORD=<password> postgres
        > Note: password is set at POSTGRES_PASSWORD=password
        View list of containers in Docker
            docker ps -a
        Create new database
            docker exec -it strapi-postgre bash
            psql -U postgres
            CREATE DATABASE osidb
        Quit Postgres
            \q
        Checking the databse created 
            psql -h localhost -p 5432 -U postgres -W
        List databases
            \l

## Required installation for backend
	NodeJS >= 10.16 <=12
	NPM >= 6.x

## Create Backend 
	In the terminal, run 
    > npx create-strapi-app@latest osiris
	choose Custom(manual settings)
	Database name: osidb
	Host: 127.0.0.1
	Port: 5432
	username: postgre
	password:password
	Enable SSL connection:  No

	To run:
	npm run develop

    ** To protect the backend config and password, message me for the .env : gailebsarmiento@headstartsolutionsph.com
