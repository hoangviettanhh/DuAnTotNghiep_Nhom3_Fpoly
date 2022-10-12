$(function (){



    /**
     * Check phone : Hoàng Việt Anh
     */
    $(document).on('input onkeypress paste', 'input[data-phone]', function (){
        let rePhone = /^(09|03|07|08|05).*$/;
        $(this).val($(this).val().replace(/[^0-9]/g,''));
        if($(this).val().length > 10){
            $(this).val($(this).val().slice(0, 10));
        }
        if ($(this).val().length <= 10 && $(this).val() != '') {
            if (!($(this).val().length < 2 || $(this).val().length >= 2 && $(this).val().substring(0, 2).match(rePhone))) {
                $(this).parent().find('.error').text('Đầu số không đúng định dạng');
                $(this).parent().addClass("error-input");
                $(this).css("border", "1px solid var(--error-color)");
                $(this).parent().find("label").css("color", "var(--error-color)");
            } else {
                if ($(this).val().length === 10 && $(this).val().substring(0, 2).match(rePhone)) {
                    clearDataValidate();
                } else {
                    $(this).parent().find('.error').text('Số điện thoại chưa đúng 10 số!');
                    $(this).parent().addClass("error-input");
                    $(this).css("border", "1px solid var(--error-color)");
                    $(this).parent().find("label").css("color", "var(--error-color)");
                }
            }
        }
    });

    /**
     * check number :Hoàng Việt Anh
     */
    $(document).on('input onkeypress paste', 'input[data-number]', function (){
        $(this).val($(this).val().replace(/[^0-9]/g,''));
    });


    // $(document).on('input onkeypress paste', 'input[data-number-float]', function (){

    // });

    $("input[data-number-float]").bind("change keyup input", function() {
        var position = this.selectionStart - 1;
        //remove all but number and .
        var fixed = this.value.replace(/[^0-9\.]/g, "");
        if (fixed.charAt(0) === ".")
            //can't start with .
            fixed = fixed.slice(1);

        var pos = fixed.indexOf(".") + 1;
        if (pos >= 0)
            //avoid more than one .
            fixed = fixed.substr(0, pos) + fixed.slice(pos).replace(".", "");

        if (this.value !== fixed) {
            this.value = fixed;
            this.selectionStart = position;
            this.selectionEnd = position;
        }
    });
    /**
     * check email:Hoàng Việt Anh
     */
    $(document).on('input onkeypress paste', 'input[data-email]', function (){
        let reEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!$(this).val().match(reEmail)) {
            $(this).parent().find('.error').text('Email không đúng định dạng');
            $(this).parent().addClass("error-input");
            $(this).css("border", "1px solid var(--error-color)");
            $(this).parent().find("label").css("color", "var(--error-color)");
        } else {
            clearDataValidate();
        }
    })
});
/**
 * Kiểm tra validate trong form:Hoàng Việt Anh
 */
function checkValidate(r) {
    let validate = r.attr("data-validate").split(",");
    validate.find((element) => {
        if (element.includes("empty")) {
            checkEmptyOnKey(r);
        }

        if (element.includes("min-length")) {
            $(this).attr("data-length-text", 1);
            let dataMin = element.split("-");
            let num = dataMin[2];
            checkMinlength(num, r);
        }

        if (element.includes("number")) {
            r.on("keypress", function (e) {
                return isNumberKey(e, r);
            }).on("keyup", function (e) {
                return isNumberKey(e,r);
            });
        }
    });
}

/**
 * Xử lý validate trong form:Hoàng Việt Anh
 */
function checkEmptyOnKey(r) {
    checkValidateInput = 0;
    if (r.val() === "") {
        checkValidateInput = 1;
        r.parent().addClass("error-input");
        r.css("border", "1px solid var(--error-color)");
        r.parent().find(".error").text("Bạn không được để trống");
        r.parent().find("label").css("color", "var(--error-color)");
    } else {
        checkValidateInput = 0;
        r.parent().removeClass("error-input");
        r.css("border", "1px solid #0ac282");
        r.parent().find(".error").text("");
        r.parent().find("label").css("color", "#0ac282");
    }
}
function checkMinlength(num, r) {
    checkValidateInput = 0;
    if (r.val().length < num) {
        checkValidateInput = 1;
        r.css("border", "1px solid var(--error-color)");
        r.parent()
            .find(".error")
            .text("Bạn phải nhập ít nhất " + num + " ký tự");
        r.parent().find("label").css("color", "var(--error-color)");
    } else {
        checkValidateInput = 0;
        r.css("border", "1px solid #0ac282");
        r.parent().find(".error").text("");
        r.parent().find("label").css("color", "#0ac282");
    }
}



