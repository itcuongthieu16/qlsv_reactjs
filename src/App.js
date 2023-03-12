import { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { Layout, Siders } from "./components";




function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div>
      {
        loading ? <div className="flex items-center justify-center h-screen"><PuffLoader color="#001529" size={100} loading={loading} /></div> :
          <Layout />
      }
      {/* <Siders/> */}
    </div>
  );
}

export default App;


