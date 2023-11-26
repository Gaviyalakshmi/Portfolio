var typed = new Typed(".typing-2", {
    strings: ["Web developer", "Data Analyst", "AI and ML", "Python Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function sendEmail(){
    let params = {
                    from_name: document.getElementById('from_name').value,
                    gmail: document.getElementById('gmail').value, // Add .value to get the input value
                    phone_number: document.getElementById('phone_number').value,
                    address: document.getElementById('address').value,
                }
       console.log('Form Data:', params);

       emailjs.send('service_r030fhr', 'template_0a7pcoi', params)
           .then(function (response) {
               console.log('SUCCESS!', response);
               alert('Email sent successfully!');
           }, function (error) {
               console.log('FAILED...', error);
               alert('Failed to send email. Please try again later.');
           });
   
   }