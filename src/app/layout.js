import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Twitter clone",
  description: "twitter clone build with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex justify-between max-w-6xl mx-auto">
          <div className="hidden sm:inline border-r h-screen">
            <Sidebar />
          </div>
          <div className="w-2xl  flex-1">{children}</div>
          <div className="lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]">
            <div className="sticky top-0 bg-white py-2">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 outline-none border border-gray-200 rounded-3xl text-sm w-full px-4 py-2"
              />
            </div>
            <News />
          </div>
        </div>
      </body>
    </html>
  );
}
