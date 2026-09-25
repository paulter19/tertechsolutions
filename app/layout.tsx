import "./globals.css";

export const metadata = {
  title: "TerTech | Software Solutions",
  description:
    "Custom software, websites, mobile apps, and digital solutions for growing businesses.",
  icons: {
    icon: "https://textavatars.com/api?name=TTS&size=512&background=070B14&color=10B981&length=3&rounded=true&bold=true",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}