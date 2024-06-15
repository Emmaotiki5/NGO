import './custom.scss';
import Navbar from './components/navbar/navbar.jsx';
import BootstrapClient from './components/client.js'





export const metadata = {
  title : 'Horizon',
  description: ""
}
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
