import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function ResultDisplay({ amount, fromCurrency, toCurrency, convertedAmount }) {
    const [debouncedData, setDebouncedData] = useState({
        amount,
        convertedAmount
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedData({
                amount,
                convertedAmount
            });
        }, 300); // Wait 300ms after user stops typing

        return () => clearTimeout(timer);
    }, [amount, convertedAmount]);
    
    return (
        <div className="text-center py-8">
            <motion.p 
                className="text-5xl"
                key={`${debouncedData.amount}-${debouncedData.convertedAmount}`}
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 0.2 }}
                style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            >
                <span className="text-8xl font-bold">{debouncedData.amount}</span>{" "}
                <span>{fromCurrency}</span> = {" "}
                <span className="text-8xl font-bold">{debouncedData.convertedAmount}</span>{" "}
                <span>{toCurrency}</span>
            </motion.p>
        </div>
    );
}

export default ResultDisplay;