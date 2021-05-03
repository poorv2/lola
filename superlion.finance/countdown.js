//var flipdown = new FlipDown(1620411120)
var flipdown = new FlipDown(1620405791)
    //var flipdown = new FlipDown(1619902667)
    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
        console.log('The countdown has ended!');
    });

// Toggle theme
var interval = setInterval(() => {
    let body = document.body;
    //body.classList.toggle('light-theme');
    //body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    //body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
}, 5000);

// Show version number
var ver = document.getElementById('ver');
ver.innerHTML = flipdown.version;