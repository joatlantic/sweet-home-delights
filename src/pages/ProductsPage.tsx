import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import baklavaImage from "@/assets/baklava.jpg";
import kunafaImage from "@/assets/kunafa.jpg";
import maamoulImage from "@/assets/maamoul.jpg";
import baklavaWalnutImage from "@/assets/baklava-walnut.jpg";
import kunafaCreamImage from "@/assets/kunafa-cream.jpg";
import maamoulPistachioImage from "@/assets/maamoul-pistachio.jpg";
import baklavaCashewImage from "@/assets/baklava-cashew.jpg";
import kunafaMangoImage from "@/assets/kunafa-mango.jpg";
import maamoulWalnutImage from "@/assets/maamoul-walnut.jpg";
import baklavaAlmondImage from "@/assets/baklava-almond.jpg";
import kunafaChocolateImage from "@/assets/kunafa-chocolate.jpg";
import maamoulSesameImage from "@/assets/maamoul-sesame.jpg";

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
  {
    id: 4,
    name: "بقلاوة بالجوز",
    description: "بقلاوة مقرمشة محشوة بالجوز الطازج والقطر المحلى",
    image: baklavaWalnutImage,
  },
  {
    id: 5,
    name: "كنافة بالقشطة",
    description: "كنافة ناعمة مع قشطة طازجة ومكسرات مشكلة",
    image: kunafaCreamImage,
  },
  {
    id: 6,
    name: "معمول بالفستق",
    description: "معمول فاخر محشو بالفستق الحلبي الأصلي",
    image: maamoulPistachioImage,
  },
  {
    id: 7,
    name: "بقلاوة بالكاجو",
    description: "بقلاوة مميزة محشوة بالكاجو والعسل الطبيعي",
    image: baklavaCashewImage,
  },
  {
    id: 8,
    name: "كنافة بالمانجو",
    description: "كنافة معاصرة بنكهة المانجو الطازجة",
    image: kunafaMangoImage,
  },
  {
    id: 9,
    name: "معمول بالجوز",
    description: "معمول لذيذ محشو بالجوز المطحون والقرفة",
    image: maamoulWalnutImage,
  },
  {
    id: 10,
    name: "بقلاوة باللوز",
    description: "بقلاوة شهية محشوة باللوز المحمص والعسل",
    image: baklavaAlmondImage,
  },
  {
    id: 11,
    name: "كنافة بالشوكولاتة",
    description: "كنافة عصرية بحشوة الشوكولاتة البلجيكية",
    image: kunafaChocolateImage,
  },
  {
    id: 12,
    name: "معمول بالسمسم",
    description: "معمول تقليدي بحشوة السمسم المحمص والعسل",
    image: maamoulSesameImage,
  },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
              منتجاتنا المميزة
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              مجموعة واسعة من أشهى الحلويات الشرقية المصنوعة بحب واهتمام
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
    </div>
  );
};

export default ProductsPage;
