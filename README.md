CleanStarterVite

Personal React + Express starter template.

Create a new project
git clone https://github.com/kaellji2/CleanStarterVite.git "name of the new project folder" or use the . if the folder is already created, this will paste the subfolders into the created folder.
Install dependencies
cd client
npm install

cd ../server
npm install
Environment variables

Create:

server/.env

based on:

server/.env.example
Important

After cloning, check:

git remote -v

The project will still be connected to:

CleanStarterVite

Create a new GitHub repository for the project and update the remote:

git remote set-url origin NEW_REPOSITORY_URL

Verify:

git remote -v

Then push:

git push -u origin main
