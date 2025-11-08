import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            تواصل معنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نسعد بتلبية طلباتكم والإجابة على استفساراتكم
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border border-border/50 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">هاتف</h3>
              <p className="text-muted-foreground" dir="ltr">+966 50 123 4567</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border/50 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">بريد إلكتروني</h3>
              <p className="text-muted-foreground">info@sweets.com</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border/50 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">الموقع</h3>
              <p className="text-muted-foreground">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Phone className="ml-2 h-5 w-5" />
              اطلب الآن عبر الواتساب
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
