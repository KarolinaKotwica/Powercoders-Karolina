document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//// scroll up button /////
const button = document.getElementById('scrollUp');

window.onscroll = function() {
    showButton();
};

function showButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.opacity = 1;
  } else {
    button.style.opacity = 0;
  }
}

button.addEventListener('click', () => {
    window.scroll({top: 0, behavior: "smooth"})
})

/// end scroll up button ///


/// accordion ///
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}