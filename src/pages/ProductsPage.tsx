import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
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

      <section className="py-24 bg-gradient-to-br from-golden-light/30 via-background to-secondary/20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
              <p className="text-primary font-semibold text-sm">✨ تشكيلة واسعة ومميزة</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-l from-primary via-golden to-accent bg-clip-text text-transparent">
              منتجاتنا المميزة
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              مجموعة واسعة من أشهى الحلويات الشرقية المصنوعة بحب واهتمام
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-primary/30 bg-card/80 backdrop-blur-sm"
              >
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    طازج
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-b from-card to-background/50">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductsPage;
