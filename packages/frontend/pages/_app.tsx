import type { AppProps } from "next/app";
import Head from "next/head";

import { Layout } from "../src/components/layout";
import "../styles/globals.css";
import {  basicREMCSS } from "../src/constants/styling";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<title>Himanshu</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link href="/favicon.png" rel="shortcut icon" type="image/x-icon"></link>
				<style
					dangerouslySetInnerHTML={{
						__html: basicREMCSS,
					}}
				/>

			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}


export default MyApp;
