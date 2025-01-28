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
