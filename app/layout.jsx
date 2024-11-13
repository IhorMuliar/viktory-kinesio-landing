import { montserrat } from './fonts';

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={montserrat.className}>
      <body data-theme-color="light" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
