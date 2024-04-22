import Image from "next/image";
import { Inter } from "next/font/google";
import Tokens from "./token";
import { Card, Footer, Header, HeroSection } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#1A1A1A]">
      <Header />
      <HeroSection />
      {/*
      <Card />
      <Footer /> */}
    </div>
  );
}
