import "./App.css";
import AssetPage from "./pages/AssetPage";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AssetPage />
      </QueryClientProvider>
    </>
  );
}

export default App;
