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
We don't need to do npm everytime so we can use `[npx nodemon file.js]` 
this ('http) => import the build-in http module in node js which allow to create http server.

---

1. ### Packages :-
        it is the reusalable code  [npmjs website for packages]
        Ex:- a particular code must be common in all node js files so we don't need to write it again we use the node packages

2. ### Package.json / Package-lock.json :-
        (for developers) => tells us the incredients presnt in our code conatins all the detailed explanation of package.json
