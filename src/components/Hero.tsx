import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sweets.jpg";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-golden/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container relative z-10 text-center px-4 py-20">
        <div className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full border border-primary/20 animate-in fade-in duration-700">
          <p className="text-primary font-semibold text-sm">✨ حلويات طازجة يومياً</p>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 leading-tight">
          حلويات منزلية
          <span className="block bg-gradient-to-l from-primary via-golden to-accent bg-clip-text text-transparent mt-3">
            بطعم البيت الأصيل
          </span>
        </h1>
        
        <p className="text-xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 leading-relaxed font-medium">
          نقدم لكم أشهى الحلويات الشرقية والعربية<br />من صنع أيدي ماهرة
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Button 
            size="lg" 
            className="text-lg px-10 py-7 shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-golden-dark border-0"
          >
            <Phone className="ml-2 h-6 w-6" />
            اطلب الآن عبر واتساب
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-10 py-7 border-2 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            تصفح المنتجات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
