import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, ArrowLeft, Package, Truck, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { useCart } from '../context/CartContext';
import { toast } from '../hooks/use-toast';
import { products } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === parseInt(id));
  const relatedProducts = products
    .filter(p => p.id !== product?.id && p.gender === product?.gender)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-[#5A4A3A] mb-4">Product not found</h2>
          <Link to="/products">
            <Button className="bg-[#C85A3C] hover:bg-[#B04A2C] text-white">
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/products" className="inline-flex items-center text-[#5A4A3A] hover:text-[#C85A3C] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badges && product.badges.length > 0 && (
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    className="bg-[#D4AF37] text-white hover:bg-[#C19B2A] px-3 py-1"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-[#5A4A3A] mb-4">
              {product.name}
            </h1>
            <div className="text-3xl font-semibold text-[#C85A3C] mb-6">
              €{product.price}
            </div>
            <p className="text-lg text-[#8A7A6A] mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Scent Notes */}
            {product.scentNotes && product.scentNotes.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#5A4A3A] mb-3">Scent Notes</h3>
                <div className="flex flex-wrap gap-2">
                  {product.scentNotes.map((note, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-[#C85A3C] text-[#C85A3C] px-4 py-2"
                    >
                      {note}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <Separator className="my-8" />

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-[#E8DCC8] rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="hover:bg-transparent text-[#5A4A3A]"
                >
                  -
                </Button>
                <span className="px-6 py-2 text-lg font-medium text-[#5A4A3A]">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="hover:bg-transparent text-[#5A4A3A]"
                >
                  +
                </Button>
              </div>
              <Button
                size="lg"
                onClick={handleAddToCart}
                className="flex-1 bg-[#C85A3C] hover:bg-[#B04A2C] text-white py-6 text-lg"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#C85A3C] text-[#C85A3C] hover:bg-[#C85A3C] hover:text-white py-6"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="border-[#E8DCC8]">
                <CardContent className="flex items-center p-4">
                  <Package className="h-5 w-5 text-[#C85A3C] mr-3" />
                  <span className="text-sm text-[#5A4A3A]">Premium packaging included</span>
                </CardContent>
              </Card>
              <Card className="border-[#E8DCC8]">
                <CardContent className="flex items-center p-4">
                  <Truck className="h-5 w-5 text-[#C85A3C] mr-3" />
                  <span className="text-sm text-[#5A4A3A]">Free shipping on orders over €50</span>
                </CardContent>
              </Card>
              <Card className="border-[#E8DCC8]">
                <CardContent className="flex items-center p-4">
                  <Shield className="h-5 w-5 text-[#C85A3C] mr-3" />
                  <span className="text-sm text-[#5A4A3A]">Authentic Moroccan products</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl md:text-4xl font-serif text-[#5A4A3A] mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
