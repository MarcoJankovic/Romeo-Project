"use strict";
 
 (function() {

    // The App object //
    const app = {

        // Get the form //
        form: document.getElementById('customer-form'),

        // Initialize the App //
        init: function() {
            this.form.addEventListener('submit', function(event) {
                event.preventDefault();       
                display.setCustomer(namn.value, kurs.value, forfattare.value);
                display.feedback();
                display.clear();
            });

              // Eeventlistener for my inputs //
            this.form.namn.addEventListener('blur', this.validateField);
            this.form.kurs.addEventListener('blur', this.validateField);
            this.form.forfattare.addEventListener('blur', this.validateField);
        },


        // Validate the fields //
        // All inputs nedeed else disable submit button //
        validateField : function(){
            if (this.value === ''){
                this.classList.remove('complete');
                this.classList.add('fail');
            } else {
                this.classList.add('complete');
                this.classList.remove('fail');
            }
        
            const complete = document.querySelectorAll('.complete');
        
            if(complete.length === 3){
                document.querySelector('.btnSubmit').disabled = false;
            } else {
                document.querySelector('.btnSubmit').disabled = true;
            }
        },

    }

    // Display object handles logic //
    const display = {
        name: '',
        course: '',
        author: '',
        customers: '',
        btn: document.querySelector('.btnSubmit'),
        result: document.querySelector('.feedback'),
        // Set data for customer //
        setCustomer: function(name, course, author)
        {
            this.name = name;
            this.course = course;
            this.author = author;
            this.customers = document.querySelector('.row-customer');
        },
        // Hides the submit button //
        hideSubmit: function(){
            this.btn.disabled = true;
        },
        // Shows the submit button //
        showSubmit: function(){
            this.btn.disabled = true;
        },


        // Loading function //
        loading: function () {
                document.querySelector('.loading').style.display = "block";
            setTimeout(function() {
                document.querySelector('.loading').style.display = "none";
              },3000);
        },
        

        // Process the submit //
        feedback: function () {
            const self = this;
            self.loading();
            self.result.classList.add('showItem', 'alert', 'alert-success'); 
            
            self.hideSubmit();
            
            setTimeout(function(){
                self.result.classList.remove('showItem', 'alert', 'alert-success');
                self.addCustomer();
        
            }, 4000);
        },
        
        // Creates display GUI for customer //
        addCustomer: function(){           
            let div = document.createElement('div');
            div.classList.add("customer-card");
            div.innerHTML =
            `<div class="picture-container">
                <img class="image" src="https://source.unsplash.com/random/" count++ width="278" height="154"/>
            </div>
            <div class="text-values">
                <p><span class="span-first">Name :</span> ${this.name}</p>
                <p><span class="span-second">Course :</span> ${this.course}</p>
                 <p><span class="span-third">Author :</span> ${this.author}</p>
            </div>`;

            this.customers.append(div);
        },
        // Clear all input fields //
        clear: function() {

            // Empty inputs //
            app.form.namn.value = '';
            app.form.kurs.value = '';
            app.form.forfattare.value = '';

            // Removes style class complete and fail ( Green - Red) //
            app.form.namn.classList.remove('complete', 'fail');
            app.form.kurs.classList.remove('complete', 'fail');
            app.form.forfattare.classList.remove('complete', 'fail');
        },
    };

    app.init();
})(); 



/* "use strict;"
// Customer Constructor
function Customer(name, course, author){
    this.name = name;
    this.course = course;
    this.author = author;
}

// Event Listeners 
document.getElementById('customer-form').addEventListener('submit',
function(e){
    // Get form values
       const name = document.getElementById('name').value;
       const course = document.getElementById('course').value;
       const author = document.getElementById('author').value;

e.preventDefault();
});


// Display Customer to DOM //
const customerBlock = document.createElement('div');

customerBlock.innerHTML = `
` */