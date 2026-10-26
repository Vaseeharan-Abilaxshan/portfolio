import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abi | Full Stack Software Engineer",
  description:
    "Portfolio of Abi (Vaseeharan Abilaxshan), a full stack software engineer based in Sri Lanka.",
};

const themeScript = `
  (() => {
    try {
      const savedTheme = localStorage.getItem("abi-portfolio-theme");
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      if (savedTheme === "light" || (!savedTheme && prefersLight)) {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    } catch {
      document.documentElement.classList.add("dark");
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
