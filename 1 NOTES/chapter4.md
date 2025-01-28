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
pp.get('/get-users', (req,res) => {
    userModel.find(
        {username: 'aviansh'}
    ).then((users) =>{
        res.send(users)
    })
})
```