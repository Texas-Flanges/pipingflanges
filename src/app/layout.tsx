import type { Metadata } from 'next';
import './globals.css';
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: 'Piping Flanges - An In-Depth Look at Types, Uses, and Applications',
  description: 'Learn about piping flanges, their types, uses, and applications in oil and gas, petrochemicals, and manufacturing industries.',
  keywords: 'piping flanges, weld neck flanges, slip-on flanges, blind flanges, socket weld flanges, lap joint flanges',
  openGraph: {
    title: 'Piping Flanges - An In-Depth Look at Types, Uses, and Applications',
    description: 'Learn about piping flanges, their types, uses, and applications in oil and gas, petrochemicals, and manufacturing industries.',
    url: 'https://pipingflanges.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <header className="site-nav">
          <div className="nav-inner">
            <a href="/" className="logo">Piping Flanges</a>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/cad-3d-flange-drawings">CAD/3D Drawings</a></li>
              <li><a href="/flange-weights-and-dimensions">Weights/Dims</a></li>
              <li><a href="/domestic-vs-import-flanges">Domestic & Import</a></li>
              <li><a href="/blog">Blogs</a></li>            </ul>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="footer-inner">
            <div>
              <h3>Piping Flanges</h3>
              <p>Your premier source for top-quality piping flanges and expertise in the industry.</p>
            </div>
            <div>
              <h3>Quick Links</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="/">Home</a></li>                <li><a href="/blog">Blog</a></li>
                <li><a href="/cad-3d-flange-drawings">CAD/3D Drawings</a></li>
              </ul>
            </div>
            <div>
              <h3>Contact Info</h3>
              <p><strong>Phone:</strong> <a href="tel:2814848325">281-484-8325</a></p>
              <p><strong>Email:</strong> <a href="mailto:sales@texasflange.com">sales@texasflange.com</a></p>
              <p><strong>Fax:</strong> 281-484-8730</p>
              <p><strong>Address:</strong> P.O. Box 2889, Pearland, TX 77588</p>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2026 Piping Flanges. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
