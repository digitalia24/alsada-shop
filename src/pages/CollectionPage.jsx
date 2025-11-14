import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, collections } from '../data/mockData';

const CollectionPage = () => {
  const { collection } = useParams();
  
  const collectionData = collections.find(c => c.slug === collection);
  const collectionProducts = products.filter(p => {
    if (collection === 'perfume') return p.category === 'perfume';
    if (collection === 'feminine') return p.gender === 'feminine';
    if (collection === 'masculine') return p.gender === 'masculine';
    return false;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${collectionData?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white px-4">
          <span className="text-sm font-medium bg-[#D4AF37] px-4 py-2 rounded-full mb-4 inline-block">
            {collectionData?.badge}
          </span>
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            {collectionData?.name}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {collectionData?.description}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-serif text-[#5A4A3A] mb-2">
              {collectionProducts.length} Products
            </h2>
            <p className="text-[#8A7A6A]">Handpicked for sophistication and grace</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {collectionProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionPage;
