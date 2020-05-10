let operators = [{
    sign: "+",
    method: function (a, b) {
        return a + b;
    }
}, {
    sign: "-",
    method: function (a, b) {
        return a - b;
    }
}];


let tempCaptchaResult;

function generateCaptcha() {
    let tempCaptchaNum1 = Math.floor((Math.random() * 10) + 1);
    let tempCaptchaNum2 = Math.floor((Math.random() * 10) + 1);
    let tempCaptchaOperator = Math.floor(Math.random() * operators.length);
    let tempCaptchaSign = operators[tempCaptchaOperator].sign;
    let tempCaptchaString = tempCaptchaNum1 + ' ' + tempCaptchaSign + ' ' + tempCaptchaNum2 + ' = ?';
    tempCaptchaResult = operators[tempCaptchaOperator].method(tempCaptchaNum1, tempCaptchaNum2);
    return tempCaptchaString;
}

function initCaptcha() {
    $('form').find("input[name=formCaptcha]").each(function () {
        $(this).attr("placeholder", generateCaptcha());
        $(this).attr("data-captcha", tempCaptchaResult);
    });
}


$(document).ready(function () {
    initCaptcha();
})