import Contact from './contact';

var romain = new Contact('Romain');

document.body.innerHTML = romain.hello().toUpperCase();
