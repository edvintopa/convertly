import { useState } from 'react';
import CurrencyConverterDock from "../../components/CurrencyConverterDock/CurrencyConverterDock"
import ResultDisplay from "../../components/ResultDisplay/ResultDisplay"

function Home() {
  const [amount, setAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('SEK');

  //load with api
  const currencies = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'SEK', name: 'Swedish Krona' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'CHF', name: 'Swiss Franc' },
    { code: 'NOK', name: 'Norwegian Krone' },
    { code: 'DKK', name: 'Danish Krone' }
  ];

  return (
    <>
      <ResultDisplay
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        convertedAmount={"?"}
      />

      <CurrencyConverterDock
        amount={amount}
        setAmount={setAmount}
        fromCurrency={fromCurrency}
        setFromCurrency={setFromCurrency}
        toCurrency={toCurrency}
        setToCurrency={setToCurrency}
        currencies={currencies}
      />
    </>
  )
}

export default Home