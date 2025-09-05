// app/layout.js
import "./globals.css";
// react-slick styles must be imported globally (App Router rule)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "Fenix Air",
  description: "Private Charters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
