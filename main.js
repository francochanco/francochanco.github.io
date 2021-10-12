function $(x) {return document.querySelector(x);}

// set year
const yearSpan = $('#year');
yearSpan.innerHTML = new Date().getFullYear();