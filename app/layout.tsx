import Cursor from "@/components/layout/Cursor";
import Header from "@/components/layout/Header";
import ScrollLoco from "@/components/layout/ScrollLoco";
import type { Metadata } from "next";
import "../scss/main.scss";
import { AppContextProvider } from "./context/AppContext";

export const metadata: Metadata = {
  title: "Hugues Leger - creatif developpeur",
  description: "front-end creatif developpeur",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <script
          src="https://kit.fontawesome.com/eb1ce33b69.js"
          crossOrigin="anonymous"
          async
          defer
        ></script>
        <meta name="theme-color" content="#171717" />
      </head>
      <body>
        <div id="app" className="app">
          <AppContextProvider>
            <Cursor />
            <Header />
            <ScrollLoco>{children}</ScrollLoco>
          </AppContextProvider>
        </div>
      </body>
    </html>
  );
}
