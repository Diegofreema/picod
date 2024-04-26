import { ReactNode } from 'react';
import AppWrappers from './AppWrappers';
import { Inter, Abel, Italiana } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id={'root'} className={inter.variable}>
        <AppWrappers>{children}</AppWrappers>
      </body>
    </html>
  );
}
