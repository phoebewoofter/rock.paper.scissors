import React, { useState } from "react";
import './Game.css';

function Game() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");

  const choices = ["rock", "paper", "scissors"];

  const getComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    return randomChoice;
  };

  const determineWinner = () => {
    if (playerChoice === computerChoice) {
      setResult("tie");
      return;
    }

    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult("player");
      setPlayerScore(prev => prev + 1);
    } else {
      setResult("computer");
      setComputerScore(prev => prev + 1);
    }
  };

  const handleChoice = (choice) => {
    setPlayerChoice(choice);
    const computerSelection = getComputerChoice();
    determineWinner(choice, computerSelection);
  };

  return (
    <div className="game-container">
      <h3>
        {result === "player" ? "You win!" : 
        result === "tie" ? "It's a tie!" : 
        result === "computer" ? "You lost" : ""}
      </h3>
      <div className="player-computer">
        <div>
            <h4>You</h4>
            <p>
                {playerChoice === "rock" ? "✊" :
                playerChoice === "paper" ? "✋" :
                playerChoice === "scissors" ? "✌️" : ""}
            </p>
        </div>
        <div>
            <h4>Computer</h4>
            <p>
                {computerChoice === "rock" ? "✊" :
                computerChoice === "paper" ? "✋" :
                computerChoice === "scissors" ? "✌️" : ""}
            </p>
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => handleChoice("rock")} className="rock">✊</button>
        <button onClick={() => handleChoice("paper")} className="paper">✋</button>
        <button onClick={() => handleChoice("scissors")} className="scissors">✌️</button>
      </div>

      <p>Player Score: {playerScore} | Computer Score: {computerScore}</p>
    </div>
  );
}

export default Game;
