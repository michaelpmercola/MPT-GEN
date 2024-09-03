/* Surplus / Overstock SKU Code */
function surplus_os_single_generateCode() {
    const surplus_os_single_field1 = document.getElementById('surplus_os_single_field1').value;
    const surplus_os_single_field2 = document.getElementById('surplus_os_single_field2').value;
    const surplus_os_single_field3 = document.getElementById('surplus_os_single_field3').value;
    const surplus_os_single_field4 = document.getElementById('surplus_os_single_field4').value;
    const surplus_os_single_field5 = document.getElementById('surplus_os_single_field5').value;    
    // Check if any field is empty
    if (!surplus_os_single_field1 || !surplus_os_single_field2 || !surplus_os_single_field3 || !surplus_os_single_field4 || !surplus_os_single_field5) {
alert('Please fill in all fields.');
return;
    }


    const surplus_os_single_code = `<div class="col-md-2 col-xs-6">\n<div id="productlisting_${surplus_os_single_field1}" class="surplus-list">\n<div class="sku-img"><span><a href="${surplus_os_single_field2}">\n<img alt="${surplus_os_single_field3}" src="https://media.mercolamarket.com/assets/shopimages/18-${surplus_os_single_field4}-Catalog_Image-thumb.jpg" /></a></span></div>\n<div id="dvVirtual${surplus_os_single_field5}">skuNamePrice</div>\n</div>\n</div>`;
    document.getElementById('surplus_os_single_output').textContent = surplus_os_single_code;
    
}

        function surplus_os_single_copyCode() {
    const surplus_os_single_output = document.getElementById('surplus_os_single_output');
    navigator.clipboard.writeText(surplus_os_single_output.textContent).then(() => {
alert('Code copied to clipboard!');
    }).catch(err => {
alert('Failed to copy code: ' + err);
    });
}

function surplus_os_single_resetFields() {
    document.getElementById('surplus_os_single_field1').value = '';
    document.getElementById('surplus_os_single_field2').value = '';
    document.getElementById('surplus_os_single_field3').value = '';
    document.getElementById('surplus_os_single_field4').value = '';
    document.getElementById('surplus_os_single_field5').value = '';
    document.getElementById('surplus_os_single_output').textContent = "";
}
