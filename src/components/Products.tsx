import { Card, CardContent } from "@/components/ui/card";
import baklavaImage from "@/assets/baklava.jpg";
import kunafaImage from "@/assets/kunafa.jpg";
import maamoulImage from "@/assets/maamoul.jpg";

const products = [
  {
    id: 1,
    name: "بقلاوة فاخرة",
    description: "بقلاوة محضرة بأجود أنواع الفستق الحلبي والعسل الطبيعي",
    image: baklavaImage,
  },
  {
    id: 2,
    name: "كنافة نابلسية",
    description: "كنافة طازجة محشوة بالجبن الحلو مع القطر",
    image: kunafaImage,
  },
  {
    id: 3,
    name: "معمول بالتمر",
    description: "معمول تقليدي محشو بالتمر الفاخر والجوز",
    image: maamoulImage,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            منتجاتنا المميزة
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مجموعة مختارة من أشهى الحلويات الشرقية المصنوعة بحب
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {product.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
