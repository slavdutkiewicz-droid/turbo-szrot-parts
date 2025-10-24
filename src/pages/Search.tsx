import { useState } from "react";
import { Header } from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search as SearchIcon, MapPin, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const mockResults = [
  {
    id: 1,
    title: "BMW E46 Engine Block",
    price: 2500,
    location: "Warsaw",
    condition: "Used",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400",
  },
  {
    id: 2,
    title: "Audi A4 Transmission",
    price: 1800,
    location: "Krakow",
    condition: "Refurbished",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400",
  },
  {
    id: 3,
    title: "Mercedes W211 Suspension Set",
    price: 950,
    location: "Gdansk",
    condition: "Used",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400",
  },
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex gap-4 mb-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search by brand, model, or VIN..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="secondary" className="h-12 px-6">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </Button>
            <Button className="h-12 px-8 gradient-accent">
              Search
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Badge variant="secondary">Location: All</Badge>
            <Badge variant="secondary">Price: Any</Badge>
            <Badge variant="secondary">Condition: All</Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockResults.map((item) => (
            <Link to={`/offer/${item.id}`} key={item.id}>
              <Card className="overflow-hidden transition-all hover:scale-105 hover:glow-effect cursor-pointer">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <Badge variant="outline">{item.condition}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {item.location}
                  </div>
                  <div className="text-2xl font-bold text-accent">
                    {item.price} PLN
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
