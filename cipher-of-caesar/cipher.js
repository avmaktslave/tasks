(function() {
    const intext = document.getElementById('in');
    intext.oninput = function() {
        const offset = 3;
        let str = this.value;
        let out = '';
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            code = code + offset;
            out += String.fromCharCode(code);
        }
        document.getElementById('out').innerHTML = out;
    };
})();