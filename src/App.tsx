import { useEffect, useState } from 'react';
import './App.css';
import { Scoreboard } from './Scoreboard';

type Selection = '' | 'rock' | 'paper' | 'scissor';
const selections: Selection[] = ['rock', 'paper', 'scissor'];
const maxScore = 5;
function App() {
    const [playerSelection, setPlayerSelection] = useState<Selection>('');
    const [computerSelection, setComputerSelection] = useState<Selection>('');
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [message, setMessage] = useState('');

    function onRockClick() {
        setPlayerSelection('rock');
        const randomIndex = Math.floor(Math.random() * selections.length);
        const newComputerSelection = selections[randomIndex];
        setComputerSelection(newComputerSelection);
        if (newComputerSelection === 'paper') {
            setComputerScore((currentScore) => currentScore + 1);
        }
        if (newComputerSelection === 'scissor') {
            setPlayerScore((currentScore) => currentScore + 1);
        }
    }

    function onPaperClick() {
        setPlayerSelection('paper');
        const randomIndex = Math.floor(Math.random() * selections.length);
        const newComputerSelection = selections[randomIndex];
        setComputerSelection(newComputerSelection);
        if (newComputerSelection === 'rock') {
            setPlayerScore((currentScore) => currentScore + 1);
        }
        if (newComputerSelection === 'scissor') {
            setComputerScore((currentScore) => currentScore + 1);
        }
    }

    function onScissorClick() {
        setPlayerSelection('scissor');
        const randomIndex = Math.floor(Math.random() * selections.length);
        const newComputerSelection = selections[randomIndex];
        setComputerSelection(newComputerSelection);
        if (newComputerSelection === 'rock') {
            setComputerScore((currentScore) => currentScore + 1);
        }
        if (newComputerSelection === 'paper') {
            setPlayerScore((currentScore) => currentScore + 1);
        }
    }

    function winner() {
        if (playerScore === maxScore) {
            setMessage('Player won');
        }
        if (computerScore === maxScore) {
            setMessage('Computer won');
        }
    }

    function onReset() {
      setComputerScore(0)
      setComputerSelection('')
      setPlayerScore(0)
      setPlayerSelection('')
      setMessage('')
      
    }

    useEffect(() => {
        winner();
    }, [playerScore, computerScore]);

    return (
        <>
            <Scoreboard message={message} playerScore={playerScore} computerScore={computerScore} />
            <div>
                <h2>Player Selection: {playerSelection}</h2>
                <h2>Computer Selection: {computerSelection}</h2>
            </div>
            <div>
                <button onClick={onRockClick} disabled={playerScore === maxScore || computerScore === maxScore}>
                    Rock
                </button>
                <button onClick={onPaperClick} disabled={playerScore === maxScore || computerScore === maxScore}>
                    Paper
                </button>
                <button onClick={onScissorClick} disabled={playerScore === maxScore || computerScore === maxScore}>
                    Scissor
                </button>
                <button onClick={onReset} disabled={playerScore < maxScore && computerScore < maxScore}>
                    Reset
                </button>
            </div>
        </>
    );
}

export default App;
