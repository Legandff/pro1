function selectColor(productId) {
    var productElement = document.getElementById(productId);
    var colorOptions = productElement.getElementsByClassName('color-option');
    var descriptionElement = document.getElementById('description' + productId.charAt(productId.length - 1));

    for (var i = 0; i < colorOptions.length; i++) {
        colorOptions[i].style.border = '2px solid #aaa';
    }

    event.target.style.border = '2px solid #333';
    descriptionElement.innerHTML = getDescription(productId, event.target.style.backgroundColor);
}

function getDescription(productId, color) {
    // Add logic to fetch the description based on the product and color
    // For simplicity, using a hardcoded description in this example
    return 'Description for ' + productId + ' in color ' + color;
}
