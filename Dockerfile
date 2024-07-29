FROM node:latest
RUN apt-get update && apt-get install -y nano vim
WORKDIR /code