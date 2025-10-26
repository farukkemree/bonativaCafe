import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import latte from "@/assets/latte.jpg";
import kek from "@/assets/kek.jpg";
import slogan from "@/assets/slogan.jpg";

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Arka plan bulanıklığı */}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Ana Sayfaya Dön
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto space-y-16 relative">
          {/* --- HAKKIMIZDA BAŞLIK --- */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-6">
            Hakkımızda
          </h1>



          {/* --- BİZİM HİKAYEMİZ --- */}
          <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-primary mb-8">
              <span style={{
                backgroundImage: 'linear-gradient(180deg, transparent 15%, #FAF3C0 15%, #fef08a 85%, transparent 85%)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%'
              }}>
                BİZİM HİKAYEMİZ
              </span>
            </h2>
            <p className="text-lg text-primary leading-relaxed mb-6">
              Bonativa, iyi kahvenin, taze lezzetlerin ve keyifli anların peşinden gitme tutkusuyla doğdu.
              Bizim için her şey, misafirlerimize sadece bir fincan kahve değil, aynı zamanda günlük koşuşturmacaya
              keyifli bir mola verdirecek samimi bir atmosfer sunma hayaliyle başladı. Adımızı "iyi" ve "yeni"
              kavramlarından alarak, her gün taze ve özenle seçilmiş ürünlerle dolu bir deneyim yaratmayı hedefledik.
              Bonativa, bir kafeden daha fazlası; şehrin kalbinde, lezzet ve sohbetin buluşma noktasıdır.
            </p>
          </div>

          {/* --- FELSEFEMİZ (sağda latte görseli) --- */}
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
            <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg shadow-lg flex-1">
              <h2 className="text-3xl font-semibold text-center text-primary mb-6">
                <span style={{
                  backgroundImage: 'linear-gradient(180deg, transparent 15%, #FAF3C0 15%, #fef08a 85%, transparent 85%)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%'
                }}>
                  FELSEFEMİZ: KALİTE VE TAZELİK
                </span>
              </h2>
              <p className="text-lg text-primary leading-relaxed mb-6">
                Bonativa&apos;nın temelinde değişmez iki değer yatar: Kalite ve tazelik. Biz, "iyi" olanı sunmaya odaklandık.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    KALİTE
                  </h3>
                  <p className="text-lg text-primary leading-relaxed">
                    Kahve çekirdeklerimizin seçiminden, tatlılarımızın reçetelerine kadar her detayda en yüksek standardı hedefliyoruz.
                    İşini tutkuyla yapan bir ekiple, her ürünün özenle hazırlandığından emin oluyoruz.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    TAZELİK
                  </h3>
                  <p className="text-lg text-primary leading-relaxed">
                    Mutfağımızdan çıkan her şeyin taze olması önceliğimizdir. Günlük olarak hazırlanan tatlılarımız,
                    taze çekilmiş kahvelerimiz ve anında hazırlanan aperatiflerimizle, lezzetin en saf halini sunuyoruz.
                  </p>
                </div>
              </div>
            </div>

            {/* Görsel sağda */}
            <img
              src={latte}
              alt="Latte"
              className="hidden md:block w-80 h-auto rounded-xl shadow-lg object-cover self-center"
            />
          </div>

          {/* --- LEZZETLERİMİZ (solda kek görseli) --- */}
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
            {/* Görsel solda */}
            <img
              src={kek}
              alt="Kek"
              className="hidden md:block w-80 h-auto rounded-xl shadow-lg object-cover self-center"
            />

            <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg shadow-lg flex-1">
              <h2 className="text-3xl font-semibold text-center text-primary mb-8">
                <span style={{
                  backgroundImage: 'linear-gradient(180deg, transparent 15%, #FAF3C0 15%, #fef08a 85%, transparent 85%)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%'
                }}>
                  LEZZETLERİMİZ
                </span>
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">NİTELİKLİ KAHVELER</h3>
                  <p className="text-lg text-primary leading-relaxed">
                    Kahve, bizim tutkumuz ve uzmanlık alanımız. Farklı bölgelerden özenle seçtiğimiz nitelikli kahve çekirdeklerini,
                    her damak tadına uygun demleme teknikleriyle fincanınıza taşıyoruz. Güçlü bir espresso, kadifemsi bir latte
                    veya aromatik bir filtre kahve... Aradığınız tüm kahve deneyimleri, baristalarımızın usta ellerinde sizi bekliyor.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">BUTİK TATLILAR VE APERATİFLER</h3>
                  <p className="text-lg text-primary leading-relaxed">
                    Kahvenin en iyi dostu olan taze lezzetleri unutmuyoruz. Günlük olarak hazırlanan, mevsime uygun malzemelerle
                    yapılan butik tatlılarımız, kahve keyfinizi tamamlar. Ayrıca, günün her saatine uygun, taze ve doyurucu
                    aperatif seçeneklerimizle, lezzetli bir mola veya hafif bir öğün sunuyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Vizyon --- */}
          <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-primary mb-6"><span style={{
              backgroundImage: 'linear-gradient(180deg, transparent 15%, #FAF3C0 15%, #fef08a 85%, transparent 85%)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%'
            }}>
              VİZYONUMUZ
            </span></h2>
            <p className="text-lg text-primary leading-relaxed">
              Sadece bir kafe değil, misafirlerimizin kendini evinde hissettiği, ilham aldığı ve şehrin karmaşasından
              uzaklaştığı bir "topluluk alanı" olmak. Kahve kültürünü yaygınlaştırırken, taze lezzetler konusunda
              bölgenin referans noktası haline gelmek.
            </p>
          </div>
          {/* --- ÖZEL SLOGAN --- */}
          <div className="text-center mb-12">
            <h2
              className="text-2xl md:text-3xl font-[Gotham_Condensed] text-green-800 tracking-wide leading-snug"
              style={{ fontFamily: "'Gotham Condensed', sans-serif" }}
            >
              HER YUDUM BİR KEYİF, HER LOKMA BİR MOLA,
              <br />
              <span className="font-extrabold">BONATIVA</span> ANLARI,
              <br />
              TAPTAZE VE SİZE ÖZEL.
            </h2>
          </div>


          {/* --- Misyon --- */}
          <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-primary mb-6">
              <span style={{
                backgroundImage: 'linear-gradient(180deg, transparent 15%, #FAF3C0 15%, #fef08a 85%, transparent 85%)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%'
              }}>
                MİSYONUMUZ
              </span>
            </h2>
            <p className="text-lg text-primary leading-relaxed">
              Misyonumuz, her misafirimize tutkuyla hazırlanmış lezzetler sunmaktır. Kahveye ve taze gıdaya olan
              bağlılığımızı, samimi ve kaliteli hizmet anlayışımızla birleştirerek, her ziyareti eşsiz bir "Bonativa"
              deneyimine dönüştürmeyi amaçlıyoruz.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
