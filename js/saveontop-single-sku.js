/* Save on Top SKU Code */
function generateCode() {
    const field1 = document.getElementById('field1').value;
    const field2 = document.getElementById('field2').value;
    const field3 = document.getElementById('field3').value;
    const field4 = document.getElementById('field4').value;
    const field5 = document.getElementById('field5').value;

    // Check if any field is empty
    if (!field1 || !field2 || !field3 || !field4 || !field5) {
alert('Please fill in all fields.');
return;
    }


    const code = `<div class="slick-item">\n<div id="productlisting_${field1}" class="product-list sale-badge">\n<div class="sku-img"><span><a href="${field2}"><img alt="${field3}" src="https://media.mercolamarket.com/assets/shopimages/18-${field4}-Catalog_Image-thumb.jpg" /></a></span>\n</div>\n<div id="dvVirtual${field5}">skuNamePrice</div>\n</div>\n</div>`;
    document.getElementById('output').textContent = code;
    
}

		function copyCode() {
    const output = document.getElementById('output');
    navigator.clipboard.writeText(output.textContent).then(() => {
alert('Code copied to clipboard!');
    }).catch(err => {
alert('Failed to copy code: ' + err);
    });
}

function resetFields() {

    document.getElementById('field1').value = '';
    document.getElementById('field2').value = '';
    document.getElementById('field3').value = '';
    document.getElementById('field4').value = '';
    document.getElementById('field5').value = '';
    document.getElementById('output').textContent = "";
    document.getElementById('includeField2').checked = false;
}
