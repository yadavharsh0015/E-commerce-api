const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Sample in-memory database
let products = [];

// Endpoint to retrieve all products
app.get('/products', (req, res) => {
   res.send("hello name ");
    // res.json(products);
});

// Endpoint to create a new product
app.post('/products', (req, res) => {
    const { name, description, price, variants } = req.body;
    
    const newProduct = {
        id: products.length + 1,
        name,
        description,
        price,
        variants: variants || [],
    };

    products.push(newProduct);

    res.json(newProduct);
});

// Endpoint to retrieve a specific product by ID
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);

    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
});

// Endpoint to update a specific product by ID
app.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, description, price, variants } = req.body;

    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }

    const updatedProduct = {
        ...products[productIndex],
        name,
        description,
        price,
        variants: variants || [],
    };

    products[productIndex] = updatedProduct;

    res.json(updatedProduct);
});

// Endpoint to delete a specific product by ID
app.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);

    products = products.filter(p => p.id !== productId);

    res.json({ message: 'Product deleted successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
