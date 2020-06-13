

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
        quantity: 500,
        unit: "kilo"
    },
    {
        name: "milk",
        quantity: 500,
        type: "litre"
    }

];

//funcaion number 1 show the products//

function getproducts(products) {
    return (products);
}
//call the function//
getproducts(products);

//funcation number 2 add new product chocolate//

function addnewproduct(name, quantity, type) {
    products.push({ name: name, quantity: quantity, type: type });
    return (products);
}

addnewproduct("chocolate", 120, "bar");
addnewproduct("zabado", 120, "bottle");

//call the function//  
console.log(products);

//vaidation for the addnewproduct//
function addnewproduct(name, quantity, type) {
    if (name !=== "string") {
        throw new error(`${name} is not a string`);

        if (quantity !=== "numer") {
            throw new error(`${quantity} is not a number`);
        }
        if (type !=== "string") {
            throw new error(`${type} is not a string`);
        }
        return (addnewproduct);
    }

    // funcation number 3 update tomato quantity to 20//

    function updatenewquantity(productName, newQuantity) {
        const oldproducts = [...products];
        for (let i = 0; i <= oldproducts.length - 1; i++) {
            if (oldproducts[i].name === productname) {
                oldproducts[i].quantity = newquantity;
                return getproducts(oldproducts);
            }
        }

    }
    updatenewquantity("tomato", 20);
