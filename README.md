# MyReads Project

The project is called Would You Rather. This is a practise project for Redux from React Project from Udacity Nanodegrees. In the "Would You Rather?" Project, We build a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”.
In the app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

## Start of the application

To get started simply run the following commands:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Code base
```bash
├── README.md - This file.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon
│   └── index.html #Central html file which is the anchor for the React app
└── src
    ├── containers
    │   └── Dashboard
    |       ├── Dashboard.js
    │       └── Dashboard.module.css
    │   ├── LeaderBoard
    |       ├── LeaderBoard.js
    |       ├── LeaderBoard.module.css
    │       └── InfoCard
    │           ├── InfoCard.js
    │           └── InfoCard..module.css
    │       
    │   ├── NewQuestion
    |       ├── NewQuestion.js
    │       └── NewQuestion.module.css
    │   ├── Card
    |       ├── Card.js
    │       └── Card.module.css
    │   ├── Questions
    |       ├── Questions.js
    │       └── Questions.module.css
    │   ├── QuestionView
    |       ├── QuestionView.js
    │       └── QuestionView.module.css
    │   └── Error
    |       ├── Error.js
    │       └── Error.module.css
    │
    │
    ├── actions # Holding all action files. 
    │   ├── authedUser.js # actioncreators for login / logout actions
    │   ├── shared.js # actions related to both parts of the state ( questions, users )
    │   ├── user.js # actions related to the users - part of the state
    │   └── questions.js # actions related to the questions - part of the state
    │
    │
    ├── reducers # Holding reducers fiels. 
    │   ├── authedUsers.js # reducer for login / logout handling
    │   ├── index.js  # sums up all reducers included as a central hub to be included
    │   ├── questions.js # reducers related to the questions - part of the state
    │   └── users.js # reducers related to the users - part of the state
    │
    │
    ├── constants 
    │   └── actionTypes.js # Holding all constants for project. 
    │
    │
    ├── store # Holding store file. 
    │   └── index.js
    │
    │
    ├── utils # Holding backend files. 
    │   └── _DATA.js_  # Datastructure given by Udacity
    │
    │
    ├── assests
    │   └── images  # Holding all project images
    │
    │
    ├── icons # Images for the app. 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    │
    │
    ├── App.js # This is the root of the app.
    ├── index.css # Global styles. 
    └── index.js # used for DOM rendering 
```
