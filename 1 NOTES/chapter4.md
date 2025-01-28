<table>
<thead>
<tr> 

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

</tr>

<tr>

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

</tr>
