import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WebRouter } from "./router";
import { MovieProvider } from "./context/MovieContext";

const queryClient = new QueryClient();

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <WebRouter />
        </QueryClientProvider>
      </div>
    </MovieProvider>
  );
}

export default App;
