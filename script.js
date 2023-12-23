const editor = document.getElementById('editor');

editor.addEventListener('input', highlightCode);

function highlightCode() {
    const code = editor.innerText;

    // HTML syntax highlighting
    const htmlRegex = /<(\w+)(\s[^>]*)?>|<\/(\w+)>/g;
    codeHighlight(code, htmlRegex, 'html');

    // CSS syntax highlighting
    const cssRegex = /(\w+)\s*:\s*([^;]+)/g;
    codeHighlight(code, cssRegex, 'css');

    // JavaScript syntax highlighting
    const jsRegex = /\b(var|let|const|function|if|else|while|for|return|console.log)\b/g;
    codeHighlight(code, jsRegex, 'js');
}

function codeHighlight(code, regex, className) {
    const highlightedCode = code.replace(regex, (match) => {
        return `<span class="${className}">${match}</span>`;
    });

    editor.innerHTML = highlightedCode;
}
