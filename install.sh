#!/bin/bash


## installing node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

. ~/.nvm/nvm.sh

nvm install node


## installing git
sudo apt update

sudo apt install git


## installing mongodb
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

sudo apt update

sudo apt install -y mongodb-org

## starting mongodb
sudo systemctl start mongod

sudo systemctl enable mongod
