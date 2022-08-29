import { Activity, EthereumIcon } from "../svgs";
import AssetCard from "../components/AssetCard";
import { useQuery } from "react-query";
import { coinMap } from "../components/CoinMap";
import fetchData from "../services/coin-services";

interface defaultDataType {
  slug: string;
  tvl: string;
  pairedAssetSlugs: string[];
}

function AssetPage() {
  const { isLoading, isError, data, error } = useQuery("coins", fetchData);

  if (isLoading) {
    return (
      <>
        <span>Loading...</span>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <span>Try reloading..</span>
      </>
    );
  }
  return (
    <div className="w-full min-h-[100vh] bg-[#14172B] pt-[100px]">
      <div className="font-medium text-white flex items-center gap-4 text-[16px] ml-6 mb-10">
        <Activity />
        Trending Assets
      </div>
      <div className="flex justify-evenly items-center gap-10 flex-wrap">
        {data &&
          data.map((item: defaultDataType) => {
            var temp;
            if (!(item.slug in coinMap)) {
              temp = {
                coinTitle: item.slug,
                coinPrice: "91921",
                price: "60,000",
                gainLoss: -8.1,
                CoinIcon: EthereumIcon,
                popular: item.pairedAssetSlugs.map(
                  (asset: string) => coinMap[asset]?.icon || EthereumIcon
                ),
              };
            } else {
              temp = {
                coinTitle: coinMap[item.slug].title,
                coinPrice: "91921",
                price: item.tvl,
                gainLoss: -8.1,
                CoinIcon: coinMap[item.slug].icon,
                popular: item?.pairedAssetSlugs?.map(
                  (asset: string) => coinMap[asset]?.icon || EthereumIcon
                ),
              };
            }
            return <AssetCard {...temp} key={Math.random()} />;
          })}
      </div>
    </div>
  );
}
export default AssetPage;
