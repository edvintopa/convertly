import AmountInput from './AmountInput';
import DropDownSelector from './DropDownSelector';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

function CurrencyConverterDock({ amount, setAmount, fromCurrency, setFromCurrency, toCurrency, setToCurrency, currencies }) {

    const handleSwapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    return (
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-6">

            <div className="flex flex-col md:flex-row items-stretch md:items-end gap-4">
                <div className="flex-1">
                    <AmountInput
                        label="Amount"
                        value={amount}
                        onChange={setAmount}
                        placeholder="Enter amount"
                        />
                </div>
                        

                <div className="flex-1">
                    <DropDownSelector
                        label="From"
                        value={fromCurrency}
                        onChange={setFromCurrency}
                        options={currencies}
                    />
                </div>

                <div className="flex-shrink-1">
                    <motion.button
                        onClick={handleSwapCurrencies}
                        whileTap={{ rotate: 180, scale: 0.8 }}
                        className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50"
                    >
                        <ArrowsRightLeftIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 rotate-90 md:rotate-0" />
                    </motion.button>
                </div>

                <div className="flex-1">
                    <DropDownSelector
                        label="To"
                        value={toCurrency}
                        onChange={setToCurrency}
                        options={currencies}
                    />
                </div>
            
            </div>
        
        </div>
    );
}

export default CurrencyConverterDock;