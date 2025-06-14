import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchCurrencies, fetchRates, convertCurrency } from '../../utils/exchangeApiUtils';
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
  const [currencies, setCurrencies] = useState([]);
  const [rates, setRates] = useState([]);
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('SEK');
  const [convertedAmount, setConvertedAmount] = useState('');

  useEffect(() => {
    const loadCurrencies = async () => {
      const currencyData = await fetchCurrencies();
      setCurrencies(currencyData);
    };

    const loadRates = async () => {
      const rateData = await fetchRates();
      setRates(rateData);
    }

    loadCurrencies();
    loadRates();
  }, []);

  useEffect(() => {
    const result = convertCurrency(amount, fromCurrency, toCurrency, rates);
    setConvertedAmount(result);
  }, [amount, fromCurrency, toCurrency]);

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
              convertedAmount={convertedAmount}
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