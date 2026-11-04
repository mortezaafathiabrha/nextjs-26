export const metadata = {
  title: "Hello World - Next.js",
  description: "A simple Hello World Next.js application on Node.js 26",
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
