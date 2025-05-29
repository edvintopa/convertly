import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function ResultDisplay({ amount, fromCurrency, toCurrency, convertedAmount }) {
    const [debouncedAmount, setDebouncedAmount] = useState(amount);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedAmount(amount);
        }, 300); // Wait 300ms after user stops typing

        return () => clearTimeout(timer);
    }, [amount]);
    
    return (
        <div className="text-center py-8">
            <motion.p 
                className="text-5xl"
                key={debouncedAmount}
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 0.2 }}
                style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            >
                <span className="text-8xl font-bold">{debouncedAmount}</span>{" "}
                <span>{fromCurrency}</span> = {" "}
                <span className="text-8xl font-bold">{convertedAmount}</span>{" "}
                <span>{toCurrency}</span>
            </motion.p>
        </div>
    );
}

export default ResultDisplay;