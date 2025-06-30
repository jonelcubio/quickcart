import { Header } from "./Header"
import { Hero } from "./Hero"
import { ShopPreview } from "./ShopPreview"
import { PreFooter } from "./PreFooter"
import { Footer } from "./Footer"

export function Home() {
  return(
    <>
      <Header />
      <Hero />
      <ShopPreview />
      <PreFooter />
      <Footer />
    </>
  )
}