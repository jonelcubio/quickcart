import { Header } from "./Header"
import { Hero } from "./Hero"
import { Shop } from "./Shop"
import { PreFooter } from "./PreFooter"
import { Footer } from "./Footer"

export function Home() {
  return(
    <>
      <Header />
      <Hero />
      <Shop />
      <PreFooter />
      <Footer />
    </>
  )
}