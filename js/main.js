$(document).ready(function () {

    $(".hire-me").click(function () {
        return $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top}, 500), !1
    });

    $("ul.nav-pills li a").click(function () {
        $("ul.nav-pills li.active").removeClass("active"), $(this).parent("li").addClass("active")
    });

    $("#contact-form").submit(function(e){
        e.preventDefault();

        var $this = $(this);
        var $email = $('#email');
        var $button = $('#subscribe');

        if (!validateSubscribeForm($email)) {
            $email.shake(4, 5, 300);
            return;
        }

        $.ajax({
            url:    '/ajax/subscribe-email.php',
            type:   'post',
            dataType: 'json',
            data : {
                access:     '450066915',
                email:      $email.val()
            },

            beforeSend: function(jqXHR, settings ){
                $button.html('Please wait ...');
            },

            success: function(data, textStatus, jqXHR){
                $button.addClass('btn-success').html('Thank you!');
                window.setTimeout(function() {
                    $button.removeClass('btn-success').html('Get in touch');
                }, 5000);
            },

            complete: function(jqXHR, textStatus){
                $this.reset();
            },

            error: function(xhr, ajaxOptions, thrownError) {
            }
        });
    })


});