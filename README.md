# Tweeter mobile application

> ionic and angular based application

## Getting started

### Getting started with your environment

To get stater with any project, you need the right resource. All our application stack rely on NodeJs. NodeJs help to create application in Javascript for client side application (web site...) or even server side logic (API, backend, database, login...).
To get started, need to install the latest recommended version of [Node Js](https://nodejs.org/en/)

Now that you have an environment, you need an IDE to get started. Because we love Javascript, we will use one of the 2 IDE made in Javascript!! (Will get back to that later):
- [Atom](https://atom.io): A free open source editor made by Github.
- [visual studio code](https://code.visualstudio.com/): Made by Microsoft, a multi platform light way editor.

Since we will make some call to tweeter API from our local environment, please install a [google plugin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en) that will help the development of our application. (CORS issue...)

### Getting started with the project

You can clone the project (make a local copy on your laptop) by:
- Using the github application: from the `clone and download` button, select `open in desktop`. this will install github application if not available on your machine.
- Download the zip file: from the `clone and download` button, select`download zip` button, then unzip it from your machine.
- Use command line: use `git clone <url_of_the_ripo>.git`. This will create a new folder from the current folder with the project name.


### Installing NodeJs dependencies

From now on, most of what we will do will done through the command line. Being an important tool for any developer, it's important to get familiar with it.
some command line that can be handy:
- `cd ./<path>` : to navigate to the path regarding to the current location
- `cd ..`: to navigate back from your current directory
- `pwd` : your location in the OS
- `dir` : to list all file and directory in your current location

Once the command line is open, you can navigate to your local copy of the project then run:

```bash
$ npm install -g ionic Cordova
```

Then run:

```bash
$ ionic start
```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page and the [Ionic CLI](https://github.com/driftyco/ionic-cli) repo.


## Make a tweeter application

1- Create a tweeter application : https://apps.twitter.com/
2- get your app keys
3- add plugin on



## Build and play with your own application

1- create an account on [apps.ionic.io](https://apps.ionic.io/apps/).
2- create a new app and save it in `ionic.config.json` file in the `app_id` parameter.
3- run `ionic io init` in your console at the root of your project folder.
4- to create android build, run `ionic package build android`.
5- download the `.apk` file from ionic.io dashboard page.
6- Just connect your smartphone to computer via USB cable and select “Media device” when prompted. Then, open your phone's folder on your PC and copy the APK file you want to install. Simply tap the APK file on your handset to facilitate installation. You can also install APK files from your phone's.



## Issues
Issues have been disabled on this repo, if you do find an issue or have a question consider posting it on the [Ionic Forum](http://forum.ionicframework.com/).  Or else if there is truly an error, follow our guidelines for [submitting an issue](http://ionicframework.com/submit-issue/) to the main Ionic repository.
