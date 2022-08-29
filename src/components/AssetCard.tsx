import { BitcoinIcon } from "../svgs";
import * as React from "react";
import "../index.css"
interface AssetProps {
    coinTitle: string,
    coinPrice: string,
    price: string,
    gainLoss: number,
    CoinIcon: typeof BitcoinIcon,
    popular: typeof BitcoinIcon[],
}

const AssetCard = (props: AssetProps) => {
    const { coinTitle, coinPrice, price, gainLoss, CoinIcon, popular } = props
    const growing = gainLoss > 0
    return (
      <div className="w-[290px] min-h-[350px] p-2 relative font-medium text-[12px]">
        <div className="rounded-[100%] bg-[#14172B] p-2 absolute left-[32%] top-0">
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(234, 179, 0, 0.06) 100%)",
            }}
            className="rounded-[90%] p-4 flex justify-center items-center"
          >
            <CoinIcon />
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(46, 49, 73, 0.1) 107.43%)",
            boxShadow: "#c3b1b130 0px -1px 0.1px 1px",
          }}
          className="flex flex-col justify-center items-center p-2 pt-10 mt-12 h-[350px] rounded-[20px]"
        >
          <div className="cornerRadiis cornerRadiis-left"></div>
          <div className="cornerRadiis cornerRadiis-right"></div>
          <h1 className="text-[#737BAE] px-4 py-3">{coinTitle}</h1>
          <div className="w-full bg-[#14172B] text-[#ECF0FF] text-center px-4 py-3 rounded-[17px]">
            ${coinPrice}{" "}
            <span
              className={`${
                growing ? "text-[#00FFA3]" : "text-[#FF4D4D]"
              } absolute ml-2`}
            >
              {growing && "+"}
              {gainLoss}%
            </span>
          </div>
          <h1 className="text-[#5A5F7D] px-4 mb-3 mt-2">Price</h1>
          <div className="w-full bg-[#14172B] text-[#ECF0FF] text-center px-4 py-3 rounded-[17px]">
            ${price}
          </div>
          <h1 className="text-[#5A5F7D] px-4 mb-3 mt-2">TVL</h1>
          <div className="flex justify-center items-center bg-[#14172B] rounded-[30px] px-4">
            {popular.map((CoinIconIt) => (
              <CoinIconIt className="py-2" />
            ))}
          </div>
          <h1 className="text-[#737BAE] px-4 py-2">Popular pairs</h1>
        </div>
      </div>
    );
}

export default AssetCard;