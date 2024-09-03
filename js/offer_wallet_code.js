// script.js
document.addEventListener('DOMContentLoaded', () => {
    const showTextFieldRadio = document.getElementById('offer_wallet_lang3');
    const hideTextFieldRadio1 = document.getElementById('offer_wallet_lang1');
    const hideTextFieldRadio2 = document.getElementById('offer_wallet_lang2');
    const textFieldContainer = document.getElementById('es-banner');

    // Function to toggle the visibility of the text field container
    function toggleTextField() {
        if (showTextFieldRadio.checked) {
            textFieldContainer.style.display = 'block';
        } else {
            textFieldContainer.style.display = 'none';
        }
    }

    // Add event listeners to radio buttons
    showTextFieldRadio.addEventListener('change', toggleTextField);
    hideTextFieldRadio1.addEventListener('change', toggleTextField);
    hideTextFieldRadio2.addEventListener('change', toggleTextField);
});


/* Save on Top SKU Code */
function offer_wallet_generateCode() {
    const offer_wallet_field1 = document.getElementById('offer_wallet_field1').value;
    const offer_wallet_field2 = document.getElementById('offer_wallet_field2').value;
    const offer_wallet_field3 = document.getElementById('offer_wallet_field3').value;
    const offer_wallet_field4 = document.getElementById('offer_wallet_field4').value;
    const offer_wallet_field5 = document.getElementById('offer_wallet_field5').value;
    const offer_wallet_field6 = document.getElementById('offer_wallet_field6').value;    
    const offer_wallet_lang1 = document.getElementById('offer_wallet_lang1').checked;
    const offer_wallet_lang2 = document.getElementById('offer_wallet_lang2').checked;
    const offer_wallet_lang3 = document.getElementById('offer_wallet_lang3').checked;

    // Check if any field is empty
    if (!offer_wallet_field1 || !offer_wallet_field2 || !offer_wallet_field3 || !offer_wallet_field4 || !offer_wallet_field5) {
alert('Please fill in all fields.');
return;
    }
    
    const oldSegment = '/1/';
    const newSegment = '/3/';

    // Replace the old segment with the new segment
    const updatedUrl = offer_wallet_field2.replace(oldSegment, newSegment);

if (offer_wallet_lang2) {

    const offer_wallet_code = `<!-- English Wallet -->\n<li><a onclick="s_objectID='Popup Offer - ${offer_wallet_field1}';" href="${offer_wallet_field2}?cid_source=banner&amp;cid_medium=int&amp;cid=${offer_wallet_field3}&amp;cid_content=shopwallet_popup&amp;cid_term=slot${offer_wallet_field1}"><img alt="${offer_wallet_field4}" src="${offer_wallet_field5}" /></a></li>\n\n<li class="item"><a onclick="s_objectID='Popup Offer - ${offer_wallet_field1}';" href="${offer_wallet_field2}?cid_source=banner&amp;cid_medium=int&amp;cid=${offer_wallet_field3}&amp;cid_content=shopwallet_popup&amp;cid_term=slot${offer_wallet_field1}"><img alt="${offer_wallet_field4}" src="${offer_wallet_field5}" /></a></li>\n\n<!-- Spanish Wallet -->\n<li><a onclick="s_objectID='Popup Offer - ${offer_wallet_field1}';" href="${updatedUrl}?cid_source=banner&amp;cid_medium=int&amp;cid=${offer_wallet_field3}&amp;cid_content=esshopwallet_popup&amp;cid_term=slot${offer_wallet_field1}&amp;langId=es"><img alt="${offer_wallet_field4}" src="${offer_wallet_field5}" /></a></li>\n\n<li class="item"><a onclick="s_objectID='Popup Offer - ${offer_wallet_field1}';" href="${updatedUrl}?cid_source=banner&amp;cid_medium=int&amp;cid=${offer_wallet_field3}&amp;cid_content=esshopwallet_popup&amp;cid_term=slot${offer_wallet_field1}&amp;langId=es"><img alt="${offer_wallet_field4}" src="${offer_wallet_field5}" /></a></li>`;
    document.getElementById('offer_wallet_output').textContent = offer_wallet_code;
}else if(offer_wallet_lang3){

    if (!offer_wallet_field6) {
    alert('Please add ES Banner');
    return;
    }

    const offer_wallet_code = `<!-- English Wallet -->\n<li><a onclick="s_objectID='Popup Offer - ${offer_wallet_field1}';" href="${offer_wallet_field2}?cid_source=banner&amp;cid_medium=int&amp;cid=${offer_wallet_field3}&amp;cid_content=shopwallet_popup&amp;cid_term=slot${offer_wallet_field1}"><img alt="${offer_wallet_field4}" src="${offer_wallet_field5}" /></a></li>\n\n<li class="item"><a onclick="s_objectID='Popup Offer - ${offer_wallet_field1}';" href="${offer_wallet_field2}?cid_source=banner&amp;cid_medium=int&amp;cid=${offer_wallet_field3}&amp;cid_content=shopwallet_popup&amp;cid_term=slot${offer_wallet_field1}"><img alt="${offer_wallet_field4}" src="${offer_wallet_field5}" /></a></li>\n\n<!-- Spanish Wallet -->\n<li><a onclick="s_objectID='Popup Offer - ${offer_wallet_field1}';" href="${updatedUrl}?cid_source=banner&amp;cid_medium=int&amp;cid=${offer_wallet_field3}&amp;cid_content=esshopwallet_popup&amp;cid_term=slot${offer_wallet_field1}&amp;langId=es"><img alt="${offer_wallet_field4}" src="${offer_wallet_field6}" /></a></li>\n\n<li class="item"><a onclick="s_objectID='Popup Offer - ${offer_wallet_field1}';" href="${updatedUrl}?cid_source=banner&amp;cid_medium=int&amp;cid=${offer_wallet_field3}&amp;cid_content=esshopwallet_popup&amp;cid_term=slot${offer_wallet_field1}&amp;langId=es"><img alt="${offer_wallet_field4}" src="${offer_wallet_field6}" /></a></li>`;
    document.getElementById('offer_wallet_output').textContent = offer_wallet_code;

}else{
    const offer_wallet_code = `<li><a onclick="s_objectID='Popup Offer - ${offer_wallet_field1}';" href="${offer_wallet_field2}?cid_source=banner&amp;cid_medium=int&amp;cid=${offer_wallet_field3}&amp;cid_content=shopwallet_popup&amp;cid_term=slot${offer_wallet_field1}"><img alt="${offer_wallet_field4}" src="${offer_wallet_field5}" /></a></li>\n\n<li class="item"><a onclick="s_objectID='Popup Offer - ${offer_wallet_field1}';" href="${offer_wallet_field2}?cid_source=banner&amp;cid_medium=int&amp;cid=${offer_wallet_field3}&amp;cid_content=shopwallet_popup&amp;cid_term=slot${offer_wallet_field1}"><img alt="${offer_wallet_field4}" src="${offer_wallet_field5}" /></a></li>`;
    document.getElementById('offer_wallet_output').textContent = offer_wallet_code;    
}
    
}


function offer_wallet_copyCode() {
    const offer_wallet_output = document.getElementById('offer_wallet_output');
    navigator.clipboard.writeText(offer_wallet_output.textContent).then(() => {
alert('Code copied to clipboard!');
    }).catch(err => {
alert('Failed to copy code: ' + err);
    });
}

function offer_wallet_resetFields() {

    document.getElementById('offer_wallet_field1').value = '';
    document.getElementById('offer_wallet_field2').value = '';
    document.getElementById('offer_wallet_field3').value = '';
    document.getElementById('offer_wallet_field4').value = '';
    document.getElementById('offer_wallet_field5').value = '';    
    document.getElementById('offer_wallet_output').textContent = "";
    document.getElementById('offer_wallet_lang1').checked = true;
    document.getElementById('es-banner').style.display = 'none';
}
