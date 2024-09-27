import Image from "next/image";
import { Inter } from "next/font/google";
import Product from '../components/Product'
import { Provider } from "react-redux";
import { data } from "@/redux/Store";
import AddToCard from "@/components/AddToCard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<>
<Provider store={data}>
  <AddToCard/>
  <br/>
  <br/>
  <br/>
<Product/>
</Provider>
</>
  );
}
