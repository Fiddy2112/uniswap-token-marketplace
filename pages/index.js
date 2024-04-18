import Image from "next/image";
import { Inter } from "next/font/google";
import Tokens from "./token";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      index
      <Tokens />
    </div>
  );
}
