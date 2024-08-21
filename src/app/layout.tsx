import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Essential Elements Dance Studio",
  description: "Located in Hazlet NJ, for more information check our socials!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
       <AppRouterCacheProvider>
           <ThemeProvider theme={theme}>
           {children}
          </ThemeProvider>
       </AppRouterCacheProvider>
    </body>
  </html>
  );
}
