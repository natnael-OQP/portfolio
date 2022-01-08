import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" >
				<Head lang="en">
					<link rel="manifest" href="/manifest.json" />
					<link rel="apple-touch-icon" href="/icon.png"></link>
					<meta name="theme-color" content="#fff" />
					<link rel="preconnect" href="https://fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
					<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"/>
                </Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
