import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-white dark:bg-black text-black dark:text-white">
      <Header/>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
