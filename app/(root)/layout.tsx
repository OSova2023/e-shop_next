

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen flex-col">
      <main className="flex-grow wrapper">{children}</main>
      </div>
  );
}
