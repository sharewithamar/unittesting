module.exports = {
    camelCase: function(string) {
        return string.replace(/-[a-z]/g, function(match) {
            return match[1].toUpperCase() + match.slice(2);
        });
    },

    dashSeparated: function(string) {
        return string.replace(/[A-Z]/g, function(match) {
            return '-' + match.toLowerCase();
        });
    }
};