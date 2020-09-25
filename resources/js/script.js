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
