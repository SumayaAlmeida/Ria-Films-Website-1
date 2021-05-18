
//burger nav 
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  
  burger.addEventListener('click',()=>{
    //toggle nav
    nav.classList.toggle('nav-active');  
    //Animate Links
    navLinks.forEach((link, index)=> {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 5}s`;
    });

  });

}

navSlide();

// form validation


const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById('contactForm');
const errorElement = document.getElementById('error');


window.onload=function(){

  form.addEventListener('submit', (e) => {
    let messages = []
    console.log(firstname.value)
    if(firstname.value === '' ||  firstname.value == null ){
      messages.push('')
      alert('Name is required')
    }
  
    if(lastname.value === '' ||  lastname.value == null ){
      messages.push('')
      alert('Last name is required')
    }
    
    if (messages.length > 0) {
      e.preventDefault()  
    }
    else
    {
      alert('Message Sent')
      
    }//else
       
  })//eventlistener
   
}//onload

// contact us form animation

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


        

