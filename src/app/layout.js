import "./globals.css";

export const metadata = {
  title: "Bagaggio Calculator",
  description: "Calculator web application for Bagaggio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
