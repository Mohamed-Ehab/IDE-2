

const products = [
    {
        name: "pepsi",
        quantity: 100,
        type: "unit"
    },
    {
        name: "tomato",
        quantity: 50,
        type: "kilo"
    },

    {
        name: "fruits",
        quantity: 150,
        unit: "kilo"
    },
    {
        name: "milk",
        quantity: 500,
        type: "litre"
    }

];


function getProducts(products) {
    // const productsList = [...products]
    console.log(products);
}

getProducts(products);


function addNewProduct(name, quantity, type) {
    products.push({ name, quantity, type });
    validation();
    getProducts(products)

}
addNewProduct("chocolate", 120, "bar");
addNewProduct("zabado", 120, "bottle");

function validation(name, quantity, type) {

    for (i = 0; i < products.length; i++) {


        if (typeof products[i].name !== "string") {
            throw new Error(products[i].name + ` is not a string`);
        }

        else if (typeof products[i].quantity !== "number") {
            throw new Error(products[i].quantity + ` is not a number`);
        }
        else if (typeof products[i].type !== "string") {
            throw new Error(products[i].type + `  is not a string`);
        }
    }
}

function updateNewQuantity(productName, newQuantity) {
    const oldProducts = [...products];

    for (let i = 0; i < oldProducts.length; i++) {
        if (oldProducts[i].name == productName) { oldProducts[i].quantity = newQuantity }
        getProducts()
    }
    validation();
}
updateNewQuantity("tomato", 20)