import type {Metadata} from 'next';
import { Playfair_Display, DM_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
});

export const metadata: Metadata = {
  title: 'Life Inventory | Group 13',
  description: 'Project website for Life Inventory',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmMono.variable}`}>
      <body className="bg-[#0A0A0A] text-[#F0EDE8] font-mono antialiased selection:bg-[#E8C547] selection:text-[#0A0A0A]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
