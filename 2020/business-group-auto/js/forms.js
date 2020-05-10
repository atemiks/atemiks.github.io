$(document).ready(function () {
    $(".form-hero").submit(function () {
        $.ajax({
            type: "POST",
            url: "/form_hero.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#modalThanks').modal('show');
            $(".form-hero").trigger("reset");
            initCaptcha();
        });
        return false;
    });

    $(".form-contact").submit(function () {
        $.ajax({
            type: "POST",
            url: "/form_contact.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#modalThanks').modal('show');
            $(".form-contact").trigger("reset");
            initCaptcha();
        });
        return false;
    });

    $(".form-callback").submit(function () {
        $.ajax({
            type: "POST",
            url: "/form_callback.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#modalThanks').modal('show');
            $(".form-callback").trigger("reset");
            initCaptcha();
        });
        return false;
    });

    $(".form-join").submit(function () {
        $.ajax({
            type: "POST",
            url: "/form_join.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#modalThanks').modal('show');
            $(".form-join").trigger("reset");
            initCaptcha();
        });
        return false;
    });

    $(".form-modal").submit(function () {
        $.ajax({
            type: "POST",
            url: "/form_contact.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");

            $('#modalCallback, #modalContact').modal('hide');
            $('#modalCallback, #modalContact').on('hidden.bs.modal', function (e) {
                $('#modalThanks').modal('show');
            })

            $(".form-modal").trigger("reset");
            initCaptcha();
        });
        return false;
    });
})