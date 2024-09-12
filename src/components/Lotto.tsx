import './Lotto.css';
import React from 'react';

const Lotto: React.FC<{ number: number }> = ({ number }) => (
    <div className="lotto-ball">{number}</div>
);

export default Lotto;