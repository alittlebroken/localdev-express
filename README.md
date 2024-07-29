# NodeJS & Express local dev containers
A simple local development server utilising docker for building express apps with nodeJS to use in Windows 11.

The docker images use the ocal folder the comcker-compose command 
is used from to persist the app code you develop.

## Tech stack

### Prerequisite
- Windows 11
- Docker Desktop

### Production
- nodeJS
- express
- pg
- cors
- body-parser

### Development
- nodemon
- supertest
- jest

## Installation

### NOTES
- Docker will give the parent name the same as the folder that the docker-compose comman was issued from
- The actual images will be named based on the service names you set in the docker compose yaml file

### Setup

- Clone the github repo
```cmd
git clone https://github.com/alittlebroken/localdev_nodeexpress.git
```

- Update project folder name
```cmd
ren localdev_nodeexpress <project_name>
cd <project_name>
```

- Edit the docker-compose.dev.yaml file and set the service names to your desired names
- Add any environment vars or other options like mounted volumes that you require

- Build and start the docker image
```cmd
docker-compose -f docker-compose.dev.yaml up --build -d
```

- Attach to an running container
```cmd
docker-compose -f docker-compose.dev.yaml exec <service name> bash
```

- Launch vscode
```cmd
code .
```