import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sweets.jpg";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
          حلويات منزلية
          <span className="block text-primary mt-2">بطعم البيت الأصيل</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          نقدم لكم أشهى الحلويات الشرقية والعربية من صنع أيدي ماهرة
        </p>
        
        <Button 
          size="lg" 
          className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300"
        >
          <Phone className="ml-2 h-5 w-5" />
          اطلب الآن
        </Button>
      </div>
    </section>
  );
};

export default Hero;
