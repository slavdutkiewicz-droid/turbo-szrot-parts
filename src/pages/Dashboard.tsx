import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Eye, MessageSquare, Edit, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const mockOffers = [
  {
    id: 1,
    title: "BMW E46 Engine Block",
    price: 2500,
    views: 245,
    messages: 12,
    status: "active",
  },
  {
    id: 2,
    title: "Audi A4 Transmission",
    price: 1800,
    views: 189,
    messages: 8,
    status: "active",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Seller Dashboard</h1>
            <p className="text-muted-foreground">Manage your offers and messages</p>
          </div>
          <Link to="/dashboard/add-offer">
            <Button className="gradient-accent h-12 px-6">
              <Plus className="w-5 h-5 mr-2" />
              Add New Offer
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">2</CardTitle>
              <CardDescription>Active Offers</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">434</CardTitle>
              <CardDescription>Total Views</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">20</CardTitle>
              <CardDescription>Messages</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Offers</CardTitle>
            <CardDescription>Manage and edit your active listings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockOffers.map((offer) => (
                <div
                  key={offer.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{offer.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {offer.views} views
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        {offer.messages} messages
                      </div>
                      <Badge variant="outline" className="text-accent border-accent">
                        {offer.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-accent mr-4">
                      {offer.price} PLN
                    </span>
                    <Button variant="ghost" size="icon">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
