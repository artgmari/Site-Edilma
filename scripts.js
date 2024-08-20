document.addEventListener('DOMContentLoaded', () => {
    const aumentarFonteBtn = document.getElementById('aumentar-fonte');
    const diminuirFonteBtn = document.getElementById('diminuir-fonte');
    const altoContrasteBtn = document.getElementById('alto-contraste');
    const leitorTelaBtn = document.getElementById('leitor-tela');
    let fonteTamanho = 16;

    aumentarFonteBtn.addEventListener('click', () => {
        fonteTamanho += 2;
        document.body.style.fontSize = `${fonteTamanho}px`;
    });

    diminuirFonteBtn.addEventListener('click', () => {
        if (fonteTamanho > 12) {
            fonteTamanho -= 2;
            document.body.style.fontSize = `${fonteTamanho}px`;
        }
    });

    altoContrasteBtn.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    leitorTelaBtn.addEventListener('click', () => {
        const content = document.querySelector('main').innerText;
        const speech = new SpeechSynthesisUtterance(content);
        speech.lang = 'pt-BR';
        window.speechSynthesis.speak(speech);
    });

    // Navegação por teclado
    document.body.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            const focusableElements = document.querySelectorAll('a, button, input, [tabindex]');
            const focusable = Array.prototype.filter.call(focusableElements, (element) => {
                return element.offsetWidth > 0 || element.offsetHeight > 0 || element === document.activeElement;
            });
            const index = focusable.indexOf(document.activeElement);
            if (e.shiftKey) {
                focusable[index === 0 ? focusable.length - 1 : index - 1].focus();
            } else {
                focusable[(index + 1) % focusable.length].focus();
            }
            e.preventDefault();
        }
    });
});
