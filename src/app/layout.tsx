// app/layout.tsx
import "./globals.css";
import { metadata } from "./metadata";
import ClientLayout from "./client-layout";

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="overflow-x-hidden min-h-screen">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
