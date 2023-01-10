import { useState } from "react";
import { FavContext } from "../context/FavContext";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const [favContext, setFavContext] = useState([]);
  return (
    <FavContext.Provider value={{ favContext, setFavContext }}>
      <Component {...pageProps} />
    </FavContext.Provider>
  );
}

export default MyApp;
