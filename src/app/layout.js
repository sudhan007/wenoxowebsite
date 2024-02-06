import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "wenoxo",
  description: "wenoxo pvt.ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head >
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>

      </head>
      <body className={inter.className}>{children}
      </body>
    
    </html>
  );
}
