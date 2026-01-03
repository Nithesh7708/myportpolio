
import Footer from "./components/Common_component/Footer";
import Nav from "./components/Common_component/Nav";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { ScrollProgress } from "./components/ScrollProgress";
import "./globals.css";

export const metadata = {
  title: "Modern Portfolio 2026 | Full Stack Developer",
  description: "Experience cutting-edge web development with modern animations, glassmorphism, and interactive UI/UX design",
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
