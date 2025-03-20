import { Button } from "@/components/ui/button";
import Header from "@/components/shared/header";
import Footer from "@/components/Footer";


export const metadata = {
  title: 'Главная'
}

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
        <main className="flex-1 wrapper">
          <Button>HOME</Button>
        </main>
      <Footer />
    </div>
  );
}
