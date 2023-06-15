const express = require('express')
const app = express()
const PORT = process.env.PORT || 7865

app.use(express.json())
app.use(express.urlencoded({extended: true}))

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

app.get('/available_payments', (_, res) => {
    res.status(200).json({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
    })
})

app.post('/login', (req, res) => {
    const { userName } = req.body
    res.status(201).send(`Welcome ${userName}`)
})

app.listen(PORT, () => {
    try{
        console.log(`API available on localhost port ${PORT}`);
    } catch(err) {
        console.log(err);
    }
})