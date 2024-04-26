document.getElementById('generate-btn').addEventListener('click', function() {
    const wordsInput = document.getElementById('words').value;
    const wordsArray = wordsInput.split(',').map(word => word.trim());
    
    if (wordsArray.length === 0 || (wordsArray.length === 1 && wordsArray[0] === '')) {
        alert('Por favor, ingresa al menos una palabra.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    const randomWord = wordsArray[randomIndex];
    document.getElementById('random-word').innerText = randomWord;
});
