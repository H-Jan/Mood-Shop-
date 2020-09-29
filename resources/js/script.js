import data from './data.js'

const itemsContainer = document.getElementById('items')

// the length of our data determines how many times this loop goes around
for (let i = 0; i < data.length; ++i) {
    // create a new div element and give it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    //create an image element
    let img = document.createElement('img');
    //This should allow change each time we go through the loop. No, I cannot explain why right away
    img.src = data[i].image
    img.width = 300
    img.height = 300

    //Add the image to the div
    newDiv.appendChild(img)
    // put the new div inside items container
    itemsContainer.appendChild(newDiv)
    console.log(img)

    // create a paragraph element for a description
    let desc = document.createElement('P')
    // give the paragraph text from the data
    desc.innerText = data[i].desc
    // append the paragraph to the div
    newDiv.appendChild(desc)
    // do the same thing for price
    let price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)

    let button = document.createElement('button')
    button.id = data[i].name

    // creates a custom attribute called data-price.
    // That will hold the price for each element in the button
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)
    // put new div inside items container
    itemsContainer.appendChild(newDiv)

}

const itemList = document.getElementById('item-list')
console.log(itemList)

const cartQty = document.getElementById('cart-qty')
console.log(cartQty)

const cartTotal = document.getElementById('cart-total')
console.log(cartTotal)


itemList.innerHTML = '<li> Hello World </li>'

const cart = []
// -----------------------------------------
// ADD ITEMS
function addItems(name, price) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            cart[i].qty += 1
            // So this for loop needs to keep running, but needs to stop for below function
            return
            //return ends the for loop and function itself, stopping the below code for const.push(item)
        }
    }
    const item = { name, price, qty: 1 }
    cart.push(item)


}
// -------------------------------------------
// SHOW ITEMS 
function showItems() {

    const qty = gettingQty()
    cartQty.innerHTML = `You have ${gettingQty()} items in your cart`

    let itemStr = ' '
    for (let i = 0; i < cart.length; i += 1) {
        // console.log(`${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
        // { name: 'Apple', price: 0.99, qty: 3}
        const { name, price, qty } = cart[i]

        itemStr += `<li> ${name} $${price} x ${qty} = ${qty * price} </li>`

    }
    itemList.innerHTML = itemStr

    cartTotal.innerHTML = `Total in cart: $${gettingTotal()}`




}
const all_items_button = Array.from(document.querySelectorAll('button'))
console.log(all_items_button)
all_items_button.forEach(elt => elt.addEventListener('click', () => {
    addItems(elt.getAttribute('id'), elt.getAttribute('data-price'))
    showItems()
}))


function gettingQty() {
    //Did not know how to demonstrate quantity on own
    let qty = 0
    for (let i = 0; i < cart.length; i += 1) {
        qty += cart[i].qty
    }
    return qty
}
// scope is a term to define where a value is visible.
// Quantity is only visible in the above function block
// the return qty allows the function to run above by calling the function

//----------------------------------
// gettingTotal 
function gettingTotal() {
    let totalPrice = 0
    for (let i = 0; i < cart.length; i += 1) {
        totalPrice += cart[i].price * cart[i].qty
        // As it is going down the cart.length, it will add the price times the quantity to the total price
        //until it reaches the bottom
    }

    return totalPrice.toFixed(3)
    // toFixed rounds off the number of decimal places 
    // toFixed returns a string, so should be last step as a 'display' for math

}
//-------------------------------------
// REMOVE ITEM 
function removeItems(name, qty = 0) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            if (qty > 0) {
                cart[i].qty -= qty
            }

            if (cart[i].qty < 1 || qty === 0) {
                cart.splice(i, 1)
            }

            return
        }
    }


}

