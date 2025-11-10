import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "What is an AI Agent?",
  description:
    "Learn what AI agents are, how they work, and practical use cases.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "What is an AI Agent?",
    description:
      "A concise guide to AI agents: definition, components, and examples.",
    url: "https://agentic-f58f05c8.vercel.app",
    siteName: "AI Agent Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is an AI Agent?",
    description:
      "A concise guide to AI agents: definition, components, and examples.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          {children}
          <footer className="footer">
            <span>? {new Date().getFullYear()} AI Agent Guide</span>
          </footer>
        </main>
      </body>
    </html>
  );
}
