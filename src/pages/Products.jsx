import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';

const Products = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [filterGender, setFilterGender] = useState('all');

  let filteredProducts = [...products];

  // Filter by gender
  if (filterGender !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.gender === filterGender);
  }

  // Sort products
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      break;
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-[#5A4A3A] mb-4">
            All Products
          </h1>
          <p className="text-lg text-[#8A7A6A]">
            Discover our complete collection of authentic Moroccan products
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Filter className="h-5 w-5 text-[#5A4A3A]" />
            <Select value={filterGender} onValueChange={setFilterGender}>
              <SelectTrigger className="w-[180px] border-[#E8DCC8] focus:border-[#C85A3C]">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="feminine">Feminine</SelectItem>
                <SelectItem value="masculine">Masculine</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px] border-[#E8DCC8] focus:border-[#C85A3C]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name: A to Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Product Count */}
        <p className="text-sm text-[#8A7A6A] mb-6">
          Showing {filteredProducts.length} products
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
