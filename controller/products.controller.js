const mongoose = require("mongoose");

const Products = mongoose.model('Products')

const createProduct = async (req, res) => {
    const { nameProduct,imgProduct, description, price } = req.body
    const product = new Products({
        nameProduct,
        imgProduct,
        description,
        price
    })
    const respons = await product.save()
    console.log(respons)
    res.json({
        message: "product Saved",
        data: respons
    })
}

const listAllproducts = async (req, res) => {
    try {
        const respons = await Products.find();
        if (Products.lenght) {
            console.log(respons, Products.length)
            res.status(404)
            res.json({
                message: "empty collection"
            })
        }
        else {
            res.status(200)
            res.json({
                message: "showing all data",
                products: respons
            })
        }
    } catch (err) {
        console.error(err);
        res.status(400)
        res.json({
            message: "server error"
        })
    }
}

const readProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findById(id);
        if (!product) {
            res.status(404)
            res.json({
                message: `product not found with id ${id}`,
            })
        } else {
            res.status(200)
            res.json({
                message: `product`,
                data: product
            })
        }
    } catch (err) {
        console.error(err)
        res.status(400)
        res.json({
            message: `server error`
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const productdb = await Products.findById(id);
        const { productName, description, price } = req.body
        if (!productdb) {
            res.status(404)
            res.json({
                message: "product not found"
            })
        } else {
            const updatedProduct = await Products.findByIdAndUpdate(
                id,
                { productName, description,price },
                { new: true }
            );
            res.status(200)
            res.json({
                message: `Product update ${id}`,
                data: updatedProduct
            })
        }
    } catch (err) {
        console.log(err)
        res.status(400)
        res.json({
            message: "server error"
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const productdb = await Products.findById(id)
        console.log(id, productdb)
        if (!productdb) {
            res.status(404)
            res.json({
                message: "product not found"
            })
        } else {
            const respons = await products.findByIdAndDelete(id)
            res.status(200)
            res.json({
                message: "product deleted",
                data: respons
            })
        }
    } catch (err) {
        console.error(err)
        res.status(400)
        res.json({
            message: "server error"
        })
    }
}

module.exports = {
    createProduct,
    listAllproducts,
    readProduct,
    updateProduct,
    deleteProduct
}