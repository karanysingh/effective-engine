import './App.css';
import { Activity, BinanceIcon, BitcoinIcon, EthereumIcon, ShibuIcon, SolanaIcon } from "./svgs"
import AssetCard from './components/AssetCard';

function App() {
  return (
    <>
      <div className="w-full min-h-[100vh] bg-[#14172B] pt-[100px]">
        <div className="font-medium text-white flex items-center gap-4 text-[16px] ml-6 mb-10"><Activity />Trending Assets</div>
        <div className='flex justify-evenly items-center gap-10 flex-wrap'>
          <AssetCard coinTitle={'Bitcoin (BTC)'} coinPrice={'31,812.80'} price={'60,000'} gainLoss={10} CoinIcon={BitcoinIcon} popular={[ShibuIcon, SolanaIcon, BinanceIcon]} />
          <AssetCard coinTitle={'Solana (SQL)'} coinPrice={'32.80'} price={'60,000'} gainLoss={-12.32} CoinIcon={SolanaIcon} popular={[SolanaIcon, EthereumIcon, BinanceIcon]} />
          <AssetCard coinTitle={'Ethereum (ETH)'} coinPrice={'1,466.45'} price={'60,000'} gainLoss={-11.93} CoinIcon={EthereumIcon} popular={[BinanceIcon, SolanaIcon, ShibuIcon]} />
          <AssetCard coinTitle={'Binance USD (BUSD)'} coinPrice={'1.00'} price={'60,000'} gainLoss={0.26} CoinIcon={BinanceIcon} popular={[SolanaIcon, SolanaIcon, ShibuIcon]} />
          <AssetCard coinTitle={'Binance USD (BUSD)'} coinPrice={'0.00000001948'} price={'60,000'} gainLoss={-8.1} CoinIcon={ShibuIcon} popular={[SolanaIcon, SolanaIcon, BinanceIcon]} />
        </div>

      </div>
    </>
  );
}

export default App;
