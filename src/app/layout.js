import './custom.scss';
import Navbar from './components/navbar/navbar.jsx';
import BootstrapClient from './components/client.js'
import Image from 'next/image';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
