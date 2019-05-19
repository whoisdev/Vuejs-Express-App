module.exports = function(word) {
    console.log(word);
    return word.charAt(0).toUpperCase() + word.slice(1);
}