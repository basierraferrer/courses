export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-gray-500 min-h-screen">
      <h1>Hello Root Layout Shop</h1>
      {children}
    </main>
  );
}
