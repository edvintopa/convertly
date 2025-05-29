import axios from 'axios';

const CURRENCIES_API_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";  // Names and codes
const CURRENCY_RATES_API_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"; // Values in relation to EUR

export const fetchCurrencies = async () => {
    try {
        const response = await axios.get(CURRENCIES_API_URL);

        // Map the data to match the previously used array in Home.jsx
        const currencies = Object.entries(response.data).map(([code, name]) => ({
            code: code.toUpperCase(),
            name: name
        }));

        return currencies;
    } catch (error) {
        console.error("Error fetching currencies:", error);

        // Return the previously used array in Home.jsx
        return [
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
    }
}

export const fetchRates = async () => {
    try {
        const response = await axios.get(CURRENCY_RATES_API_URL);
        return response.data.eur;
    } catch (error) {
        console.error("Error fetching exchange rates", error);
    }
}

export const convertCurrency = (amount, fromCurrency, toCurrency, rates) => {
    
    // Validate parameters
    if (!amount || (amount <= 0) || !fromCurrency || !toCurrency || !rates ) { return; }

    // Api sends codes in lowercase
    const fromCode = fromCurrency.toLowerCase();
    const toCode = toCurrency.toLowerCase();

    // 1 banana = 1 banana
    if (fromCode === toCode) { return amount; }

    // From EUR, multiply by target rate
    if (fromCode === "eur") {
        const rate = rates[toCode];
        return (amount * rate).toFixed(2);
    }

    // To EUR, divide by source rate
    if (toCode === "eur") {
        const rate = rates[fromCode];
        return (amount / rate).toFixed(2);
    }

    // Other conversions
    const fromRate = rates[fromCode];
    const toRate = rates[toCode];

    const eur = amount / fromRate;
    return (eur * toRate).toFixed(2);
}