/* Sale LP Primary */
function salelp_primary_generateCode() {
    /*
    const salelp_primary_field1 = document.getElementById('salelp_primary_field1').value;
    */
    const salelp_primary_field2 = document.getElementById('salelp_primary_field2').value;
    const salelp_primary_field3 = document.getElementById('salelp_primary_field3').value;
    const salelp_primary_field4 = document.getElementById('salelp_primary_field4').value;
    const salelp_primary_field5 = document.getElementById('salelp_primary_field5').value;
    const salelp_primary_field6 = document.getElementById('salelp_primary_field6').value;       

    // Check if any field is empty
    if (!salelp_primary_field2 || !salelp_primary_field3 || !salelp_primary_field4 || !salelp_primary_field5 || !salelp_primary_field6) {
alert('Please fill in all fields.');
return;
    }
    


    const salelp_primary_code = `<!-- EN Sale LP Primary Banner -->\n<div class="homebanner">\n<div id="bfdesk"><a onclick="s_objectID='Shop Banner';"href="${salelp_primary_field2}?cid_source=banner&amp;cid_medium=int&amp;cid=${salelp_primary_field3}&amp;cid_content=shoptop"><img alt="${salelp_primary_field4}" src="${salelp_primary_field5}" /></a>\n</div>\n<div id="bfmobile"><a onclick="s_objectID='Shop Banner';"href="${salelp_primary_field2}?cid_source=banner&amp;cid_medium=int&amp;cid=${salelp_primary_field3}&amp;cid_content=shoptop"><img alt="${salelp_primary_field4}" src="${salelp_primary_field6}" /></a>\n</div>\n</div>\n`;
    document.getElementById('salelp_primary_output').textContent = salelp_primary_code;    

    
}


function salelp_primary_copyCode() {
    const salelp_primary_output = document.getElementById('salelp_primary_output');
    navigator.clipboard.writeText(salelp_primary_output.textContent).then(() => {
alert('Code copied to clipboard!');
    }).catch(err => {
alert('Failed to copy code: ' + err);
    });
}

function salelp_primary_resetFields() {

    //document.getElementById('salelp_primary_field1').value = '';
    document.getElementById('salelp_primary_field2').value = '';
    document.getElementById('salelp_primary_field3').value = '';
    document.getElementById('salelp_primary_field4').value = '';
    document.getElementById('salelp_primary_field5').value = '';    
    document.getElementById('salelp_primary_field6').value = '';
    document.getElementById('salelp_primary_output').textContent = "";

}
