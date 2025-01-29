<table> <thead> <tr> 
No user data Shown Vs user data
<td>

```js
 
app.post('/post-form-data', async (req, res) => {            
    const {username, email, password} = req.body
    await userModel.create({
        username: username,
        email: email,
        password: password
    })
    res.send('Register user');
})

```
</td><td>

```js
 
app.post('/post-form-data', async (req, res) => {            
    const {username, email, password} = req.body
    const newUser = await userModel.create({
        username: username,
        email: email,
        password: password
    })
    res.send(newUser);
})

```
</td> </tr> <thead></table>


## Async Code
WHile we were wroking on the above code our **res.send** code was being executed before user details.
So to correct it we use asynchromous coding `aysnc & await`


## CRUD Operation
1. C -> Create
2. R -> Read
3. U -> Update
4. D -> Delete

## Read operation
```js
pp.get('/read-users', (req,res) => {
    userModel.find(
        {username: 'aviansh'}
    ).then((users) =>{
        res.send(users)
    })
})
```


## Update operation
``` js
app.get('/update-users', async (req,res) =>{
    await userModel.findOneAndUpdate(
        {username: 'aviansh'},
        {email: 'sag02gh@gmail.com'})
        res.send("Updated user details")
})

```

## Delete operation
``` js
app.get('/delete-users', async (req,res) =>{
    await userModel.findOneAndDelete(
        {username: 'avinash'},
        {email: 'sag02gh@gmail.com'})
        res.send("Deleted user details")
})

```

## res.send  Vs res.render
res.send() => Need for plain text, JSON or other raw data
res.render() => Used to render an HtML page (EJS)

[Next Page](chapter5.md)