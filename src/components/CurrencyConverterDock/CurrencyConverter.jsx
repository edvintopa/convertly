import { useState } from 'react';
import AmountInput from './AmountInput';
import DropDownSelector from './DropDownSelector';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

function CurrencyConverterDock() {
    const [amount, setAmount] = useState('');
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

    const handleSwapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    return (
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-6">

            <div className="flex items-end gap-4">
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
                    <button
                        onClick={handleSwapCurrencies}
                        className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30
                        hover:bg-blue-100 dark:hover:bg-blue-900/50"
                    >
                        <ArrowsRightLeftIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </button>
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