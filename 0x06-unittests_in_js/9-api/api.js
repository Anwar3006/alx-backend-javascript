const express = require('express')
const app = express()
const PORT = process.env.PORT || 7865


app.get('/', (req, res) => {
    res.send('Welcome to the payment system')
})

app.get('/cart/:id([0-9]+)', (req, res) => {
    const id = parseInt(req.params.id)
    if (id === NaN) {
        res.status(404)
    }
    res.status(200).send(`Payment method for cart: ${id}`)
})


app.listen(PORT, () => {
    try{
        console.log(`API available on localhost port ${PORT}`);
    } catch(err) {
        console.log(err);
    }
})