document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function changeColor() {

    var replacement = "<span class='yellow'>repla</span>";

    var words = ["ls", "cp", "cd", "cd ~", "-a", "-d", "cs ..", "mkdir", "rmdir", "rm", "touch", "pwd"];

    for (i=0;i<words.length;i++){

        var str = document.getElementById("replace").innerHTML;

        var replacethis = words[i];

        var re = new RegExp(replacethis,"g");

        var txt = str.replace(re, replacement.replace("repla",replacethis) );

        document.getElementById("replace").innerHTML = txt;

    }

}

function makeCursive() {

    var replacement = "<span class='cursive'>repla</span>";

    var words = ["name", "origin", "destination", "word"];

    for (i=0;i<words.length;i++){

        var str = document.getElementById("replace").innerHTML;

        var replacethis = words[i];

        var re = new RegExp(replacethis,"g");

        var txt = str.replace(re, replacement.replace("repla",replacethis) );

        document.getElementById("replace").innerHTML = txt;

    }

}

makeCursive();
changeColor();
