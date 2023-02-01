import { AppRouter } from "@components";
import { withLayout } from "./components/Container/Layout";

function App() {
  return <AppRouter />;
}

export default withLayout(App);
