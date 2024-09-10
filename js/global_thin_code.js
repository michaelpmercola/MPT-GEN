// script.js
document.addEventListener('DOMContentLoaded', () => {
    const showTextFieldRadio = document.getElementById('global_thin_lang3');
    const hideTextFieldRadio1 = document.getElementById('global_thin_lang1');
    const hideTextFieldRadio2 = document.getElementById('global_thin_lang2');
    const textFieldContainer = document.getElementById('global_thin_es-banner');

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
function global_thin_generateCode() {
    const global_thin_field1 = document.getElementById('global_thin_field1').value;
    const global_thin_field2 = document.getElementById('global_thin_field2').value;
    const global_thin_field3 = document.getElementById('global_thin_field3').value;
    const global_thin_field4 = document.getElementById('global_thin_field4').value;
    const global_thin_field5 = document.getElementById('global_thin_field5').value;
    const global_thin_field6 = document.getElementById('global_thin_field6').value; 
    const global_thin_field7 = document.getElementById('global_thin_field7').value;      
    const global_thin_lang1 = document.getElementById('global_thin_lang1').checked;
    const global_thin_lang2 = document.getElementById('global_thin_lang2').checked;
    const global_thin_lang3 = document.getElementById('global_thin_lang3').checked;

    // Check if any field is empty
    if (!global_thin_field1 || !global_thin_field2 || !global_thin_field3 || !global_thin_field4 || !global_thin_field5) {
alert('Please fill in all fields.');
return;
    }
    
    const oldSegment = '/1/';
    const newSegment = '/3/';

    // Replace the old segment with the new segment
    const global_thin_updatedUrl = global_thin_field2.replace(oldSegment, newSegment);

if (global_thin_lang2) {

    const global_thin_code = `<!--------------------TOP THIN EN---------------------->\n<div id="hpdesk"><a href="${global_thin_field1}?cid_source=banner&amp;cid_medium=int&amp;cid=${global_thin_field2}&amp;cid_content=shopthin"> <img alt="${global_thin_field3}" src="${global_thin_field4}" /> </a></div>\n<div id="hpmobile"><a href="${global_thin_field1}?cid_source=banner&amp;cid_medium=int&amp;cid=${global_thin_field2}&amp;cid_content=shopthin"> <img alt="${global_thin_field3}" src="${global_thin_field5}" /> </a></div>\n<style>#hpdesk { display: block; } #hpmobile, .categorybannerimg { display: none; } @media only screen and (max-width: 769px) { #hpdesk { display: none; } #hpmobile { display: block; } }</style>\n\n<!--------------------TOP THIN ES---------------------->\n<div id="hpdesk"><a href="${global_thin_field1}?cid_source=banner&amp;cid_medium=int&amp;cid=${global_thin_field2}&amp;cid_content=shopthin&amp;langId=es"> <img alt="${global_thin_field3}" src="&{global_thin_field4}" /> </a></div>\n<div id="hpmobile"><a href="${global_thin_field1}?cid_source=banner&amp;cid_medium=int&amp;cid=${global_thin_field2}&amp;cid_content=shopthin&amp;langId=es"> <img alt="${global_thin_field3}" src="${global_thin_field5}" /> </a></div>\n<style>#hpdesk { display: block; } #hpmobile, .categorybannerimg { display: none; } @media only screen and (max-width: 769px) { #hpdesk { display: none; } #hpmobile { display: block; } }</style>\n\n\n<!--------------------TOP THIN LP EN---------------------->\n<script data-cfasync="false" type="text/javascript">var elmshpdesk = document.querySelectorAll("[id='hpdesk']"); for(var i = 0; i < elmshpdesk.length; i++) elmshpdesk[i].innerHTML = '<img alt="${global_thin_field3}" src="${global_thin_field4}">'; var elmshpmobile = document.querySelectorAll("[id='hpmobile']"); for(var i = 0; i < elmshpmobile.length; i++) elmshpmobile[i].innerHTML = '<img alt="${global_thin_field3}" src="${global_thin_field5}">';</script>\n`;
    document.getElementById('global_thin_output').textContent = global_thin_code;
}else if(global_thin_lang3){

    if (!global_thin_field6 || !global_thin_field7) {
    alert('Please add ES Banner');
    return;
    }

    const global_thin_code = `<!--------------------TOP THIN EN---------------------->\n<div id="hpdesk"><a href="${global_thin_field1}?cid_source=banner&amp;cid_medium=int&amp;cid=${global_thin_field2}&amp;cid_content=shopthin"> <img alt="${global_thin_field3}" src="${global_thin_field4}" /> </a></div>\n<div id="hpmobile"><a href="${global_thin_field1}?cid_source=banner&amp;cid_medium=int&amp;cid=${global_thin_field2}&amp;cid_content=shopthin"> <img alt="${global_thin_field3}" src="${global_thin_field5}" /> </a></div>\n<style>#hpdesk { display: block; } #hpmobile, .categorybannerimg { display: none; } @media only screen and (max-width: 769px) { #hpdesk { display: none; } #hpmobile { display: block; } }</style>\n\n<!--------------------TOP THIN ES---------------------->\n<div id="hpdesk"><a href="${global_thin_field1}?cid_source=banner&amp;cid_medium=int&amp;cid=${global_thin_field2}&amp;cid_content=shopthin&amp;langId=es"> <img alt="${global_thin_field3}" src="${global_thin_field6}" /> </a></div>\n<div id="hpmobile"><a href="${global_thin_field1}?cid_source=banner&amp;cid_medium=int&amp;cid=${global_thin_field2}&amp;cid_content=shopthin&amp;langId=es"> <img alt="${global_thin_field3}" src="${global_thin_field7}" /> </a></div>\n<style>#hpdesk { display: block; } #hpmobile, .categorybannerimg { display: none; } @media only screen and (max-width: 769px) { #hpdesk { display: none; } #hpmobile { display: block; } }</style>\n\n\n<!--------------------TOP THIN LP EN---------------------->\n<script data-cfasync="false" type="text/javascript">var elmshpdesk = document.querySelectorAll("[id='hpdesk']"); for(var i = 0; i < elmshpdesk.length; i++) elmshpdesk[i].innerHTML = '<img alt="${global_thin_field3}" src="${global_thin_field4}">'; var elmshpmobile = document.querySelectorAll("[id='hpmobile']"); for(var i = 0; i < elmshpmobile.length; i++) elmshpmobile[i].innerHTML = '<img alt="${global_thin_field3}" src="${global_thin_field5}">';</script>\n\n<!--------------------TOP THIN LP ES---------------------->\n<script data-cfasync="false" type="text/javascript">var elmshpdesk = document.querySelectorAll("[id='hpdesk']"); for(var i = 0; i < elmshpdesk.length; i++) elmshpdesk[i].innerHTML = '<img alt="${global_thin_field3}" src="${global_thin_field6}">'; var elmshpmobile = document.querySelectorAll("[id='hpmobile']"); for(var i = 0; i < elmshpmobile.length; i++) elmshpmobile[i].innerHTML = '<img alt="${global_thin_field3}" src="${global_thin_field7}">';</script>\n`;
    document.getElementById('global_thin_output').textContent = global_thin_code;

}else{
    const global_thin_code = `<!--------------------TOP THIN EN---------------------->\n<div id="hpdesk"><a href="${global_thin_field1}?cid_source=banner&amp;cid_medium=int&amp;cid=${global_thin_field2}&amp;cid_content=shopthin"> <img alt="${global_thin_field3}" src="${global_thin_field4}" /> </a></div>\n<div id="hpmobile"><a href="${global_thin_field1}?cid_source=banner&amp;cid_medium=int&amp;cid=${global_thin_field2}&amp;cid_content=shopthin"> <img alt="${global_thin_field3}" src="${global_thin_field5}" /> </a></div>\n<style>#hpdesk { display: block; } #hpmobile, .categorybannerimg { display: none; } @media only screen and (max-width: 769px) { #hpdesk { display: none; } #hpmobile { display: block; } }</style>\n\n\n<!--------------------TOP THIN LP EN---------------------->\n<script data-cfasync="false" type="text/javascript">var elmshpdesk = document.querySelectorAll("[id='hpdesk']"); for(var i = 0; i < elmshpdesk.length; i++) elmshpdesk[i].innerHTML = '<img alt="${global_thin_field3}" src="${global_thin_field4}">'; var elmshpmobile = document.querySelectorAll("[id='hpmobile']"); for(var i = 0; i < elmshpmobile.length; i++) elmshpmobile[i].innerHTML = '<img alt="${global_thin_field3}" src="${global_thin_field5}">';</script>\n`;
    document.getElementById('global_thin_output').textContent = global_thin_code;    
}
    
}


function global_thin_copyCode() {
    const global_thin_output = document.getElementById('global_thin_output');
    navigator.clipboard.writeText(global_thin_output.textContent).then(() => {
alert('Code copied to clipboard!');
    }).catch(err => {
alert('Failed to copy code: ' + err);
    });
}

function global_thin_resetFields() {

    document.getElementById('global_thin_field1').value = '';
    document.getElementById('global_thin_field2').value = '';
    document.getElementById('global_thin_field3').value = '';
    document.getElementById('global_thin_field4').value = '';
    document.getElementById('global_thin_field5').value = '';    
    document.getElementById('global_thin_field6').value = '';
    document.getElementById('global_thin_field7').value = ''; 
    document.getElementById('global_thin_output').textContent = "";
    document.getElementById('global_thin_lang1').checked = true;
    document.getElementById('global_thin_es-banner').style.display = 'none';
}
