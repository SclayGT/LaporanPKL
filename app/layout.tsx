import './globals.css';
import 'antd/dist/reset.css';
import { Provider } from './provider';
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inika:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        <Script src="/api/env" strategy="beforeInteractive" />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
