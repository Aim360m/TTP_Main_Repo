let guess, winningNumber;


function generateWinningNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle() {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}


    function playersGuess() {
         guess = parseInt(document.getElementById('userGuess').value);
    return isNaN(guess) ? null : guess;
    }
    function pastGuesses() {
        return guesses.join(', ');
    }
    function winningNumber() {
        return winningNumber;
    }
    function difference() {
        const playerGuess = playersGuess();
    return Math.abs(playerGuess - winningNumber);
    }
    function isLower() {
        const playerGuess = playersGuess();
    return playerGuess < winningNumber;
    }
    function playersGuessSubmission() {
        const guess = playersGuess();
    document.getElementById('userGuess').value = '';
    const result = checkGuess(guess);
    document.getElementById('message').textContent = result;
    document.getElementById('pastGuesses').textContent = `Past Guesses: ${pastGuesses()}`;
    }
    function checkGuess() {
        if (guess === null || guess < 1 || guess > 100) {
            return 'Please enter a valid number between 1 and 100.';
        }
    
        if (guess === winningNumber) {
            return `Congratulations! You guessed the number ${winningNumber} in ${guesses.length} attempts!`;
        }
    
        if (guesses.includes(guess)) {
            return 'You have already guessed that number.';
        }
    
        guesses.push(guess);
    
        if (guesses.length >= guessLimit) {
            return `Game Over. The winning number was ${winningNumber}.`;
        }
    
        const diff = difference();
        let feedback = diff < 10 ? 'You\'re burning up!' :
            diff < 25 ? 'You\'re warm.' :
            diff < 50 ? 'You\'re  chilly.' : 'You\'re Freezing cold!';
    
        feedback += isLower() ? ' Try a higher number.' : ' Try a lower number.';
        return feedback;
    }
    function newGame() {
        winningNumber = generateWinningNumber(1, 100);
    guesses = [];
    guessLimit = 3;
    document.getElementById('message').textContent = '';
    document.getElementById('pastGuesses').textContent = '';
    }
    function provideHint() {
        const hintCount = 2;
    const hints = [winningNumber, generateWinningNumber(1, 100), generateWinningNumber(1, 100)];
    const shuffledHints = shuffle(hints);
    document.getElementById('message').textContent = `One of these numbers is the winning number: ${shuffledHints.join(', ')}.`;
    }