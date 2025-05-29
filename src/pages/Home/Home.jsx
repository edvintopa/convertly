import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchCurrencies } from '../../utils/exchangeApiUtils';
import CurrencyConverterDock from "../../components/CurrencyConverterDock/CurrencyConverterDock"
import ResultDisplay from "../../components/ResultDisplay/ResultDisplay"

// Animation variables "keys"
const resultDisplayVariants = {
  hidden: {
    opacity: 0,
    y: -20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 }
  }
};

const dockVariants = {
  noResult: {
    y: 0,
    transition: { duration: 0.1 }
  },
  result: {
    y: 20,
    transition: { duration: 0.1 }
  }
};

function Home() {
  const [amount, setAmount] = useState('');
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('SEK');

  useEffect(() => {
    const loadCurrencies = async () => {
      const currencyData = await fetchCurrencies();
      setCurrencies(currencyData);
    };

    loadCurrencies();
  }, []);

  const hasAmount = amount && amount !== '';

  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-8 px-4">
      <AnimatePresence>
        {hasAmount && (
          <motion.div
            variants={resultDisplayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ResultDisplay
              amount={amount}
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              convertedAmount={"?"}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={dockVariants}
        animate={hasAmount ? "result" : "noResult"}
      >
        <CurrencyConverterDock
          amount={amount}
          setAmount={setAmount}
          fromCurrency={fromCurrency}
          setFromCurrency={setFromCurrency}
          toCurrency={toCurrency}
          setToCurrency={setToCurrency}
          currencies={currencies}
        />
      </motion.div>
    </div>
  )
}

export default Home