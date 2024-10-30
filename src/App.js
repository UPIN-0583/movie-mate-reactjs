import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {WebRouter} from "./router";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
        <QueryClientProvider client={queryClient}>
            <WebRouter />
        </QueryClientProvider>
    </div>
  );
}

export default App;
