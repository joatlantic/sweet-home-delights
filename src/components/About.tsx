import { Heart, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "صنع بحب",
    description: "كل قطعة حلوى نصنعها بحب واهتمام كبير بأدق التفاصيل",
  },
  {
    icon: Award,
    title: "مكونات فاخرة",
    description: "نستخدم فقط أجود المكونات الطبيعية والطازجة",
  },
  {
    icon: Clock,
    title: "طازجة يومياً",
    description: "حلوياتنا تُصنع طازجة كل يوم لضمان أفضل طعم",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            من نحن
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نحن مجموعة من الأيدي الماهرة المتخصصة في صنع الحلويات المنزلية الأصيلة.
            نجمع بين الوصفات التقليدية والمكونات الفاخرة لنقدم لكم تجربة لا تُنسى من النكهات الأصيلة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
