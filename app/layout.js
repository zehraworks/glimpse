import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="container w-2/3 mx-auto flex flex-col items-center">
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
