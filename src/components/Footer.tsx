import { MessageCircle } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-secondary/20 py-8 mt-auto">
            <div className="container px-4 flex flex-col items-center justify-center gap-4 text-center">
                <p className="text-lg font-medium text-foreground">
                    تطوير و تصميم يوسف عصام
                </p>
                <a
                    href="https://wa.me/201150321340"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                    <MessageCircle className="w-5 h-5" />
                    <span dir="ltr">+20 115 032 1340</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
