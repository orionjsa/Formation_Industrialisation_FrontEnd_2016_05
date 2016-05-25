/**
 * Created by Administrateur on 24/05/2016.
 */

import valider from './validator';

// let nouveauté d'ECmasript 6
let form = document.querySelector("#myModal form");

form.addEventListener('submit', function(e){
    e.preventDefault();
    valider(form);
})
