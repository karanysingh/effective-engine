const API = "https://trending-assets-api.onrender.com/trendingAssets"

const fetchData = async () => {
    try {
      let res = await fetch(API);
      let data = await res.json();
      return data;
    } catch (e) {
      return e;
    }
  };
export default fetchData;