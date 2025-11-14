import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useCart } from '../context/CartContext';
import { toast } from '../hooks/use-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group overflow-hidden border-[#E8DCC8] hover:shadow-xl transition-all duration-300 bg-white">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.badges && product.badges.length > 0 && (
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.badges.map((badge, index) => (
                <Badge
                  key={index}
                  className="bg-[#D4AF37] text-white hover:bg-[#C19B2A] text-xs px-3 py-1"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          )}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-white/90 hover:bg-white"
            >
              <Heart className="h-4 w-4 text-[#C85A3C]" />
            </Button>
          </div>
        </div>
        <CardContent className="p-5">
          <div className="mb-2">
            <h3 className="font-semibold text-lg text-[#5A4A3A] group-hover:text-[#C85A3C] transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-[#8A7A6A] mt-1 line-clamp-2">
              {product.description}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-semibold text-[#C85A3C]">€{product.price}</span>
            <Button
              size="sm"
              onClick={handleAddToCart}
              className="bg-[#C85A3C] hover:bg-[#B04A2C] text-white"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
