import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/context/AudioContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cursiveFont = Great_Vibes({
  weight: "400",
  variable: "--font-cursive",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://radioalvas.com"),
  title: "Radio Alva's 88.4 FM | Voice for a Better Tomorrow",
  description:
    "Discover Radio Alva's 88.4 FM, a community radio platform in Moodubidire celebrating local voices, regional languages, culture, agriculture, education, health awareness and community stories.",
  keywords: [
    "Radio Alvas",
    "Radio Alva's 88.4 FM",
    "Moodubidire Community Radio",
    "Alva's Education Foundation",
    "Tulu Radio",
    "Kannada Radio",
    "Bennida Baduku",
    "Yakshagana Radio",
    "Vidyagiri Moodubidire",
    "Community Radio Karnataka",
  ],
  authors: [{ name: "Alva's Education Foundation (R)", url: "https://radioalvas.com" }],
  creator: "Alva's Education Foundation (R)",
  publisher: "Radio Alva's 88.4 FM",
  icons: {
    icon: "/radiologo.png",
    shortcut: "/radiologo.png",
    apple: "/radiologo.png",
  },
  openGraph: {
    title: "Radio Alva's 88.4 FM | Voice for a Better Tomorrow",
    description:
      "Namma Moodubidire, Namma Dhwani — The first community radio station in Moodubidire Taluk. Broadcasting daily on 88.4 MHz FM.",
    url: "https://radioalvas.com",
    siteName: "Radio Alva's 88.4 FM",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/radiologo.png",
        width: 800,
        height: 600,
        alt: "Radio Alva's 88.4 FM - Voice for a Better Tomorrow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radio Alva's 88.4 FM | Voice for a Better Tomorrow",
    description:
      "Namma Moodubidire, Namma Dhwani — The first community radio station in Moodubidire Taluk.",
    images: ["/radiologo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cursiveFont.variable} h-full antialiased light`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-slate-800 selection:bg-[#EA580C] selection:text-white">
        <AudioProvider>
          {children}
        </AudioProvider>
      </body>
    </html>
  );
}
