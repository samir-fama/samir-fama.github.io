// Arquivo JavaScript para a funcionalidade de alternância entre index_pt e index_en
const languageToggle = document.getElementById('language-toggle');

languageToggle.addEventListener('change', function() {
    // Obter os elementos de botão do switch
    const onElement = document.querySelector('.on');
    const offElement = document.querySelector('.off');

    // Alternar entre index_pt e index_en quando o botão é clicado
    if (this.checked) {
        onElement.innerText = 'EN';
        offElement.innerText = 'PT';
        // Alterar para index_pt.html
        window.location.href = 'index.html';
    } else {
        onElement.innerText = 'PT';
        offElement.innerText = 'EN';
        // Alterar para index_en.html
        window.location.href = 'index_en.html';
    }
});