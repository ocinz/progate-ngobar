import { useState } from "react";
function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div style={{ backgroundColor: "rgba(242, 234, 226, 1)", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ display: "flex", width: "600px", height: "450px", backgroundColor: "white", borderRadius: "10px" }}>
        <div>
          <img style={{ width: "300px", height: "450px", borderRadius: "10px 0 0 10px" }} src="images/image-product-desktop.jpg" alt="product" />
        </div>
        <div style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <h2 style={{ fontFamily: "Montserrat", fontStyle: "normal", fontWeight: "500", fontSize: "12px", color: "#6C7289" }}>PERFUME</h2>
          <h1
            style={{
              fontFamily: "Fraunces",
              fontStyle: "normal",
              fontWeight: "700",
              fontWize: "32px",
              color: "#1C232B",
              lineHeigh: "32px",
            }}
          >
            Gabrielle Essence Eau De Parfum
          </h1>
          <p
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "23px",
              color: "#6C7289",
            }}
          >
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div style={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
            <h1
              style={{
                fontFamily: "Fraunces",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "32px",
                lineHeight: "32px",
                color: "#3D8168",
              }}
            >
              $149.99
            </h1>
            <h3 style={{ fontFamily: "Montserrat", fontStyle: "normal", fontWeight: "500", fontSize: "13px", lineHeight: "23px", textDecorationLine: "line-through", color: "#6C7289" }}>$169.99</h3>
          </div>
          <button
            style={{
              background: isActive ? "#1A4032" : "#3D8168",
              borderRadius: "8px",
              width: "100%",
              height: "48px",
              border: "none",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "17px",
              color: "#FFFFFF",
            }}
            onClick={async () => {
              setIsActive(isActive ? false : true), 1000;
            }}
          >
            <img style={{ paddingRight: "10px" }} src="/images/icon-cart.svg" alt="cart" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
