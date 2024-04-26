import { ReactNode } from 'react';
import AppWrappers from './AppWrappers';
import { fonts } from './font';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fonts.inter.variable}>
      <body id={'root'}>
        <AppWrappers>{children}</AppWrappers>
      </body>
    </html>
  );
}
