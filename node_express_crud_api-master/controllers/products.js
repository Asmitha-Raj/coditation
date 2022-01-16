import { v4 as uuid } from 'uuid';
import fs from 'fs';

let products = [];

try {
    if (fs.existsSync('product-data.json')) {
        //file exists
        products = fs.readFileSync('product-data.json')
    }
} catch (err) {
    console.error(err)
}

export const getProducts = (req, res) => {
    console.log(`Products in the database: ${products}`);

    res.send(products);
}

export const createProduct = (req, res) => {   
    const product = req.body;

    products.push({...product, id: uuid()});
    
    fs.writeFileSync('product-data.json', produts);
    console.log(`Product [${product.username}] added to the database.`);
};

export const getProduct = (req, res) => {
    if(req.params.productID && products!==undefined && products.length!==undefined)
    {
        products.map(e=>{
            if(e.id===req.params.productID)
            {
                res.send(e)
            }
        })
    }
};

export const deleteProduct = (req, res) => { 
    console.log(`Product with id ${req.params.id} has been deleted`);
    
    fs.writeFileSync('product-data.json', produts);
    products = products.filter((product) => product.id !== req.params.id);
};

export const updateProduct =  (req,res) => {
    const product = products.find((product) => product.id === req.params.id);
    
    product.name = req.body.name;
    product.desc = req.body.desc;
    product.products = req.body.products;

    fs.writeFileSync('product-data.json', produts);
    console.log(`Product has been updated to ${req.body.name}.age has been updated to ${req.body.desc}`)
};