import { useEffect, useState } from "react";
import { getMortgageData } from "./services/api";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    getMortgageData().then(setData);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">Backend Response: {data}</h1>
    </div>
  );
}

export default App;
