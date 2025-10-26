import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuItem } from "@/components/MenuItem";
import { coldDrinks, hotDrinks, snacks, desserts } from "@/data/menuData";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed relative" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Ana Sayfaya Dön
          </Button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
          Menümüz
        </h1>

        <Tabs defaultValue="desserts" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto bg-primary p-2">
            <TabsTrigger value="desserts" className="text-sm md:text-base py-3 data-[state=active]:bg-primary-foreground data-[state=active]:text-primary text-primary-foreground">
              Tatlılar
            </TabsTrigger>
            <TabsTrigger value="hot" className="text-sm md:text-base py-3 data-[state=active]:bg-primary-foreground data-[state=active]:text-primary text-primary-foreground">
              Sıcak İçecekler
            </TabsTrigger>
            <TabsTrigger value="cold" className="text-sm md:text-base py-3 data-[state=active]:bg-primary-foreground data-[state=active]:text-primary text-primary-foreground">
              Soğuk İçecekler
            </TabsTrigger>
            <TabsTrigger value="snacks" className="text-sm md:text-base py-3 data-[state=active]:bg-primary-foreground data-[state=active]:text-primary text-primary-foreground">
              Aperatifler
            </TabsTrigger>
          </TabsList>

          <TabsContent value="desserts" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {desserts.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hot" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {hotDrinks.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cold" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {coldDrinks.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="snacks" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {snacks.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Menu;
