const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    // Broken  // const verticalJoin = letters[0].map(ms => ms.join(''));
    // const verticalJoin = letters[0].map((col, i) => letters.map(column => column[i]).join(''));
    const verticalJoin = letters[0].map((col, i) => letters.map(col => col[i]).join(''));

    for (const l of horizontalJoin) {
        for (const col of verticalJoin) {
            if (col.includes(word)) {
                return true;
            }
        }
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
};


module.exports = wordSearch