import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Products />
      <About />
      <Contact />
      
      <footer className="bg-foreground/5 py-8 text-center border-t border-border/30">
        <p className="text-muted-foreground">
          © 2024 حلويات منزلية. جميع الحقوق محفوظة
        </p>
      </footer>
    </div>
  );
};

export default Index;
