// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
    	<Html>
      		<Head>
    			<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

				
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-4SN8SDRVG4" />
				<script dangerouslySetInnerHTML={{
            		__html: `
              			window.dataLayer = window.dataLayer || [];
              			function gtag(){dataLayer.push(arguments);}
              			gtag('js', new Date());
              			gtag('config', 'G-4SN8SDRVG4', { page_path: window.location.pathname });
            			`,
          			}}
        		/>
      		</Head>
      		<body>
        		<Main />
        		<NextScript />
      		</body>
    	</Html>
  	)
}
