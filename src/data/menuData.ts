// import sansebastian from "@/assets/sansebastian.jpg";
import redvelvet from "@/assets/redvelvet.jpg";
import waffle from "@/assets/waffle.jpg";
import darkvelvet from "@/assets/darkvelvet.jpg";
import cileklimag from "@/assets/cileklimagnolia.jpg";
import kivilimag from "@/assets/kivilimagnolia.jpg";
import muzlumag from "@/assets/muzlumagnolia.jpg";
import lotuslumag from "@/assets/lotuslumagnolia.jpg";
import frambuazlımag from "@/assets/frambuazlimagnolia.jpg";
import beyazcwaffle from "@/assets/beyazcikolataliwaffle.jpg";
import firindasutlac from "@/assets/firindasutlac.jpg";
// import sutlac from "@/assets/sutlac.jpg";
import trilece from "@/assets/trilece.jpg";
import frambuazlıtrilece from "@/assets/frambuazlitrilece.jpg";
import cikolatalitrilece from "@/assets/cikolatalitrilece.jpg";
import spoonful from "@/assets/spoonful.jpg";

// Cold drinks / beverages
import orangeMango from "@/assets/orangemango.jpg";
import hibiscus from "@/assets/hibiscus.jpg";
import coolLime from "@/assets/coollime.jpg";
import limonata from "@/assets/limonata.jpg";
import kola from "@/assets/kola.jpg";
import kolaturka from "@/assets/kolaturka.jpg";
import fanta from "@/assets/fanta.jpg";
import karisikmeyvesuyu from "@/assets/karisikmeyvesuyu.jpg";
import seftalimeyvesuyu from "@/assets/seftalimeyvesuyu.jpg";
import visnemeyvesuyu from "@/assets/visnemevyesuyu.jpg";
import sadeSoda from "@/assets/sadesoda.jpg";
import karpuzCilekSoda from "@/assets/karpuzcileklisodajpg.jpg";
import elmaliSoda from "@/assets/elmalısoda.jpg";
import narliSoda from "@/assets/narlısoda.jpg";
import limonluSoda from "@/assets/limonlusoda.jpg";
import seftaliIceTea from "@/assets/seftali.jpg";
// import mangoIceTea from "@/assets/mango.jpg";
import limonluIceTea from "@/assets/limon.jpg";
import ayran from "@/assets/ayran.png";
import su from "@/assets/su.jpg";

// Hot drinks / beverages
import cay from "@/assets/çay.jpg";
import turkKahvesi from "@/assets/türkkahvesi.jpg";
import dibek from "@/assets/dibek.jpg";
import filtre from "@/assets/filtre.jpg";
import espresso from "@/assets/espresso.jpg";
import americano from "@/assets/americano.jpg";
import flatWhite from "@/assets/flatwhite.jpg";
import latte from "@/assets/latteiçecek.jpg";
import macchiato from "@/assets/macchiato.jpg";
import caramelMacchiato from "@/assets/caramel.jpg";
import mocha from "@/assets/mocha.jpg";
import whiteMocha from "@/assets/whitemocha.jpg";
import salep from "@/assets/salep.jpg";
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
    name: "Su",
    description: "Premium içme suyu",
    price: 15,
    image: su
  },
  {
    name: "Ayran",
    description: "Geleneksel lezzet, serinletici ayran",
    price: 20,
    image: ayran
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
  // {
  //   name: "Mango Ice Tea",
  //   description: "Mango aromalı soğuk çay",
  //   price: 60,
  //   image: mangoIceTea
  // },
  {
    name: "Limonlu Ice Tea",
    description: "Limon aromalı soğuk çay",
    price: 60,
    image: limonluIceTea
  },
  {
    name: "Kola",
    description: "Klasik gazlı içecek",
    price: 60,
    image: kola
  },
  {
    name: "Kola Turka",
    description: "Klasik gazlı içecek",
    price: 60,
    image: kolaturka
  },
  {
    name: "Fanta",
    description: "Portakal aromalı gazlı içecek",
    price: 60,
    image: fanta  
  },
  {
  name: "Karışık Meyve Suyu",
  description: "Çeşitli taze meyvelerin doğal karışımı ile hazırlanan, vitamin dolu ve ferahlatıcı içecek.",
  price: 60,
  image: karisikmeyvesuyu
  },
  {
  name: "Şeftali Meyve Suyu",
  description: "Taze ve olgun şeftalilerden hazırlanan, tatlı ve lezzetli, doğal meyve suyu.",
  price: 60,
  image: seftalimeyvesuyu
  },
  {
  name: "Vişne Meyve Suyu",
  description: "Taze vişnelerin mayhoş lezzetini sunan, serinletici ve doğal meyve suyu.",
  price: 60,
  image: visnemeyvesuyu
  },
  {
    name: "Limonata",
    description: "El yapımı, taze sıkılmış limon ve doğal şekerle hazırlanan klasik serinletici içecek",
    price: 90,
    image: limonata
  },
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
    name: "Espresso",
    description: "İtalyan usulü hazırlanan yoğun ve aromalı espresso",
    price: 60,
    image: espresso
  },
  {
    name: "Double Espresso",
    description: "Çift shot espresso, güçlü ve yoğun",
    price: 70,
    image: espresso
  },
  {
    name: "Filtre Kahve",
    description: "Premium Arabica çekirdeklerden taze demlenen filtre kahve",
    price: 70,
    image: filtre
  },
  {
    name: "Americano",
    description: "Espresso ve sıcak su ile hazırlanan yumuşak kahve",
    price: 70,
    image: americano
  },
  {
    name: "Latte",
    description: "Espresso ve bol sütlü, kremalı latte",
    price: 90,
    image: latte
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
  },{
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
    name: "Flat White",
    description: "Espresso ve kadifemsi mikro köpüklü süt ile hazırlanan özel kahve",
    price: 90,
    image: flatWhite
  },
  {
    name: "Salep",
    description: "Yumuşacık içimi ve tarçın eşliğinde nostaljik bir salep keyfi",
    price: 90,
    image: salep
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
    name: "Tost",
    description: "Kaşar peyniri ve sucukla hazırlanan sıcak tost",
    price: 100,
    image: tost
  },
  {
    name: "Hindi Salamlı Soğuk Sandviç",
    description: "Hindi salam, krem peynir ve taze domatesle hazırlanan klasik lezzet",
    price: 100,
    image: soguksandvic
  },
    {
    name: "Hindi Fümeli Soğuk Sandviç",
    description: "Dumanlı hindi füme, labne peyniri ve taze domatesle ferah bir seçenek",
    price: 110,
    image: soguksandvic
  },
  {
    name: "Dana Salamlı Soğuk Sandviç",
    description: "Dana salam, taze kaşar peyniri ve domates dilimleriyle sevilen bir ikili",
    price: 120,
    image: soguksandvic
  }
];

export const desserts: MenuItem[] = [
  {
    name: "Red Velvet",
    description: "Yumuşak kırmızı kadife kek, özel kremalı sos ile",
    price: 120,
    image: redvelvet
  },
  {
    name: "Dark Velvet",
    description: "Yoğun çikolatalı dark velvet kek, özel kremalı sos ile",
    price: 120,
    image: darkvelvet
  },
  {
    name: "Karamelli Trileçe",
    description: "Hafif sünger keki ve karamel sosuyla taptaze bir trileçe",
    price: 120,
    image: trilece
  },
  {
    name: "Çikolatalı Trileçe",
    description: "Hafif sünger keki ve yoğun çikolata sosuyla taptaze bir trileçe",
    price: 120,
    image: cikolatalitrilece
  },
  {
    name: "Frambuazlı Trileçe",
    description: "Hafif sünger keki ve yoğun frambuaz sosuyla taptaze bir trileçe",
    price: 120,
    image: frambuazlıtrilece
  },
  {
    name: "Spoonful",
    description: "Yumuşacık, kremsi katmanlar ve ferahlatıcı dokunuşlarla hazırlanan özel tatlı",
    price: 120,
    image: spoonful
  },
  {
    name: "Çilekli Magnolia",
    description: "Taze çilekler ve hafif kremalı sos ile hazırlanan özel magnolia",
    price: 120,
    image: cileklimag
  },
  {
    name: "Muzlu Magnolia",
    description: "Taze muz dilimleri ve kremalı sos ile hazırlanan özel magnolia",
    price: 120,
    image: muzlumag
  },
  {
    name: "Kivili Magnolia",
    description: "Taze kivi dilimleri ve hafif kremalı sos ile hazırlanan özel magnolia",
    price: 120,
    image: kivilimag
  },
  {
    name: "Lotuslu Magnolia",
    description: "Orijinal Lotus bisküvileri ve karamelize sos ile hazırlanan özel magnolia",
    price: 120,
    image: lotuslumag
  },
  {
    name: "Frambuazlı Magnolia",
    description: "Taze frambuazlar ve hafif kremalı sos ile hazırlanan mayhoş ve tatlı magnolia",
    price: 120,
    image: frambuazlımag
  },
  {
    name: "Fırında Sütlaç",
    description: "Özel güveç kaplarında fırınlanan ve üzeri nar gibi kızartılan geleneksel sütlaç",
    price: 120,
    image: firindasutlac
  },
  {
    name: "Beyaz Çikolatalı Waffle",
    description: "Taze muz, kivi, çilek ve beyaz çikolata sosu ile hazırlanan sıcak waffle",
    price: 220,
    image: beyazcwaffle
  },
  {
    name: "Çikolatalı Waffle",
    description: "Taze muz, kivi, çilek ve özel çikolata sosu ile hazırlanan sıcak waffle",
    price: 220,
    image: waffle
  }
  // {
  //   name: "San Sebastian",
  //   description: "Bask usulü kremalı cheesecake, yanık üst katmanı ile ünlü İspanyol tatlısı",
  //   price: 160,
  //   image: sansebastian
  // }
];
