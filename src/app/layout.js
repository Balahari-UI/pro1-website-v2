import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TopButton from "./components/ui/TopButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Pro 1 Health System",
  description: "Top medical coding company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning={true}>
      <body className="antialiased" suppressHydrationWarning={true}>
        <Header />
        <TopButton />
        {/* <QueryProvider>{children}</QueryProvider> */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
