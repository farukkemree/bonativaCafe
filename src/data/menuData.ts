import redvelvet from "@/assets/redvelvet.jpg";
import darkvelvet from "@/assets/darkvelvet.jpg";
import greenvelvet from "@/assets/greenvelvet.jpg";
import cileklimag from "@/assets/cileklimagnolia.jpg";
import muzlumag from "@/assets/muzlumagnolia.jpg";
import lotuslumag from "@/assets/lotuslumagnolia.jpg";
import oreolumag from "@/assets/oreolumagnolia.jpeg";
import firindasutlac from "@/assets/firindasutlac.jpg";
import trilece from "@/assets/trilece.jpg";
import frambuazlıtrilece from "@/assets/frambuazlitrilece.jpg";
import kazandibi from "@/assets/kazandibi.jpg";
import spoonful from "@/assets/spoonful.jpg";
import supangle from "@/assets/supangle.jpg"

// Cold drinks / beverages
import orangeMango from "@/assets/orangemango.jpg";
import kola from "@/assets/kola.jpg";
import fanta from "@/assets/fanta.jpg";
import sadeSoda from "@/assets/sadesoda.jpg";
import karpuzCilekSoda from "@/assets/karpuzcileklisodajpg.jpg";
import elmaliSoda from "@/assets/elmalısoda.jpg";
import narliSoda from "@/assets/narlısoda.jpg";
import limonluSoda from "@/assets/limonlusoda.jpg";
import seftaliIceTea from "@/assets/seftali.jpg";
import mangoIceTea from "@/assets/mango.jpg";
import limonluIceTea from "@/assets/limon.jpg";
import su from "@/assets/su.jpg";

// Hot drinks / beverages
import cay from "@/assets/çay.jpg";
import turkKahvesi from "@/assets/türkkahvesi.jpg";
import dibek from "@/assets/dibek.jpg";
import menengic from "@/assets/menengickahvesi.jpg";
import filtre from "@/assets/filtre.jpg";
import americano from "@/assets/americano.jpg";
import latte from "@/assets/latteiçecek.jpg";
import mocha from "@/assets/mocha.jpg";
import whiteMocha from "@/assets/whitemocha.jpg";
import salep from "@/assets/salep.jpg";
import sicakCikolata from "@/assets/sıcakçikolata.jpg";

// import snackcup from "@/assets/snackcup.jpg";
// import limonata from "@/assets/limonata.jpg";
// import dondurma from "@/assets/dondurma.jpg";
// import dondurmalifrappe from "@/assets/dondurmalifrappe.jpg";
import logo from "@/assets/logo.jpg";


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
    name: "Sade Soda",
    description: "Serinletici sade soda",
    price: 25,
    image: sadeSoda
  },
  {
    name: "Karpuz Çilek Soda",
    description: "Karpuz ve çilek aromalı ferahlatıcı soda",
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
    description: "Nar aromalı ferahlatıcı soda",
    price: 40,
    image: narliSoda
  },
  {
    name: "Limonlu Soda",
    description: "Limon aromalı ferahlatıcı soda",
    price: 40,
    image: limonluSoda
  },
  {
    name: "Şeftali Ice Tea",
    description: "Şeftali aromalı soğuk çay",
    price: 70,
    image: seftaliIceTea
  },
  {
    name: "Mango Ice Tea",
    description: "Mango aromalı soğuk çay",
    price: 70,
    image: mangoIceTea
  },
  {
    name: "Limonlu Ice Tea",
    description: "Limon aromalı soğuk çay",
    price: 70,
    image: limonluIceTea
  },
  {
    name: "Kola",
    description: "Klasik gazlı içecek",
    price: 70,
    image: kola
  },
  {
    name: "Fanta",
    description: "Portakal aromalı gazlı içecek",
    price: 70,
    image: fanta  
  },
  {
    name: "Orange Mango",
    description: "Taze sıkılmış portakal suyu ve tropikal mango püresi ile hazırlanan, doğal ve ferahlatıcı özel içeceğimiz",
    price: 100,
    image: orangeMango
  },
  {
    name: "Americano",
    description: "Espresso ve soğuk su ile hazırlanan ferahlatıcı iced americano",
    price: 100,
    image: americano
  },
  {
    name: "Latte",
    description: "Espresso ve soğuk süt ile hazırlanan yumuşak içimli iced latte",
    price: 120,
    image: latte
  },
  {
    name: "Karamel Latte",
    description: "Espresso, soğuk süt ve karamel aromasıyla hazırlanan iced latte",
    price: 140,
    image: latte
  },
  {
    name: "Mocha",
    description: "Espresso, soğuk süt ve çikolata aromasıyla hazırlanan iced mocha",
    price: 140,
    image: mocha
  },
  {
    name: "White Mocha",
    description: "Espresso, soğuk süt ve beyaz çikolata aromasıyla hazırlanan iced white mocha",
    price: 140,
    image: whiteMocha
  },
  {
    name: "Filtre Kahve",
    description: "Soğuk demleme tadında, ferahlatıcı içimli filtre kahve",
    price: 100,
    image: filtre
  },
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
    price: 80,
    image: turkKahvesi
  },
  {
    name: "Dibek Kahvesi",
    description: "Özel harmanlanmış, ağaç havanında dövülerek hazırlanan geleneksel dibek kahvesi",
    price: 80,
    image: dibek
  },
  {
    name: "Menengiç Kahvesi",
    description: "Kavrulmuş menengiç meyvelerinden elde edilen, sütle hazırlanan kafeinsiz ve yumuşak içimli yöresel lezzet",
    price: 80,
    image: menengic
  },
  {
    name: "Sıcak Çikolata",
    description: "Kaliteli çikolata ve sıcak süt ile hazırlanan kremalı içecek",
    price: 100,
    image: sicakCikolata
  },
  {
    name: "Salep",
    description: "Yumuşacık içimi ve tarçın eşliğinde nostaljik bir salep keyfi",
    price: 100,
    image: salep
  },
];

export const snacks: MenuItem[] = [
  {
    name: "Snack Cup",
    description: "Waffle ve Bonativa spesiyal içeceğiyle hazırlanan özel atıştırmalık menü",
    price: 250,
    image: logo
  },
  {
    name: "Kova Waffle",
    description: "Bol malzemeli, paylaşmalık kova waffle lezzeti",
    price: 200,
    image: logo
  },
  {
    name: "Bonativa Limonata",
    description: "Ferahlatıcı aromasıyla hazırlanan özel Bonativa limonatası",
    price: 70,
    image: logo
  },
  {
    name: "Bonativa Sunset",
    description: "Canlı aromalarla hazırlanan ferahlatıcı Bonativa özel içeceği",
    price: 70,
    image: logo
  },
  {
    name: "Dondurma",
    description: "Seçtiğiniz aromayla servis edilen 1 top dondurma",
    price: 25,
    image: logo
  },
  {
    name: "Dondurmalı Frappe",
    description: "Soğuk frappe lezzetinin dondurma ile birleştiği özel içecek",
    price: 120,
    image: logo
  }
];

export const desserts: MenuItem[] = [
  {
    name: "Supangle",
    description: "Yoğun çikolatalı kreması ve yumuşak dokusuyla hazırlanan klasik supangle",
    price: 100,
    image: supangle
  },
  {
    name: "Spoonful",
    description: "Yumuşacık, kremsi katmanlar ve ferahlatıcı dokunuşlarla hazırlanan özel tatlı",
    price: 100,
    image: spoonful
  },
  {
    name: "Dark Velvet",
    description: "Yoğun çikolatalı dark velvet kek, özel kremalı sos ile",
    price: 100,
    image: darkvelvet
  },
  {
    name: "Red Velvet",
    description: "Yumuşak kırmızı kadife kek, özel kremalı sos ile",
    price: 100,
    image: redvelvet
  },
  {
    name: "Green Velvet",
    description: "Yumuşak yeşil kadife kek, özel kremalı sos ile",
    price: 100,
    image: greenvelvet
  },
  {
    name: "Çilekli Magnolia",
    description: "Taze çilekler ve hafif kremalı sos ile hazırlanan özel magnolia",
    price: 100,
    image: cileklimag
  },
  {
    name: "Muzlu Magnolia",
    description: "Taze muz dilimleri ve kremalı sos ile hazırlanan özel magnolia",
    price: 100,
    image: muzlumag
  },
  {
    name: "Lotuslu Magnolia",
    description: "Orijinal Lotus bisküvileri ve karamelize sos ile hazırlanan özel magnolia",
    price: 100,
    image: lotuslumag
  },
  {
    name: "Oreolu Magnolia",
    description: "Kıtır Oreo parçaları ve yoğun kremalı sos ile hazırlanan özel magnolia",
    price: 100,
    image: oreolumag
  },
  {
    name: "Karamelli Trileçe",
    description: "Hafif sünger keki ve karamel sosuyla taptaze bir trileçe",
    price: 100,
    image: trilece
  },
  {
    name: "Frambuazlı Trileçe",
    description: "Hafif sünger keki ve yoğun frambuaz sosuyla taptaze bir trileçe",
    price: 100,
    image: frambuazlıtrilece
  },
  {
    name: "Fırında Sütlaç",
    description: "Özel güveç kaplarında fırınlanan ve üzeri nar gibi kızartılan geleneksel sütlaç",
    price: 100,
    image: firindasutlac
  },
  {
    name: "Kazandibi",
    description: "Hafif yanık karamelli tabanı ve ipeksi kıvamıyla hazırlanan geleneksel kazandibi",
    price: 100,
    image: kazandibi
  },
    {
    name: "Kaşık Tatlısı ",
    description: "Kaşıkla servis edilen, yumuşacık kreması ve hafif dokusuyla hazırlanan özel sütlü tatlı",
    price: 100,
    image: logo
  }
];
