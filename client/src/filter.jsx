import React, { useState, useEffect } from 'react';
const items = require('./data/products.json');



const Products = () => {
     
    const [products, setProducts] = useState(items)
    const [category, setCategory] = useState("all")
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(1100)
    //e = event for the value when select changes
    const handleFilterChange = (e, filterType) => {
        switch (filterType) {
            case "category":
                setCategory(e.target.value)
                break;
            case "min":
                setMin(e.target.value)
                break;
            case "max":
                setMax(e.target.value)
                break;
        }
    }

    useEffect(() => {
        let filteredProducts = items;

        if (category !== "all") {
            filteredProducts = filteredProducts.filter(product => product.category === category)
        }
        if (min !== "") {
            filteredProducts = filteredProducts.filter(product => product.price > min)
        }
        if (max !== "") {
            if (max === "") {
                return setProducts(items)
            };
            filteredProducts = filteredProducts.filter(product => product.price < max)
        }
        setProducts(filteredProducts)
    }, [category, min, max]);
    
    export default Products;