import Head from 'next/head'
import Layout from '../components/Layout'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return ( 
		<>
			<Head>
				<title>Gurshan Jhinger</title>
				<meta charSet="UTF-8" />
				<meta name="description" content="Gurshan Jhinger is a Computer Science student at Simon Fraser University specializing in designing and building web applications." />
				<meta name="keywords" content="Gurshan, Jhinger, Software, Engineer, Developer, SFU" />
				<link rel="icon" href="/logo.svg" />
			</Head>
			
			<Analytics />
			<Layout>
				<Component {...pageProps} /> 
			</Layout>
		</>
    )
}

export default MyApp
