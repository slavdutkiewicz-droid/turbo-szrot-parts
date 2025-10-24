import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Eye, MessageSquare, Edit, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Offer = {
  id: string;
  title: string;
  price: number;
  views: number;
  status: string;
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [offers, setOffers] = useState<Offer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/auth");
        return;
      }
      
      fetchOffers(user.id);
    };

    checkAuth();
  }, [navigate]);

  const fetchOffers = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('offers')
        .select('id, title, price, views, status')
        .eq('seller_id', userId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOffers(data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load offers");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (offerId: string) => {
    if (!confirm("Are you sure you want to delete this offer?")) return;

    try {
      const { error } = await supabase
        .from('offers')
        .delete()
        .eq('id', offerId);

      if (error) throw error;

      setOffers(prev => prev.filter(offer => offer.id !== offerId));
      toast.success("Offer deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete offer");
    }
  };
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
              <CardTitle className="text-3xl">{offers.filter(o => o.status === 'active').length}</CardTitle>
              <CardDescription>Active Offers</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">{offers.reduce((sum, o) => sum + o.views, 0)}</CardTitle>
              <CardDescription>Total Views</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">0</CardTitle>
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
            {isLoading ? (
              <p className="text-center text-muted-foreground py-8">Loading offers...</p>
            ) : offers.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">No offers yet. Create your first one!</p>
            ) : (
              <div className="space-y-4">
                {offers.map((offer) => (
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
                        <Badge variant="outline" className="text-accent border-accent">
                          {offer.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-accent mr-4">
                        {offer.price} PLN
                      </span>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleDelete(offer.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
