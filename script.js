document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const copyBtn = document.getElementById('copy-btn');

    encryptBtn.addEventListener('click', function() {
        const input = inputText.value;
        const encrypted = encrypt(input);
        outputText.value = encrypted;
    });

    decryptBtn.addEventListener('click', function() {
        const input = inputText.value;
        const decrypted = decrypt(input);
        outputText.value = decrypted;
    });

    copyBtn.addEventListener('click', function() {
        outputText.select();
        document.exeCommand('copy');
    });

    function encrypt(text) {
        let result = text.replace(/e/g, 'enter');
        result = result.replace(/i/g, 'imes');
        result = result.replace(/a/g, 'ai');
        result = result.replace(/o/g, 'ober');
        result = result.replace(/u/g, 'ufat');
        return result;
    }

    function decrypt(text) {
        let result = text.replace(/enter/g, 'e');
        result = result.replace(/imes/g, 'i');
        result = result.replace(/ai/g, 'a');
        result = result.replace(/ober/g, 'o');
        result = result.replace(/ufat/g, 'u');
        return result;
    }
});
