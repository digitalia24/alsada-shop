import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import ProductCard from '../components/ProductCard';
import { products, testimonials, collections } from '../data/mockData';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F5EFE6] to-[#FAF7F2] py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium text-[#C85A3C] bg-[#C85A3C]/10 px-4 py-2 rounded-full">
                Authentic Moroccan Luxury
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-[#5A4A3A] mb-6 leading-tight">
              Discover the Essence of Morocco
            </h1>
            <p className="text-lg md:text-xl text-[#8A7A6A] mb-8 leading-relaxed">
              Authentic Moroccan perfumes, spices, and cultural treasures. Bringing the essence of Morocco to Portugal and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button
                  size="lg"
                  className="bg-[#C85A3C] hover:bg-[#B04A2C] text-white px-8 py-6 text-lg"
                >
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#C85A3C] text-[#C85A3C] hover:bg-[#C85A3C] hover:text-white px-8 py-6 text-lg"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      </section>

      {/* Featured Collections */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-[#5A4A3A] mb-4">
              Featured Collections
            </h2>
            <p className="text-lg text-[#8A7A6A] max-w-2xl mx-auto">
              Explore our curated collections of authentic Moroccan products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map(collection => (
              <Link key={collection.id} to={`/${collection.slug}`}>
                <Card className="group overflow-hidden border-[#E8DCC8] hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <span className="text-xs font-medium bg-[#D4AF37] px-3 py-1 rounded-full mb-3 inline-block">
                        {collection.badge}
                      </span>
                      <h3 className="text-2xl font-serif mb-2">{collection.name}</h3>
                      <p className="text-sm text-white/90">{collection.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-[#5A4A3A] mb-4">
              Signature Fragrances
            </h2>
            <p className="text-lg text-[#8A7A6A] max-w-2xl mx-auto">
              Handpicked selections from our exclusive perfume collection
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#C85A3C] text-[#C85A3C] hover:bg-[#C85A3C] hover:text-white"
              >
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#F5EFE6] to-[#FAF7F2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-[#5A4A3A] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-[#8A7A6A]">
              Trusted by customers across Portugal
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <Card key={testimonial.id} className="border-[#E8DCC8] bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-[#5A4A3A] mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 bg-[#C85A3C] text-white">
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold text-[#5A4A3A]">{testimonial.name}</p>
                      <p className="text-sm text-[#8A7A6A]">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#C85A3C] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Experience Moroccan Luxury Today
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who have discovered the authentic essence of Morocco
          </p>
          <Link to="/products">
            <Button
              size="lg"
              className="bg-white text-[#C85A3C] hover:bg-[#F5EFE6] px-8 py-6 text-lg"
            >
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
