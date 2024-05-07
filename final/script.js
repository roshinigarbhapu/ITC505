document.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('board');
    const squares = [];
    let moves = 0; // Initialize moves count
    let timerInterval; // Declare timerInterval outside of functions

    // Create the game board
    for (let i = 0; i < 25; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('click', () => toggleSquare(i));
        squares.push(square);
        board.appendChild(square);
    }

    // Move the square to the center
    const centerIndex = Math.floor(squares.length / 2);
    squares[centerIndex].classList.add('centered');

    // Function to toggle a square and its neighbors
    function toggleSquare(index) {
        const row = Math.floor(index / 5);
        const col = index % 5;

        toggleCell(row, col);
        toggleCell(row - 1, col);
        toggleCell(row + 1, col);
        toggleCell(row, col - 1);
        toggleCell(row, col + 1);

        // Increment moves count
        moves++;
        // Update moves count on the page
        updateMovesCount();

        // Check for win condition
        if (isWin()) {
            window.alert(`You win!`);
            generateRandomBoard();
            resetTimer();
            // Reset moves count
            moves = 0;
            // Update moves count on the page
            updateMovesCount();
        }
    }

    // Function to toggle the color of a cell
    function toggleCell(row, col) {
        if (row >= 0 && row < 5 && col >= 0 && col < 5) {
            const index = row * 5 + col;
            squares[index].classList.toggle('off');
        }
    }

    // Function to generate a random solvable board
    function generateRandomBoard() {
        for (const square of squares) {
            square.classList.remove('off');
        }

        // Click random squares to generate a solvable board
        for (let i = 0; i < 25; i++) {
            if (Math.random() < 0.5) {
                toggleSquare(i);
            }
        }
    }

    // Function to check for win condition
    function isWin() {
        return squares.every(square => square.classList.contains('off'));
    }

    // Get reference to the New Game button
    const newGameButton = document.getElementById('newGameButton');

    // Function to start a new game
    function startNewGame() {
        generateRandomBoard();
        resetTimer(); // Reset the timer
        clearInterval(timerInterval); // Clear any existing interval to prevent multiple timers
        timerInterval = setInterval(updateTimer, 1000); // Start the timer again
        // Reset moves count
        moves = 0;
        // Update moves count on the page
        updateMovesCount();
    }

    // Add event listener to the New Game button
    newGameButton.addEventListener('click', startNewGame);

    // Function to update moves count on the page
    function updateMovesCount() {
        const movesCountElement = document.getElementById('movesCount');
        movesCountElement.textContent = moves;
    }

    // Timer functionality
    const timerDisplay = document.getElementById('timer');
    let timerSeconds = 0;
    let timerMinutes = 0;
    let timerHours = 0;

    function updateTimer() {
        timerSeconds++;
        if (timerSeconds === 60) {
            timerSeconds = 0;
            timerMinutes++;
            if (timerMinutes === 60) {
                timerMinutes = 0;
                timerHours++;
            }
        }

        const formattedHours = timerHours.toString().padStart(2, '0');
        const formattedMinutes = timerMinutes.toString().padStart(2, '0');
        const formattedSeconds = timerSeconds.toString().padStart(2, '0');

        timerDisplay.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timerSeconds = 0;
        timerMinutes = 0;
        timerHours = 0;
        timerDisplay.textContent = '00:00:00';
    }

    // Start the timer automatically
    startTimer();
    
    function startTimer() {
        timerInterval = setInterval(updateTimer, 1000);
    }
});
