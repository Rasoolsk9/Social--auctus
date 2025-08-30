import "./globals.css";

export const metadata = {
  title: "Social Auctus — Social-first Agency",
  description: "We blend creative and performance to grow ambitious brands. Chat-first onboarding via WhatsApp, Instagram, or email.",
  openGraph: {
    title: "Social Auctus — Social-first Agency",
    description: "Chat-first onboarding via WhatsApp, Instagram, or email.",
    url: "https://social-auctus.example",
    siteName: "Social Auctus",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website"
  },
  other: {
    "theme-color": "#2DE2C6"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
