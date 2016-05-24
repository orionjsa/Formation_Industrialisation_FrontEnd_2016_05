/**
 * Created by Administrateur on 24/05/2016.
 */

import $ from 'jquery';

function validate (form)
{
    let email = form.querySelector('input[type=email]');
    if (!email.value.length) {
        $(email).after('<div class="help-block">Email obligatoire</div>');
        $(email).parent().addClass('has-error');
    }
}

export default validate;