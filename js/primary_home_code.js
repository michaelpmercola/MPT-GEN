// script.js
document.addEventListener('DOMContentLoaded', () => {
    const showTextFieldRadio = document.getElementById('primary_home_lang3');
    const hideTextFieldRadio1 = document.getElementById('primary_home_lang1');
    const hideTextFieldRadio2 = document.getElementById('primary_home_lang2');
    const textFieldContainer = document.getElementById('primary_home_es-banner');

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
function primary_home_generateCode() {
    const primary_home_field1 = document.getElementById('primary_home_field1').value;
    const primary_home_field2 = document.getElementById('primary_home_field2').value;
    const primary_home_field3 = document.getElementById('primary_home_field3').value;
    const primary_home_field4 = document.getElementById('primary_home_field4').value;
    const primary_home_field5 = document.getElementById('primary_home_field5').value;
    const primary_home_field6 = document.getElementById('primary_home_field6').value; 
    const primary_home_field7 = document.getElementById('primary_home_field7').value;
    const primary_home_field8 = document.getElementById('primary_home_field8').value;        
    const primary_home_lang1 = document.getElementById('primary_home_lang1').checked;
    const primary_home_lang2 = document.getElementById('primary_home_lang2').checked;
    const primary_home_lang3 = document.getElementById('primary_home_lang3').checked;

    // Check if any field is empty
    if (!primary_home_field1 || !primary_home_field2 || !primary_home_field3 || !primary_home_field4 || !primary_home_field5 || !primary_home_field6) {
alert('Please fill in all fields.');
return;
    }
    
    const oldSegment = '/1/';
    const newSegment = '/3/';

    // Replace the old segment with the new segment
    const primary_home_updatedUrl = primary_home_field2.replace(oldSegment, newSegment);

if (primary_home_lang2) {

    const primary_home_code = `<!-- EN Primary Banner -->\n<div class="item" region_id="Shop Home Banner">\n<div id="hpdesk"><a onclick="s_objectID='Shop Banner';" href="${primary_home_field2}?cid_source=banner&amp;cid_medium=int&amp;cid=${primary_home_field3}&amp;cid_content=shoptop&amp;cid_term=slot${primary_home_field1}"> <img alt="${primary_home_field4}" src="${primary_home_field5}" /></a></div>\n<div id="hpmobile"><a onclick="s_objectID='Shop Banner';" href="${primary_home_field2}?cid_source=banner&amp;cid_medium=int&amp;cid=${primary_home_field3}&amp;cid_content=shoptop&amp;cid_term=slot${primary_home_field1}"> <img alt="${primary_home_field4}" src="${primary_home_field6}" /></a></div>\n</div>\n\n\n<!-- ES Primary Banner -->\n<div class="item" region_id="Shop Home Banner">\n<div id="hpdesk"><a onclick="s_objectID='Shop Banner';" href="${primary_home_updatedUrl}?cid_source=banner&amp;cid_medium=int&amp;cid=${primary_home_field3}&amp;cid_content=esshoptop&amp;cid_term=slot${primary_home_field1}&amp;langId=es"><img alt="${primary_home_field4}" src="${primary_home_field5}" /></a></div>\n<div id="hpmobile"><a onclick="s_objectID='Shop Banner';" href="${primary_home_updatedUrl}?cid_source=banner&amp;cid_medium=int&amp;cid=${primary_home_field3}&amp;cid_content=esshoptop&amp;cid_term=slot${primary_home_field1}&amp;langId=es"><img alt="${primary_home_field4}" src="${primary_home_field6}" /></a></div>\n</div>\n`;
    document.getElementById('primary_home_output').textContent = primary_home_code;
}else if(primary_home_lang3){

    if (!primary_home_field7 || !primary_home_field8) {
    alert('Please add ES Banner');
    return;
    }

    const primary_home_code = `<!-- EN Primary Banner -->\n<div class="item" region_id="Shop Home Banner">\n<div id="hpdesk"><a onclick="s_objectID='Shop Banner';" href="${primary_home_field2}?cid_source=banner&amp;cid_medium=int&amp;cid=${primary_home_field3}&amp;cid_content=shoptop&amp;cid_term=slot${primary_home_field1}"> <img alt="${primary_home_field4}" src="${primary_home_field5}" /></a></div>\n<div id="hpmobile"><a onclick="s_objectID='Shop Banner';" href="${primary_home_field2}?cid_source=banner&amp;cid_medium=int&amp;cid=${primary_home_field3}&amp;cid_content=shoptop&amp;cid_term=slot${primary_home_field1}"> <img alt="${primary_home_field4}" src="${primary_home_field6}" /></a></div>\n</div>\n\n\n<!-- ES Primary Banner -->\n<div class="item" region_id="Shop Home Banner">\n<div id="hpdesk"><a onclick="s_objectID='Shop Banner';" href="${primary_home_updatedUrl}?cid_source=banner&amp;cid_medium=int&amp;cid=${primary_home_field3}&amp;cid_content=esshoptop&amp;cid_term=slot${primary_home_field1}&amp;langId=es"><img alt="${primary_home_field4}" src="${primary_home_field7}" /></a></div>\n<div id="hpmobile"><a onclick="s_objectID='Shop Banner';" href="${primary_home_updatedUrl}?cid_source=banner&amp;cid_medium=int&amp;cid=${primary_home_field3}&amp;cid_content=esshoptop&amp;cid_term=slot${primary_home_field1}&amp;langId=es"><img alt="${primary_home_field4}" src="${primary_home_field8}" /></a></div>\n</div>\n`;
    document.getElementById('primary_home_output').textContent = primary_home_code;

}else{
    const primary_home_code = `<!-- EN Primary Banner -->\n<div class="item" region_id="Shop Home Banner">\n<div id="hpdesk"><a onclick="s_objectID='Shop Banner';" href="${primary_home_field2}?cid_source=banner&amp;cid_medium=int&amp;cid=${primary_home_field3}&amp;cid_content=shoptop&amp;cid_term=slot${primary_home_field1}"> <img alt="${primary_home_field4}" src="${primary_home_field5}" /></a></div>\n<div id="hpmobile"><a onclick="s_objectID='Shop Banner';" href="${primary_home_field2}?cid_source=banner&amp;cid_medium=int&amp;cid=${primary_home_field3}&amp;cid_content=shoptop&amp;cid_term=slot${primary_home_field1}"> <img alt="${primary_home_field4}" src="${primary_home_field6}" /></a></div>\n</div>\n`;
    document.getElementById('primary_home_output').textContent = primary_home_code;    
}
    
}


function primary_home_copyCode() {
    const primary_home_output = document.getElementById('primary_home_output');
    navigator.clipboard.writeText(primary_home_output.textContent).then(() => {
alert('Code copied to clipboard!');
    }).catch(err => {
alert('Failed to copy code: ' + err);
    });
}

function primary_home_resetFields() {

    document.getElementById('primary_home_field1').value = '';
    document.getElementById('primary_home_field2').value = '';
    document.getElementById('primary_home_field3').value = '';
    document.getElementById('primary_home_field4').value = '';
    document.getElementById('primary_home_field5').value = '';    
    document.getElementById('primary_home_field6').value = '';
    document.getElementById('primary_home_field7').value = ''; 
    document.getElementById('primary_home_field8').value = '';
    document.getElementById('primary_home_output').textContent = "";
    document.getElementById('primary_home_lang1').checked = true;
    document.getElementById('primary_home_es-banner').style.display = 'none';
}
