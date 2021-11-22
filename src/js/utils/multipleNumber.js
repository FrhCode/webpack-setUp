export const multiplyNum = (...num) => {
    return num.reduce((result, currVal) => {
        return result * currVal;
    });
};
