import React, { useState, useEffect } from 'react';
import './FlagGame.css';

interface Country {
  name: string;
  flag: string;
  code: string;
}

const countries: Country[] = [
  { name: 'United States', flag: '🇺🇸', code: 'US' },
  { name: 'United Kingdom', flag: '🇬🇧', code: 'GB' },
  { name: 'Canada', flag: '🇨🇦', code: 'CA' },
  { name: 'Germany', flag: '🇩🇪', code: 'DE' },
  { name: 'France', flag: '🇫🇷', code: 'FR' },
  { name: 'Italy', flag: '🇮🇹', code: 'IT' },
  { name: 'Spain', flag: '🇪🇸', code: 'ES' },
  { name: 'Japan', flag: '🇯🇵', code: 'JP' },
  { name: 'Australia', flag: '🇦🇺', code: 'AU' },
  { name: 'Brazil', flag: '🇧🇷', code: 'BR' },
  { name: 'India', flag: '🇮🇳', code: 'IN' },
  { name: 'China', flag: '🇨🇳', code: 'CN' },
  { name: 'Russia', flag: '🇷🇺', code: 'RU' },
  { name: 'South Korea', flag: '🇰🇷', code: 'KR' },
  { name: 'Mexico', flag: '🇲🇽', code: 'MX' },
  { name: 'Netherlands', flag: '🇳🇱', code: 'NL' },
  { name: 'Sweden', flag: '🇸🇪', code: 'SE' },
  { name: 'Norway', flag: '🇳🇴', code: 'NO' },
  { name: 'Denmark', flag: '🇩🇰', code: 'DK' },
  { name: 'Finland', flag: '🇫🇮', code: 'FI' },
];

const FlagGame: React.FC = () => {
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [options, setOptions] = useState<Country[]>([]);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const generateQuestion = () => {
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    const otherCountries = countries.filter(country => country.name !== randomCountry.name);
    const shuffledOthers = otherCountries.sort(() => Math.random() - 0.5).slice(0, 3);
    const allOptions = [...shuffledOthers, randomCountry].sort(() => Math.random() - 0.5);
    
    setCurrentCountry(randomCountry);
    setOptions(allOptions);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowResult(false);
  };

  const handleAnswer = (selectedCountry: Country) => {
    setSelectedAnswer(selectedCountry.name);
    const correct = selectedCountry.name === currentCountry?.name;
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      setScore(score + 1);
    }
    
    setTotalQuestions(totalQuestions + 1);
    
    setTimeout(() => {
      if (totalQuestions + 1 >= 10) {
        setGameOver(true);
      } else {
        generateQuestion();
      }
    }, 2000);
  };

  const resetGame = () => {
    setScore(0);
    setTotalQuestions(0);
    setGameOver(false);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    generateQuestion();
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  if (gameOver) {
    return (
      <div className="game-container">
        <div className="game-over">
          <h1>🎉 Game Over! 🎉</h1>
          <div className="final-score">
            <h2>Final Score</h2>
            <div className="score-display">
              <span className="score-number">{score}</span>
              <span className="score-total">/ {totalQuestions}</span>
            </div>
            <div className="percentage">
              {Math.round((score / totalQuestions) * 100)}%
            </div>
          </div>
          <button className="reset-button" onClick={resetGame}>
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="game-container">
      <div className="header">
        <h1>🏁 Guess the Flag</h1>
        <div className="score-board">
          <span>Score: {score}</span>
          <span>Question: {totalQuestions + 1}/10</span>
        </div>
      </div>

      <div className="flag-display">
        <div className="flag-emoji">{currentCountry?.flag}</div>
        <h2>Which country does this flag belong to?</h2>
      </div>

      <div className="options-grid">
        {options.map((country, index) => (
          <button
            key={index}
            className={`option-button ${
              showResult
                ? country.name === currentCountry?.name
                  ? 'correct'
                  : selectedAnswer === country.name
                  ? 'incorrect'
                  : 'disabled'
                : ''
            }`}
            onClick={() => !showResult && handleAnswer(country)}
            disabled={showResult}
          >
            {country.name}
          </button>
        ))}
      </div>

      {showResult && (
        <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? '✅ Correct!' : '❌ Wrong!'}
          <div className="correct-answer">
            The correct answer is: <strong>{currentCountry?.name}</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlagGame; 