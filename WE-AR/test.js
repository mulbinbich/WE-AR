function evaluate(expression) {
    if (expression.indexOf('sin') !== -1 || expression.indexOf('cos') !== -1) {
        var regexForSin = /sin/gi;
        var regexForCos = /cos/gi;
        var exp = expression
            .replace(regexForSin, 'Math.sin')
            .replace(regexForCos, 'Math.cos');
        var result = eval(exp);
        console.log(result);
        return result;
    }
    else {
        var result = eval(expression);
        console.log(result);
        return result;
    }
}
evaluate('1 / 32.5 + 167 * (3498 - 1155) * -721 * (4885 - 1) / 0.5');
