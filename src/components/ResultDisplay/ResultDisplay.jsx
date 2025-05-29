import { motion } from 'framer-motion';

function ResultDisplay({ amount, fromCurrency, toCurrency, convertedAmount }) {
    
    return (
        <div className="text-center py-8">
            <motion.p 
                className="text-5xl"
                key={amount}
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 0.2 }}
                style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            >
                <span className="text-8xl font-bold">{amount}</span>{" "}
                <span>{fromCurrency}</span> = {" "}
                <span className="text-8xl font-bold">{convertedAmount}</span>{" "}
                <span>{toCurrency}</span>
            </motion.p>
        </div>
    );
}

export default ResultDisplay;