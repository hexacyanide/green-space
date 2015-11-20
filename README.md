## Green Space

This repository contains code written for the MLH Local Hack Day, a hackathon
that took place on October 10th, 2015. The resulting application is incomplete.

Green Space is an application that incentivizes, tracks, and generates
activities which encourage conservation of resources, as well as other tasks
which are considered environmentally friendly.

### Dependencies

A recent version of Node.js, npm, and a MySQL database are required to run this
application.

### Installation

The application can be installed by cloning this repository. Software
dependencies must be installed before the application can run.

    git clone https://github.com/hexacyanide/green-space
    cd green-space
    npm install

A configuration file must also be created at `config/database.json` to specify
a database to be used. The file must be valid JSON and is passed directly to the
[node-mysql] driver. A basic configuration file is shown below, but other
[connection options](https://github.com/felixge/node-mysql#connection-options).
are also valid.

    {
        "host": "localhost",
        "user": "username",
        "password": "database_password"
        "database": "green-space"
    }

The database can be populated by running `npm run-script setup-db`, but a user
must be manually created. The application server can then be started with
`npm start`.

### Debugging

The application uses the powerful utility
[debug](https://github.com/visionmedia/debug) for logging and debugging. To view
debug output, set the `DEBUG` environment variable:

    DEBUG=green-space:* node index

If you are using Windows, you must use `set`.

    set DEBUG=green-space:* node index
