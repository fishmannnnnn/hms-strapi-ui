import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/nav/Navbar';
const manrope = Manrope({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={manrope.className}>
				<Navbar/>
				{children}
			</body>
		</html>
	);
}
