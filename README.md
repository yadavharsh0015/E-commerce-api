# E-commerce-api

mkdir ecommerce-api
cd ecommerce-api

Initialize a new Node.js project:
   npm init -y

Install the required dependencies:
   npm install express body-parser

Start your Node.js application:
   node index.js

Create a Product:

POST http://localhost:3000/products
Content-Type: application/json

{
    "name": "Laptop",
    "description": "Powerful laptop with high performance",
    "price": 1000,
    "variants": [
        {
            "name": "Color",
            "sku": "ABC123",
            "additional_cost": 50,
            "stock_count": 10
        },
        {
            "name": "Memory",
            "sku": "XYZ789",
            "additional_cost": 100,
            "stock_count": 5
        }
    ]
}
Retrieve all Products:


GET http://localhost:3000/products
Retrieve a specific Product by ID:


GET http://localhost:3000/products/1
Update a Product:


PUT http://localhost:3000/products/1
Content-Type: application/json

{
    "name": "Updated Laptop",
    "description": "Updated description",
    "price": 1200,
    "variants": [
        {
            "name": "Color",
            "sku": "ABC123",
            "additional_cost": 50,
            "stock_count": 10
        }
    ]
}
Delete a Product:


DELETE http://localhost:3000/products/1



User
Search functionality

    - An endpoint that allows searching products by product name, description, or variant name.


Update index.js



Install Dependencies

npm install --save-dev jest supertest

npm test






