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
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("tie");
      return;
    }

    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
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
    setComputerChoice(computerSelection);
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
