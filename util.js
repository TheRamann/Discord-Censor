module.exports = {
    spliceString(string, index, deleteCount, ...items){
        const start = string.slice(0, index);
        const insert = items.join();
        const end = string.slice(index + deleteCount);
        return `${start}${insert}${end}`;
    },
}
