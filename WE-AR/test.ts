function evaluate(expression: string): number {
    if (expression.indexOf('sin') !== -1 || expression.indexOf('cos') !== -1) {
        let regexForSin = /sin/gi;
        let regexForCos = /cos/gi;
        let exp = expression
        .replace(regexForSin, 'Math.sin')
        .replace(regexForCos, 'Math.cos')

        let result = eval(exp);
        console.log(result);
        return result;
    } else {
        let result = eval(expression);
        console.log(result);
        return result;
    }
}

evaluate('1 / 32.5 + 167 * (3498 - 1155) * -721 * (4885 - 1) / 0.5');