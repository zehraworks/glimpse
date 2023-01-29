import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../styles/globals.css";
import { Nunito } from "@next/font/google";

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={font.className}>
        <div className="container w-2/3 min-h-screen mx-auto flex flex-col items-center">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
