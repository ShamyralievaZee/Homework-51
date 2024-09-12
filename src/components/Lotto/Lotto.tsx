import './Lotto.css';

interface LottoProps {
    number: number;
}

const Lotto: React.FC<LottoProps> = ({ number }) => {
    return (
        <div className="lotto-ball">
            {number}
        </div>
    );
};

export default Lotto;