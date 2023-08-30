import './globals.css'
import {Footer, Header} from "@/components";
import { Lato } from 'next/font/google'
import classes from "@/styles/main.module.scss";

const lato = Lato({
    weight: [ '400', '700', '900'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={classes.main}>
      <body suppressHydrationWarning={true} className={`${lato.className} ${classes.body}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
