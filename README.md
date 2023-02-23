# E-Commerce Platform
E-Commerce platform created using an Express.js API and Sequelize.

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)   ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)   ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)   ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)   ![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)   ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)



[![MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)

----------------------------------------------------------------

[About](#about)  ✦  [Prerequisites](#prerequisites)  ✦  [Usage](#usage)  ✦  [Live Demo](#live-demo)  ✦  [Resources](#resources)  ✦  [License](#license)  ✦  [Contact](#contact)


----------------------------------------------------------------

## About
Using starter code, this project focused on creating a backend for an e-commerce site. This project uses Express.js and Sequilize to interact with the MySQL database. 

## Prerequisites
This program opporates from your command line interface(CLI) and Insomnia. Ensure you have access to both before working with this app. 

First navigate to the application directory. Then run the following commands:

```bash
npm install
```
Ensure that you have also added the database. This can be done within MySQL. Please follow the instructions below. Ensure you are in the root folder of the application.

```bash
mysql -u root -p

<ENTER YOUR PASSWORD>

SOURCE db/schema.sql

SOURCE db/seeds.sql

EXIT
```

The final step before inizializing the app is to seed the data. Staying in the root folder of the application follow the steps below:

```bash
node seeds/index.js
```


## Usage
Once fully installed and seeded, this program is invoked with either of the following commands:
```bash
node server.js
```

```bash
npm start
```

Once the CLI responds with:

```bash
App listening on port 3001!
```

Move to Insmonia to run the HTTP protocols. 


## Live Demo
To see this app in opperation, watch our live demo!

[![Youtube screen grab of live demo recording.](./public/img/Screen%20Shot%202023-02-23%20at%2016.42.22.png)](https://youtu.be/lyi_Sikc5P8)


## License
This project is using the following license:

**MIT**

For further information regarding the license, please follow the link below:
 https://opensource.org/licenses/MIT

----------------------------------------------------------------

## Contact 
If you have any further questions, please contact via email or github.

<a href="mailto:caoimhejyoti@gmail.com"><img alt="Link to email contact address" src="https://img.shields.io/badge/email-D14836?style=for-the-badge" target="_blank" /></a>  <a href="https://github.com/caoimhejyoti"><img alt="badge for GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" target="_blank" /></a>