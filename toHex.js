const toHex = String.prototype.toHex = function() {
    const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    return hexValues[parseInt(+this / 16)] + hexValues[((parseFloat(+this / 16) - parseInt(+this / 16)) * 16)];
}
export {toHex}