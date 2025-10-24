import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, MessageSquare, Shield, Package } from "lucide-react";
import { useParams, Link } from "react-router-dom";

export default function OfferDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden card-elevated">
              <div className="aspect-video bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800"
                  alt="BMW E46 Engine Block"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-3xl">BMW E46 Engine Block</CardTitle>
                  <Badge variant="outline" className="text-lg px-4 py-1">Used</Badge>
                </div>
                <CardDescription className="text-lg">
                  Complete engine block from BMW E46 320d, 150hp, year 2002
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Engine block in excellent condition, removed from a BMW E46 320d with 180,000 km mileage. 
                  All parts tested and verified. No visible damage or cracks.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Model</p>
                    <p className="font-semibold">BMW E46</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Year</p>
                    <p className="font-semibold">2002</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Engine</p>
                    <p className="font-semibold">320d - 150hp</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Mileage</p>
                    <p className="font-semibold">180,000 km</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-4xl text-accent">2,500 PLN</CardTitle>
                <CardDescription className="flex items-center text-base">
                  <MapPin className="w-4 h-4 mr-1" />
                  Warsaw, Poland
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full gradient-accent h-12 text-lg">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Start Negotiation
                </Button>
                <Button variant="secondary" className="w-full h-12">
                  Buy Now
                </Button>
                
                <div className="pt-4 border-t border-border space-y-3">
                  <div className="flex items-center text-sm">
                    <Shield className="w-4 h-4 mr-2 text-accent" />
                    <span className="text-muted-foreground">Buyer Protection</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Package className="w-4 h-4 mr-2 text-accent" />
                    <span className="text-muted-foreground">Secure Shipping Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seller Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-accent">MS</span>
                  </div>
                  <div>
                    <p className="font-semibold">MotorSzrot Warsaw</p>
                    <p className="text-sm text-muted-foreground">Member since 2020</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
