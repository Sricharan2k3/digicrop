import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
  title: "Digicrop ",
  description: "- AI Crop Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
