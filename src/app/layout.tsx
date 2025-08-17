import Topbar from "@/components/Topbar";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
