import {
  BinanceIcon,
  BitcoinIcon,
  EthereumIcon,
  ShibuIcon,
  SolanaIcon,
} from "../svgs";

export const coinMap: {
  [key: string]: {
    title: string;
    price: string;
    gain: number;
    icon: typeof BitcoinIcon;
  };
} = {
  binancecoin: {
    title: "Binance Coin",
    price: "291021.00",
    gain: -20,
    icon: BinanceIcon,
  },
  bitcoin: {
    title: "Bitcoin",
    price: "291021.00",
    gain: 10,
    icon: BitcoinIcon,
  },
  ethereum: {
    title: "Ethereum",
    price: "291021.00",
    gain: 7,
    icon: EthereumIcon,
  },
  "shiba-inu": {
    title: "Shiba Inu",
    price: "291021.00",
    gain: 1,
    icon: ShibuIcon,
  },
  solana: {
    title: "Solana",
    price: "291021.00",
    gain: -0.1,
    icon: SolanaIcon,
  },
};
