/* Category */
function sot_category_generateCode() {
    const sot_category_field1 = document.getElementById('sot_category_field1').value;
    const sot_category_field2 = document.getElementById('sot_category_field2').value;
    const sot_category_field3 = document.getElementById('sot_category_field3').value;
    const sot_category_field4 = document.getElementById('sot_category_field4').value;
    // Check if any field is empty
    if (!sot_category_field1 || !sot_category_field2 || !sot_category_field3 || !sot_category_field4) {
alert('Please fill in all fields.');
return;
    }


    const sot_category_code = `<div class="slick-item">\n<div class="product-list sale-badge">\n<div class="sku-img">\n<span><a href="${sot_category_field1}">\n<img alt="${sot_category_field2}" src="https://media.mercolamarket.com/assets/shopimages/18-${sot_category_field4}-Catalog_Image-thumb.jpg" /></a></span>\n</div>\n<div class="sku-nameprice"> <h3 class="prodname"><a href="${sot_category_field1}" title="${sot_category_field2}" tabindex="0"><span id="alternatename">${sot_category_field3}</span></a></h3></div>\n</div>\n</div>\n`;
    document.getElementById('sot_category_output').textContent = sot_category_code;
    
}

		function sot_category_copyCode() {
    const sot_category_output = document.getElementById('sot_category_output');
    navigator.clipboard.writeText(sot_category_output.textContent).then(() => {
alert('Code copied to clipboard!');
    }).catch(err => {
alert('Failed to copy code: ' + err);
    });
}

function sot_category_resetFields() {
    document.getElementById('sot_category_field1').value = '';
    document.getElementById('sot_category_field2').value = '';
    document.getElementById('sot_category_field3').value = '';
    document.getElementById('sot_category_field4').value = '';
    document.getElementById('sot_category_output').textContent = "";
}
