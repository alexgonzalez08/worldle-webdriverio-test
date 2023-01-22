# worldle-webdriverio-test
Test for wordle using webdriver io

---

## Requirements

You will need a modern web browser, NodeJS, and NPM to run this project.

### Node

- #### Node installation on Windows

   Go to the [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

```bash
  $ sudo apt install nodejs
  $ sudo apt install npm
```

- #### Other Operating Systems
  
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command. Depending on when you install node your version may vary.

```bash
  $ node --version
  v18.1.0

  $ npm --version
  8.8.0
```

If you need to update `npm`, you can do so using `npm` run the following command then relaunch your command line editor.

```bash
  $ npm install npm -g
```

---

## Install

```bash
  $ git clone https://github.com/alexgonzalez08/worldle-webdriverio-test
  $ cd worldle-webdriverio-test
  $ npm install
```

## Running the project

```bash
  $ cd worldle-webdriverio-test
  $ npx wdio run ./wdio.conf.js
```