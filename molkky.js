iphoneClick = function(e) {
    var ipadScroll = document.getElementById('ipadScrollDiv');
    var iphoneScroll = document.getElementById('iphoneScrollDiv');
    var ipadLabel = document.getElementById('deviceIpad');
    var iphoneLabel = document.getElementById('deviceIphone');
    ipadScroll.style.display = 'none';
    iphoneScroll.style.display = 'flex';
    ipadLabel.style.color = 'lightgray';
    iphoneLabel.style.color = 'white';
}

ipadClick = function(e) {
    var ipadScroll = document.getElementById('ipadScrollDiv');
    var iphoneScroll = document.getElementById('iphoneScrollDiv');
    var ipadLabel = document.getElementById('deviceIpad');
    var iphoneLabel = document.getElementById('deviceIphone');
    ipadScroll.style.display = 'flex';
    iphoneScroll.style.display = 'none';
    ipadLabel.style.color = 'white';
    iphoneLabel.style.color = 'lightgray';
}

window.onload = function(e) {
    this.document.getElementById('deviceIphone').onclick = iphoneClick;
    this.document.getElementById('deviceIpad').onclick = ipadClick;
}