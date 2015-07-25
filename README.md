# electron-angular2
Electron starter app with Angular 2

I had an idea in mind and decided that I will learn Electron and Angular2 in the process.

I did not want to clone an existing starter branch and start off from there, rather wanted t0 start from scratch. Here is all that I learnt and did.

* Set up a Github project. Add a readme and licence. Also add node to gitignore. Here’s mine: https://github.com/bsanth/electron-angular2.git
* Git clone the repo to your system.

    ```git clone https://github.com/bsanth/electron-angular2.git```
* Get Node Package Manager ready.

    ``` npm init```
    
    Here's how mine looks:
    
    ```
    name: (electron-angular2) 
    version: (1.0.0) 0.0.0
    description: Starter app for electron-angular2
    entry point: (index.js) app/index.js
    test command: electron .
    git repository: (https://github.com/bsanth/electron-angular2.git) 
    keywords: 
    author: Santhosh Kumar Bala Krishnan
    license: (ISC) MIT
    About to write to /Users/sbalakrishnan/repos/electron-angular2/package.json:
    
    {
      "name": "electron-angular2",
      "version": "0.0.0",
      "description": "Starter app for electron-angular2",
      "main": "app/index.js",
      "scripts": {
        "test": "electron ."
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/bsanth/electron-angular2.git"
      },
      "author": "Santhosh Kumar Bala Krishnan",
      "license": "MIT",
      "bugs": {
        "url": "https://github.com/bsanth/electron-angular2/issues"
      },
      "homepage": "https://github.com/bsanth/electron-angular2#readme"
    }
    ```
    
* Electron uses a js file as an entry point to the app. Let's create that next.

    ```
         mkdir app
         touch app/index.js
    ```
* I installed electron globally and added electron as a dependency to this project next.

    ```
    npm install electron-prebuilt -g
    npm install electron-prebuilt --save-dev
    ```
* Get JSPM next to manage front-end dependencies.

    ```
    npm install jspm -g
    npm install jspm --save-dev
    ```
* Init JSPM

    ```
    jspm init
    ```
* According to electron coding styles, we put all the views related to the app in a folder called browser. This would also contain the styles, scripts, etc. All front-end dependencies from JSPM would also go into this. Hence this is how my jspm init looks:

    ```
    Would you like jspm to prefix the jspm package.json properties under jspm? [yes]:
    Enter server baseURL (public folder path) [./]:./browser
    Enter jspm packages folder [browser/jspm_packages]:
    Enter config file path [browser/config.js]:
    Configuration file browser/config.js doesn't exist, create it? [yes]:
    Enter client baseURL (public folder URL) [/]:
    Which ES6 transpiler would you like to use, Traceur or Babel? [babel]:
    ```
* Let's create a base index file:

    ```
    touch browser/index.html
    ```
* Let's now write the entry point js file to electron. Go to index.js file and type out the following. This is directly taken from electron starter app. [https://github.com/atom/electron/blob/master/docs/tutorial/quick-start.md](https://github.com/atom/electron/blob/master/docs/tutorial/quick-start.md)

    Only change I made was the path to the index.html file. 

    ```
    var app = require('app');  // Module to control application life.
    var BrowserWindow = require('browser-window');  // Module to create native browser window.
    
    // Report crashes to our server.
    require('crash-reporter').start();
    
    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is GCed.
    var mainWindow = null;
    
    // Quit when all windows are closed.
    app.on('window-all-closed', function() {
      // On OS X it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      if (process.platform != 'darwin') {
        app.quit();
      }
    });
    
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    app.on('ready', function() {
      // Create the browser window.
      mainWindow = new BrowserWindow({width: 800, height: 600});
    
      // and load the index.html of the app.
      mainWindow.loadUrl('file://' + __dirname + '/../browser/index.html');
    
      // Open the devtools.
      mainWindow.openDevTools();
    
      // Emitted when the window is closed.
      mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
      });
    });
    ```
    
* Let's tell electron where to look for the entry point js file. Edit package.json and add the following line if not already added.

    ```
      "main": "app/index.js",
    ```
* Just to make sure I got the electron part working, I ran the following command to see if I can see my app running - after adding some content to index.html. HOORAY!

    ```
    electron .
    ```
* 