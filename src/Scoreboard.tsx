type ScoreboardProps = {
    message: string;
    playerScore: number;
    computerScore:number;
}
export function Scoreboard({message,playerScore,computerScore}: ScoreboardProps) {
    return (
        <div>
            <h1>Scoreboard</h1>
            <h2>{message}</h2>
            <h3>Player {playerScore}</h3>
            <h3>Computer {computerScore}</h3>
        </div>
    );
}
