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