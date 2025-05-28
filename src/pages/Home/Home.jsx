import CurrencyConverterDock from "../../components/CurrencyConverterDock/CurrencyConverter"
import ResultDisplay from "../../components/ResultDisplay/ResultDisplay"

function Home() {
  return (
    <>
        <ResultDisplay 
          amount={10}
          fromCurrency={"SEK"}
          toCurrency={"EUR"}
          convertedAmount={100}/>
        <CurrencyConverterDock />
    </>
  )
}

export default Home