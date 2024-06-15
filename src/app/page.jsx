import Link from "next/link";
import First from "./components/layers/first";
import Second from "./components/layers/second";
import Third from "./components/layers/third";
import Image from 'next/image';
import prisma from "../lib/prisma"

export default function Home() {

  return (

    <>
      <First />
      <Second />
      <Third />
    </>


  );
}
