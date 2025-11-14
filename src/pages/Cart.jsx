import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Input } from '../components/ui/input';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center py-20">
            <ShoppingBag className="h-24 w-24 text-[#E8DCC8] mx-auto mb-6" />
            <h2 className="text-3xl font-serif text-[#5A4A3A] mb-4">Your Cart is Empty</h2>
            <p className="text-[#8A7A6A] mb-8">
              Discover our authentic Moroccan products and start shopping
            </p>
            <Link to="/products">
              <Button className="bg-[#C85A3C] hover:bg-[#B04A2C] text-white">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/products" className="inline-flex items-center text-[#5A4A3A] hover:text-[#C85A3C] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Continue Shopping
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif text-[#5A4A3A] mb-2">Shopping Cart</h1>
        <p className="text-[#8A7A6A] mb-12">{cartItems.length} item(s) in your cart</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <Card key={item.id} className="border-[#E8DCC8] bg-white">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg text-[#5A4A3A]">{item.name}</h3>
                          <p className="text-sm text-[#8A7A6A] capitalize">{item.category}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#C85A3C] hover:text-[#B04A2C] hover:bg-transparent"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border border-[#E8DCC8] rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="hover:bg-transparent text-[#5A4A3A]"
                          >
                            -
                          </Button>
                          <span className="px-4 py-1 text-[#5A4A3A] font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="hover:bg-transparent text-[#5A4A3A]"
                          >
                            +
                          </Button>
                        </div>
                        <span className="text-xl font-semibold text-[#C85A3C]">
                          €{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs text-[#8A7A6A] mt-2">
                        €{item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button
              variant="ghost"
              onClick={clearCart}
              className="text-[#C85A3C] hover:text-[#B04A2C] hover:bg-transparent"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Cart
            </Button>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="border-[#E8DCC8] bg-white sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-2xl font-serif text-[#5A4A3A] mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-[#5A4A3A]">
                    <span>Subtotal</span>
                    <span className="font-medium">€{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#5A4A3A]">
                    <span>Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <span className="text-[#D4AF37]">FREE</span>
                      ) : (
                        `€${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {subtotal > 0 && subtotal < 50 && (
                    <p className="text-xs text-[#8A7A6A]">
                      Add €{(50 - subtotal).toFixed(2)} more for free shipping
                    </p>
                  )}
                </div>

                <Separator className="my-6" />

                <div className="flex justify-between text-lg font-semibold text-[#5A4A3A] mb-6">
                  <span>Total</span>
                  <span className="text-[#C85A3C]">€{total.toFixed(2)}</span>
                </div>

                <div className="space-y-3 mb-6">
                  <Input
                    placeholder="Discount code"
                    className="border-[#E8DCC8] focus:border-[#C85A3C]"
                  />
                  <Button
                    variant="outline"
                    className="w-full border-[#C85A3C] text-[#C85A3C] hover:bg-[#C85A3C] hover:text-white"
                  >
                    Apply Code
                  </Button>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-[#C85A3C] hover:bg-[#B04A2C] text-white mb-3"
                >
                  Proceed to Checkout
                </Button>
                
                <Link to="/products">
                  <Button
                    variant="ghost"
                    className="w-full text-[#5A4A3A] hover:text-[#C85A3C] hover:bg-transparent"
                  >
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
