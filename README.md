<p align="center">
  <img src="public/images/node.svg" alt="Candle Logo" width="10%" />
</p>

<h1 align="center">Learn Node</h1>
<p align="center">Learn how Node.js makes backend development smooth, scalable, and fun.</p>

<p align="center">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES%20Modules-F7DF1E?logo=javascript&logoColor=yellow" />
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-v25.9-339933?logo=Node.js&logoColor=white"/>
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg" />
</p>

<br />

This project is a small Node.js backend exercise that demonstrates building a REST API, serving static files, handling form submissions, and streaming live updates with Server-Sent Events.

> This is a Scrimba project from the [_Learn Node_](https://scrimba.com/learn-nodejs-c00ho9qqh6/?via=u4534c90) course.

## Features

- **The Wild Horizons API** - Interactive API (includes GET and POST)
- **Read Stories** - See the latest stories
- **Upload Story** - Let you share your own story
- **Live News** - Get latest news in real-time
  <br />

## What to learn

- **Core concepts** of Node.js and its **asynchronous** nature
- **RESTful APIs**
- **Server-Sent Events (SSE)** for real-time, one-way data streaming from the server to the client
- **Event Emitters** for handling custom events and understand Node.js's event-driven architecture
- Input **sanitization**
- Managing **routing** to control the flow of requests

<br/>

## Project Structure

```text
learn-node/
├── server.js                 # Starts the HTTP server and handles routing
├── data/
│   ├── data.json             # Stores story and sighting data
│   └── stories.js            # Story-related data logic
├── events/
│   └── sightingEvents.js     # Event emitter for live updates
├── handlers/
│   └── routeHandlers.js      # API and page request handlers
├── utils/
│   ├── addNewSighting.js     # Adds new sightings to storage
│   ├── createAlert.js        # Creates alert messages
│   ├── getContentType.js     # Resolves content types
│   ├── getData.js            # Reads JSON data
│   ├── parseJSONBody.js      # Parses incoming JSON requests
│   ├── sanitizeInput.js      # Cleans user input
│   ├── sendResponse.js       # Sends HTTP responses
│   └── serveStatic.js        # Serves frontend static files
├── public/
│   ├── index.html            # Main page
│   ├── index.js              # Client-side logic
│   ├── index.css             # Styling
│   ├── news.html             # News page
│   ├── news.js               # News page logic
│   ├── sightings.html        # Sightings page
│   ├── upload-sighting.html  # Upload page
│   ├── upload-sighting.js    # Upload page logic
│   └── images/               # Static assets
├── package.json              # Dependencies and scripts
├── README.md                 # Project documentation
├── LICENSE                   # MIT license
└── .gitignore                # Git ignore rules
```

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
git clone https://github.com/<your-username>/learn-node.git
cd learn-node
npm install
```

## Available Scripts

| Script        | Description                                                      |
| ------------- | ---------------------------------------------------------------- |
| `npm start`   | Start the node server                                            |
| `npm run dev` | Start the node server for development using `nodemon` hot reload |

## License

This project is under [MIT](./LICENSE) license.
