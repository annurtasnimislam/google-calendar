import { useState } from "react";
import { Home, Layout } from "./components";

function App() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  return (
    <Layout currentMonth={currentMonth} setCurrentMonth={setCurrentMonth}>
      <Home currentMonth={currentMonth} />
    </Layout>
  );
}

export default App;
