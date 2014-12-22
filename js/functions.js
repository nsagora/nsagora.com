
// Extend the protopty to support trim function
if(!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,'');
  };
}

jQuery.fn.reset = function () {
  $(this).each (function() { this.reset();  clearElement(this)});
}

function isEmpty($value){
    return ($value === null || $value === undefined || $value.length === 0);
}

function isEmail($email) {
    var pattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    return pattern.test($email);
}

function isBlank($value) {
    $value = $value.trim();
    
    return isEmpty($value);
}

function clearElement($element) {
    $($element).removeClass('error');
}

function validateElement ($element, $valid) {
    $element = $($element);
    
    if ($valid) {
        clearElement($element);
    } else {
        $element.addClass('error');
    }
}

function validateSubscribeForm($email) {
    var $valid = true;
    var $output = true;

    $email = $($email);

    $valid = !isBlank($email.val());
    $valid = isEmail($email.val());
    $output  = $output && $valid;
    validateElement($email, $valid);
    
    return $output;
}

jQuery.fn.shake = function(intShakes, intDistance, intDuration) {
    this.each(function() {
        $(this).css("position","relative");
        for (var x=1; x<=intShakes; x++) {
            $(this).animate({left:(intDistance*-1)}, (((intDuration/intShakes)/4)))
                .animate({left:intDistance}, ((intDuration/intShakes)/2))
                .animate({left:0}, (((intDuration/intShakes)/4)));
        }
    });
    return this;
};


