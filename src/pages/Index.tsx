import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Shield, Zap, Users, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-automotive.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Automotive parts"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-4 py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Find Quality Car Parts
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                At Best Prices
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with verified scrapyards across Poland. Search, negotiate, and buy used car parts online.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-4 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Search by brand, model, or VIN..."
                    className="pl-12 h-14 text-lg bg-card/80 backdrop-blur"
                  />
                </div>
                <Link to="/search">
                  <Button className="h-14 px-8 text-lg gradient-accent glow-effect">
                    Search
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                Popular: BMW E46, Audi A4, Mercedes W211, VW Golf
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why TurboSzrot?</h2>
            <p className="text-xl text-muted-foreground">The smartest way to buy used car parts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center card-elevated">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <Search className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>Easy Search</CardTitle>
                <CardDescription>
                  Find exactly what you need with our advanced search filters
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center card-elevated">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>Fast Negotiation</CardTitle>
                <CardDescription>
                  Chat directly with sellers and negotiate the best price
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center card-elevated">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>Secure Payment</CardTitle>
                <CardDescription>
                  Your money is protected until you confirm delivery
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA for Sellers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="card-elevated overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <CardContent className="p-12">
                <Users className="w-12 h-12 text-accent mb-6" />
                <CardTitle className="text-3xl mb-4">
                  Are You a Scrapyard Owner?
                </CardTitle>
                <CardDescription className="text-lg mb-6">
                  Join hundreds of sellers and reach thousands of customers looking for quality parts.
                </CardDescription>
                <Link to="/auth">
                  <Button className="gradient-accent h-12 px-6">
                    Start Selling
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
              <div className="hidden md:block bg-gradient-to-br from-accent/20 to-accent/5" />
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 TurboSzrot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
