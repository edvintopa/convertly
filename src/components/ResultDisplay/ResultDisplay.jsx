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
            {/* Mobile*/}
            <div className="block md:hidden">
                <motion.div
                    key={`mobile-${debouncedData.amount}-${debouncedData.convertedAmount}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                >
                    <div className="text-2xl">
                        <span className="text-4xl font-bold">{debouncedData.amount}</span>{" "}
                        <span className="text-xl">{fromCurrency}</span>
                    </div>
                    <div className="text-xl text-gray-600 dark:text-gray-400">=</div>
                    <div className="text-2xl">
                        <span className="text-4xl font-bold">{debouncedData.convertedAmount}</span>{" "}
                        <span className="text-xl">{toCurrency}</span>
                    </div>
                </motion.div>
            </div>

            {/* Desktop */}
            <motion.p 
                className="hidden md:block text-5xl"
                key={`desktop-${debouncedData.amount}-${debouncedData.convertedAmount}`}
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