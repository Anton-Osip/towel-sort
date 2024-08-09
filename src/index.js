// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length === 0) return [];
    let arr = matrix.map((item, index) => {
        if (index % 2 === 0) {
            return item;
        } else {
            return item.reverse();
        }
    });

    return arr.flat();
};
