# JSGameTools

A work-in-progress toolkit for JavaScript games.

## Compilation

You can compile yourself the JavaScript code if you made a change. To do this, you have to install Node.js and npm.

To install Node.js and npm for your OS, read this page: https://docs.npmjs.com/getting-started/installing-node

Git clone the repository and cd to the project directory (or download it directly from Github):
````
git clone https://github.com/Eliastik/JSGameTools.git
cd JSGameTools
````

Then run this command to install the dependencies:
````
npm install
````
Then to compile:

* Prod mode + dev mode (default): `npm run build-all`
* Dev mode (without minification): `npm run build-dev`
* Prod mode: `npm run build`

This will compile the JavaScript code into the sub-directory *lib*.

## Usage

See the *examples* folder.

## Compatibility

All recent browsers. IE11 is also supported.