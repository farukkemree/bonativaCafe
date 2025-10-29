import sansebastian from "@/assets/sansebastian.jpg";
import redvelvet from "@/assets/redvelvet.jpg";
import waffle from "@/assets/waffle.jpg";
import darkvelvet from "@/assets/darkvelvet.jpg";
import cileklimag from "@/assets/çileklimag.jpg";
import kivilimag from "@/assets/kivilimag.jpg";
import muzlumag from "@/assets/muzlumag.jpg";
import kadayif from "@/assets/kadayıf.jpg";
import sutlac from "@/assets/sütlaç.jpg";
import trilece from "@/assets/trileçe.jpg";
import supangle from "@/assets/supangle.jpg";

// Cold drinks / beverages
// Cold drinks / beverages
import orangeMango from "@/assets/orangemango.jpg";
import hibiscus from "@/assets/hibiscus.jpg";
import coolLime from "@/assets/coollime.jpg";
import limonata from "@/assets/limonata.jpg";
import fanta from "@/assets/fanta.jpg";
import kola from "@/assets/kola.jpg";
import sadeSoda from "@/assets/soda.jpg";
import karpuzCilekSoda from "@/assets/karpuzçilek.webp";
import elmaliSoda from "@/assets/elma.webp";
import narliSoda from "@/assets/narlı.webp";
import limonluSoda from "@/assets/limonlu.webp";
import seftaliIceTea from "@/assets/şeftali.webp";
import mangoIceTea from "@/assets/mango.jpg";
import limonluIceTea from "@/assets/limonluicetea.webp";
import su from "@/assets/su.jpeg";

// Hot drinks / beverages
import cay from "@/assets/çay.jpg";
import turkKahvesi from "@/assets/türkkahvesi.jpg";
import dibek from "@/assets/dibek.jpg";
import filtre from "@/assets/filtre.jpg";
import espresso from "@/assets/espresso.jpg";
import ristretto from "@/assets/Ristretto.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import americano from "@/assets/americano.jpg";
import flatWhite from "@/assets/flatwhite.jpg";
import latte from "@/assets/latteiçecek.jpg";
import macchiato from "@/assets/macchiato.jpg";
import caramelMacchiato from "@/assets/caramel.jpg";
import mocha from "@/assets/mocha.jpg";
import whiteMocha from "@/assets/whitemocha.jpg";
import affogato from "@/assets/Affogato.jpg";
import sicakCikolata from "@/assets/sıcakçikolata.jpg";

import soguksandvic from "@/assets/soguksandvic.jpg";
import tost from "@/assets/tost.jpg";
export interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

export const coldDrinks: MenuItem[] = [
  {
    name: "Orange Mango",
    description: "Taze sıkılmış portakal suyu ve tropikal mango püresi ile hazırlanan, doğal ve ferahlatıcı özel içeceğimiz",
    price: 90,
    image: orangeMango
  },
  {
    name: "Hibiscus",
    description: "Özenle demlenen hibiskus çiçeği ile hazırlanan, antioksidan açısından zengin ve ferahlatıcı soğuk çayımız",
    price: 90,
    image: hibiscus
  },
  {
    name: "Cool Lime",
    description: "Taze lime, nane ve hafif tatlandırıcı ile hazırlanan serinletici ve canlandırıcı içecek",
    price: 90,
    image: coolLime
  },
  {
    name: "Limonata",
    description: "El yapımı, taze sıkılmış limon ve doğal şekerle hazırlanan klasik serinletici içecek",
    price: 90,
    image: limonata
  },
  {
    name: "Fanta",
    description: "Portakal aromalı gazlı içecek",
    price: 60,
    image: fanta
  },
  {
    name: "Kola",
    description: "Klasik gazlı içecek",
    price: 60,
    image: kola
  },
  {
    name: "Sade Soda",
    description: "Serinletici sade soda",
    price: 30,
    image: sadeSoda
  },
  {
    name: "Karpuz Çilek Soda",
    description: "Taze karpuz ve çilek aromalı ev yapımı özel sodamız",
    price: 40,
    image: karpuzCilekSoda
  },
  {
    name: "Elmalı Soda",
    description: "Yeşil elma aromalı ferahlatıcı soda",
    price: 40,
    image: elmaliSoda
  },
  {
    name: "Narlı Soda",
    description: "Taze nar suyu ile hazırlanan özel sodamız",
    price: 40,
    image: narliSoda
  },
  {
    name: "Limonlu Soda",
    description: "Taze limon ile hazırlanan klasik soda",
    price: 40,
    image: limonluSoda
  },
  {
    name: "Şeftali Ice Tea",
    description: "Şeftali aromalı soğuk çay",
    price: 60,
    image: seftaliIceTea
  },
  {
    name: "Mango Ice Tea",
    description: "Mango aromalı soğuk çay",
    price: 60,
    image: mangoIceTea
  },
  {
    name: "Limonlu Ice Tea",
    description: "Limon aromalı soğuk çay",
    price: 60,
    image: limonluIceTea
  },
  {
    name: "Su",
    description: "Premium içme suyu",
    price: 15,
    image: su
  }
];

export const hotDrinks: MenuItem[] = [
  {
    name: "Çay",
    description: "Özenle demlenen geleneksel Türk çayı",
    price: 15,
    image: cay
  },
  {
    name: "Türk Kahvesi",
    description: "Geleneksel usulde pişirilen, köpüklü Türk kahvesi",
    price: 60,
    image: turkKahvesi
  },
  {
    name: "Dibek Kahvesi",
    description: "Özel harmanlanmış, ağaç havanında dövülerek hazırlanan geleneksel dibek kahvesi",
    price: 60,
    image: dibek
  },
  {
    name: "Filtre Kahve",
    description: "Premium Arabica çekirdeklerden taze demlenen filtre kahve",
    price: 90,
    image: filtre
  },
  {
    name: "Espresso",
    description: "İtalyan usulü hazırlanan yoğun ve aromalı espresso",
    price: 60,
    image: espresso
  },
  {
    name: "Double Espresso",
    description: "Çift shot espresso, güçlü ve yoğun",
    price: 90,
    image: espresso
  },
  {
    name: "Ristretto",
    description: "Kısa çekimli, yoğunlaştırılmış espresso",
    price: 90,
    image: ristretto
  },
  {
    name: "Cappuccino",
    description: "Espresso, sıcak süt ve kremalı süt köpüğü ile hazırlanan İtalyan klasiği",
    price: 90,
    image: cappuccino
  },
  {
    name: "Americano",
    description: "Espresso ve sıcak su ile hazırlanan yumuşak kahve",
    price: 90,
    image: americano
  },
  {
    name: "Flat White",
    description: "Espresso ve kadifemsi mikro köpüklü süt ile hazırlanan özel kahve",
    price: 90,
    image: flatWhite
  },
  {
    name: "Latte",
    description: "Espresso ve bol sütlü, kremalı latte",
    price: 90,
    image: latte
  },
  {
    name: "Macchiato",
    description: "Espresso üzerine süt köpüğü ile 'işaretlenmiş' klasik İtalyan kahvesi",
    price: 90,
    image: macchiato
  },
  {
    name: "Caramel Macchiato",
    description: "Karamel şurubu, espresso ve süt köpüğü ile hazırlanan tatlı kahve",
    price: 90,
    image: caramelMacchiato
  },
  {
    name: "Mocha",
    description: "Espresso, sıcak çikolata ve süt karışımı lezzetli içecek",
    price: 90,
    image: mocha
  },
  {
    name: "White Mocha",
    description: "Espresso, beyaz çikolata ve süt ile hazırlanan özel mocha",
    price: 90,
    image: whiteMocha
  },
  {
    name: "Affogato",
    description: "Sıcak espresso ile vanilyalı dondurmanın buluşması",
    price: 90,
    image: affogato // Sİlinecek yerine salep 90 
  },
  {
    name: "Sıcak Çikolata",
    description: "Kaliteli çikolata ve sıcak süt ile hazırlanan kremalı içecek",
    price: 90,
    image: sicakCikolata
  }
];

export const snacks: MenuItem[] = [
  {
    name: "Bonativa Soğuk Sandviç",
    description: "Taze malzemeler, özel soslar ve kaliteli peynirlerle hazırlanan özel sandviçimiz",
    price: 100,
    image: soguksandvic
  },
  {
    name: "Tost",
    description: "Kaşar peyniri ve sucukla hazırlanan sıcak tost",
    price: 100,
    image: tost
  }
];

export const desserts: MenuItem[] = [
  {
    name: "San Sebastian",
    description: "Bask usulü kremalı cheesecake, yanık üst katmanı ile ünlü İspanyol tatlısı",
    price: 140,
    image: sansebastian
  },
  {
    name: "Red Velvet",
    description: "Yumuşak kırmızı kadife kek, kremalı peynir frosting ile",
    price: 100,
    image: redvelvet
  },
  {
    name: "Dark Velvet",
    description: "Yoğun çikolatalı dark velvet kek, özel kremalı sos ile",
    price: 100,
    image: darkvelvet
  },
  {
    name: "Çilekli Magnolia",
    description: "Taze çilekler ve hafif kremalı sos ile hazırlanan özel magnolia tatlımız",
    price: 100,
    image: cileklimag
  },
  {
    name: "Muzlu Magnolia",
    description: "Taze muz dilimleri ve kremalı sos ile hazırlanan magnolia",
    price: 100,
    image: muzlumag
  },
  {
    name: "Kivili Magnolia",
    description: "Taze kivi ve hafif kremalı sos ile özel magnolia tatlısı",
    price: 100,
    image: kivilimag
  },
  {
    name: "Sütlaç",
    description: "Geleneksel usulde fırınlanmış, üstü karamelize sütlaç",
    price: 100,
    image: sutlac
  },
  {
    name: "Çikolata Waffle",
    description: "Taze yapılan waffle muz,kivi,çilek ve çikolata sosu ile servis edilir",
    price: 200,
    image: waffle
  },
  {
    name: "Beyaz çikolatalı Waffle",
    description: "Taze yapılan waffle muz,kivi,çilek ve beyaz çikolata sosu ile servis edilir",
    price: 200,
    image: kadayif
  },
  {
    name: "Karamelli Trileçe",
    description: "Üç sütlü trileçe kek, karamel sos ile",
    price: 100,
    image: trilece
  },
  {
    name: "Supangle",
    description: "Yoğun çikolatalı puding, kremalı sos ile",
    price: 100,
    image: supangle // Sİlinecek yerşne frambuazlı trileçe 100
  }
];
