
import Footer from "./components/Common_component/Footer";
import Nav from "./components/Common_component/Nav";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { ScrollProgress } from "./components/ScrollProgress";
import "./globals.css";

export const metadata = {
  title: "Nithiesh Kumar | Full-Stack Developer | React, Next.js & React Native Expert",
  description: "Experienced Full-Stack Developer specializing in building scalable web and mobile applications. Expert in React, Next.js, Node.js, React Native, and MySQL. Available for full-time opportunities.",
  keywords: "Full-Stack Developer, React Developer, Next.js Developer, React Native Developer, Web Developer, Mobile App Developer, Node.js, JavaScript Developer, Frontend Developer, Backend Developer, Nithiesh Kumar",
  authors: [{ name: "Nithiesh Kumar" }],
  creator: "Nithiesh Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nithieshkumar.vercel.app",
    title: "Nithiesh Kumar | Full-Stack Developer",
    description: "Experienced Full-Stack Developer building modern web & mobile applications with React, Next.js, and React Native",
    siteName: "Nithiesh Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithiesh Kumar | Full-Stack Developer",
    description: "Experienced Full-Stack Developer building modern web & mobile applications",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ScrollProgress />
          <Nav/>
          {children}
          <Footer/>
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
