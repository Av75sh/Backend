# NPM vs NPX
## NPM (node package manager) 
used to install the code locally/globally then run in your system.
It is used to install, manage, handle depedencies for node js project.

``` Example 
npm install -g nodemon       -> Install the nodemon globally
nodemon app.js               -> runs the app with nodemon 
```


## Npx (node package executor)
It is a command line utility which runs the program without installing it

``` Example
npx nodemon app.js              -> runs nodemon directly without installing it
```

### HTTP
We don't need to do npm everytime so we use `[npx nodemon file.js]` 
this ('http) => import the build-in http module in node js which allow to create http server

---

1. ### Packages :-
        is the reusalable code  [npmjs website for packages]
        Ex:- a particular code must be common in all node js files so we don't need to write it again we use the node packages

2. ### Package.json / Package-lock.json :-
        (for developers) => tells us the incredients presnt in our code conatins all the detailed explanation of package.json


## V8 Vs Node Vs Express:
1. `V8` is a JavaScript engine that executes JavaScript code, while Node.js is a runtime environment built around V8 to run JavaScript outside the browser.

2. `Node.js` provides the environment and tools to run JavaScript on the server side, but it doesn’t provide specific tools for building web servers or managing HTTP requests. That's where Express comes in.

        Build on top of V8 engine

3. `Express` is a framework built on top of Node.js that provides additional functionality for creating web servers and APIs more easily.
        
        Express is a web application framework built on top of Node.js. 

        
        
[Next Page](chapter2.md)
