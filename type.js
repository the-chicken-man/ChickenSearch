var app = document.getElementById('type');

var typewriter = new Typewriter(type, {
    loop: true
});

typewriter.typeString('<p>Browse The Web safely and in style</p>')
    .pauseFor(4000)
    .deleteAll()
    .typeString('<p>Browse The Web safely and in style</p>')
    .pauseFor(4000)
    .deleteChars(7)
    .typeString('<p>Browse The Web safely and in style</p>')
    .pauseFor(4000)
    .start();
