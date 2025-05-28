function ResultDisplay({ amount, fromCurrency, toCurrency, convertedAmount }) {
    return (
        <div className="text-center py-8">
            <p className="text-5xl">
                <span className="text-8xl font-bold">{amount}</span>{" "}
                <span>{fromCurrency}</span> = {" "}
                <span className="text-8xl font-bold">{convertedAmount}</span>{" "}
                <span>{toCurrency}</span>
            </p>
        </div>
    );
}

export default ResultDisplay;