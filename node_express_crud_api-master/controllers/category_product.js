import fs from 'fs';

let products = [];
let categories = [];

try {
    if (fs.existsSync('product-data.json')) {
        //file exists
        products = fs.readFileSync('product-data.json')
    }
} catch (err) {
    console.error(err)
}

try {
    if (fs.existsSync('category-data.json')) {
        //file exists
        categories = fs.readFileSync('category-data.json')
    }
} catch (err) {
    console.error(err)
}


export const getProductCategory = async (req, res) => {
    if (req.params.productID && products !== undefined && products.length !== undefined) {
        let response = [];
        await products.map(e => {
            if (e.id === req.params.productID) {
                if (e.categories.length !== undefined) {
                    if (e.categories.length > 0) {
                        e.categories.map(categoryID => {
                            response = [...response, ...getCategoryCategory(categoryID)];
                        })
                    }
                }
            }
        })
        res.send(response);
    }
};

const getCategoryCategory = async (categoryID) => {
    let result = [];
    await categories.map(async categoryData => {
        if (categoryID === categoryData.id) {
            result.push(categoryData);
            await categoryData.sub_categories.map(categorySubID => {
                result = [...result, ...getCategoryCategory(categorySubID)];
            })
        }
    });
    return result;
}

const getProductsForCategory = (categoryID) =>{
    let result = [];
    products.map(e=>{
        if(e.categories.includes(categoryID))
        {
            result.push(e);
        }
    })
    return result;
} 

export const getCategoryProduct = async (req, res) => {
    if (req.params.categoryID && categories !== undefined && categories.length !== undefined) {
        let response = [];
        await categories.map(e => {
            if (e.id === req.params.categoryID) {
                response = [...response, ...getProductsForCategory(e.id)]
                if (e.sub_categories.length !== undefined) {
                    if (e.sub_categories.length > 0) {
                        e.sub_categories.map(categoryID => {
                            response = [...response, ...getProductsForCategory(categoryID)]
                        })
                    }
                }
            }
        })
        res.send(response)
    }
};