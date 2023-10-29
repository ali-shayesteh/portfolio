import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ali Shayesteh | Frontend Engineer Reactjs Nextjs",
  description:
    "I'm a frontend engineer, specialized in Javascript, Reactjs, Nextjs, performance enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
