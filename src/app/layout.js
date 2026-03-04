import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TopButton from "./components/ui/TopButton";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
export const metadata = {
  title: "Pro 1 Health System",
  description: "Top medical coding company",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={poppins.variable}
      suppressHydrationWarning={true}
    >
      <body
        className={`${poppins.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        <TopButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
