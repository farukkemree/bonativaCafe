import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { MapPin, Instagram, Phone } from "lucide-react";
import heroBg from "@/assets/cafe-background.jpg";
import dessertsFeature from "@/assets/desserts-feature.jpg";
import coffeeFeature from "@/assets/coffee-feature.jpg";
import ingredientsFeature from "@/assets/ingredients-feature.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-7xl md:text-8xl font-serif text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Bonativa</h1>
          <h2 className="text-xl md:text-2xl font-light text-white mb-8 tracking-wider">Kahve • Tatlı • Aperatif</h2>
          <p className="text-lg md:text-xl text-white mb-12 font-light">Kahve tutkusunu taze tatlılarla buluşturan butik bir kafe.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button
                size="lg"
                className="bg-white/90 hover:bg-white text-emerald-800 px-8 py-6 text-lg font-semibold transition-all"
              >
                Menüyü Gör
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/90 hover:bg-white text-emerald-800 px-8 py-6 text-lg font-semibold transition-all"
              >
                Hakkımızda
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Bonativa Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            Neden Bonativa?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Taze Tatlılar"
              description="Her gün taze hazırlanan, özel tariflerle yapılan lezzetli tatlılarımız"
              image={dessertsFeature}
            />
            <FeatureCard
              title="Kaliteli Kahve"
              description="Özenle seçilmiş kahve çekirdekleri ve profesyonel barista hizmeti"
              image={coffeeFeature}
            />
            <FeatureCard
              title="Doğal Malzemeler"
              description="Taze, doğal ve kaliteli malzemelerle hazırlanan ürünler"
              image={ingredientsFeature}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
            İletişim
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Adres</h3>
              <p className="text-muted-foreground">
                Erikli, İnançlı Sk. No:7 <br />
                Bursa, Türkiye
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Instagram className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Instagram</h3>
              <a
                href="https://instagram.com/bonativa_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                @bonativa
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Telefon</h3>
              <a
                href="tel:+905551234567"
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                +90 543 335 13 13
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary text-primary-foreground text-center">
        <p>&copy; 2025 Bonativa. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default Index;
