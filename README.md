# Getting Started with GITHUB Repo List APP

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technology Stack
  - React : A JavaScript library for building user interfaces
  - [TailwindCSS](https://tailwindcss.com/)  - in this project the most of the components are free and from [https://tailwindcomponents.com/](https://tailwindcomponents.com/) web page
  - [Axios](https://github.com/axios/axios) : Promise based HTTP client for the browser and node.js
  - [GraphQL API](https://docs.github.com/en/graphql)

## Run the application on local
##### Prerequisites
- VS code editor
- Node version min v14.18.0
- NPM min v6.14.15

##### Steps
1. Clone repo into your pc from this [link](https://github.com/m3hm3tcan/github-repo-list.git)
2. Run `npm install` into project root folder
3. open `.env` file and update <b>REACT_APP_GITHUB_TOKEN</b> environment variable with your PAT (Personal Access Token) 
4. Go into root folder and run npm command npm run start`
5. Open `localhost:3000` and test the application need to redirect you into `home` page.

#### About PAT 
If you don't have a personall access token you can ceate one for testing application from your Github profile account setting.
  - Open Profile and click `Settings`
  
    ![image](https://user-images.githubusercontent.com/16703521/155218647-88010e21-741c-4082-93a6-614a297a7196.png)
  
  - Click `Developer Settings` from left side menu
  
    ![image](https://user-images.githubusercontent.com/16703521/155219081-4af35951-2cd4-4523-90c4-5cd97aad5da6.png)
 
  - Open `Personal access token` page  ![image](https://user-images.githubusercontent.com/16703521/155219334-5316a39b-435f-454b-96cf-0eff8e175897.png)
  - Click ![image](https://user-images.githubusercontent.com/16703521/155219444-7941477d-c2a1-4ed4-8151-b0aa3c2722a9.png) button and it will ask your password to be able to create your token
  - Provide unique name for your new token
  - Select Token Scope and save your token  : <i>To search users repository information and create the repo for your own from application you need minimum scope as below</i>
    
    ![image](https://user-images.githubusercontent.com/16703521/155220332-374c231d-d56c-4796-8a95-d88326bdccaa.png)

