import React, { useEffect, useState } from "react";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";
import Home from "./Home";
import "./App.css";


const App: React.FC = () => {
  const [ready, setReady] = useState<boolean>(false);
  const [useTestAadhaar, setUseTestAadhaar] = useState<boolean>(false);

  useEffect(() => {
    setReady(true);
  }, []);

  

  return (
    <>
      {ready ? (
        <AnonAadhaarProvider
          useTestAadhaar={useTestAadhaar}
          appName="Anon Aadhaar"
        >
          <Home setUseTestAadhaar={setUseTestAadhaar} useTestAadhaar={useTestAadhaar} /></AnonAadhaarProvider>
      ) : null}
    </>
  );
}

export default App;