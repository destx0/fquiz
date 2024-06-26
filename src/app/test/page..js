import Head from "next/head";

export default function Test() {
	return (
		<>
			<Head>
				<title>Test Page</title>
				<meta name="description" content="This is a test page." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-col items-center justify-center min-h-screen py-2">
				<h1 className="text-4xl font-bold">This is a Test Page</h1>
				<p className="mt-3 text-xl">
					You can use this page to test your Next.js setup with
					Tailwind CSS and shadcn.
				</p>
			</main>
		</>
	);
}
