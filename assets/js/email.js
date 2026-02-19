const form=document.getElementById('contact-form');
form.addEventListener('submit',function(e){
e.preventDefault();
emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',this)
.then(()=>document.getElementById('status').innerText='Message Sent Successfully!')
.catch(()=>document.getElementById('status').innerText='Failed to send message');
});
