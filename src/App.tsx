import './App.css';
import './components/Lotto.tsx';
import React, { useState } from 'react';
import Lotto from './components/Lotto.tsx';

const generateRandomNumbers = () => {
    const numbers = new Set<number>();
    while (numbers.size < 5) {
        const randomNumber = Math.floor(Math.random() * 32) + 5;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
};

const App: React.FC = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const handleNewNumbers = () => {
        setNumbers(generateRandomNumbers());
    };

    return (
        <div className="app">
            <button type='button' onClick={handleNewNumbers}>New numbers</button>
            <div className="lotto-balls">
                {numbers.map(number => (
                    <Lotto key={number} number={number}/>
                ))}
            </div>
        </div>
    );
};

export default App;
