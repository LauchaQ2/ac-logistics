const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const navbarLinks = document.getElementsByClassName('navbar-links')[0]

menuBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("brand-logo").style.width = "50px";
  } else {
    document.getElementById("brand-logo").style.width = "80px";
  }
}


function lettersOnly(input){
  var regex = /[^a-z]/gi;
  input.value = input.value.replace(regex, "");
}
function numbersOnly(input){
  var regex = /[^0-9]/g;
  input.value = input.value.replace(regex, "");
}

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'ENVIANDO';

   const serviceID = 'default_service';
   const templateID = 'template_8c27fij';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('CONSULTA ENVIADA!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

