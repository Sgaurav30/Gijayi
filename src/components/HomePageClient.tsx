'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, Shield, Truck, RotateCcw, Sparkles } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { Collection, Product } from '@/lib/types';

interface HomePageClientProps {
  products: Product[];
  collections: Collection[];
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 min-h-[640px] md:min-h-[720px] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-20 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center min-h-[640px] md:min-h-[720px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-slate-500 mb-6 font-medium">New Collection</p>
            <h1 className="font-serif text-6xl md:text-7xl leading-tight text-slate-900 mb-8">
              Timeless<br />Elegance
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-md">
              Handcrafted artisanal jewellery that celebrates tradition, heritage, and the beauty of fine craftsmanship. Each piece tells a story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors font-medium tracking-wide uppercase text-sm"
              >
                Explore Collection <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors font-medium tracking-wide uppercase text-sm"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=90"
              alt="Luxury Collection"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SignatureSection() {
  return (
    <section className="py-24 md:py-32 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-slate-500 mb-6 font-medium">The Gijayi Philosophy</p>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight text-slate-900 mb-8">
              Craft Meets<br />Heritage
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 mx-auto mb-8" />
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              Every piece in the Gijayi collection represents a labour of love. We work with master artisans who have inherited their craft through generations, creating jewellery that celebrates India's rich heritage while embracing contemporary aesthetics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Authentic Craftsmanship', desc: 'Handcrafted using traditional techniques passed down through generations of artisans.' },
                { title: 'Heritage Inspired', desc: 'Designs rooted in the rich cultural tapestry of Indian jewellery-making traditions.' },
                { title: 'Quality Certified', desc: 'Every piece comes with authenticity certificates and premium material guarantees.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-sm font-medium text-slate-900 mb-3 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CollectionsSection({ collections }: { collections: Collection[] }) {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-slate-500 mb-4 font-medium">Collections</p>
          <h2 className="font-serif text-5xl md:text-6xl text-slate-900 mb-6">Explore Our Collections</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">Curated collections that celebrate timeless beauty and contemporary elegance.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.slice(0, 3).map((col, i) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{ height: i === 0 ? '500px' : '380px' }}
            >
              <Image 
                src={col.image} 
                alt={col.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                sizes="(max-width: 768px) 100vw, 33vw" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60 group-hover:to-black/80 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-8 text-white">
                <p className="text-xs tracking-[0.4em] uppercase text-slate-200 mb-3">{col.itemCount} pieces</p>
                <h3 className="font-serif text-3xl md:text-4xl mb-4">{col.name}</h3>
                <p className="text-sm text-white/90 max-w-xs mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">{col.description}</p>
                <Link 
                  href={`/collections/${col.slug}`} 
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-2 text-xs tracking-widest uppercase hover:bg-white hover:text-slate-900 transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-lg font-medium"
                >
                  View Collection <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BestsellersSection({ products }: { products: Product[] }) {
  const bestsellers = products.filter((p) => p.isBestseller).slice(0, 4);
  return (
    <section className="py-24 md:py-32 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16 gap-8"
        >
          <div className="flex-1">
            <p className="text-[10px] tracking-[0.5em] uppercase text-slate-500 mb-4 font-medium">Most Loved</p>
            <h2 className="font-serif text-5xl md:text-6xl text-slate-900">Bestsellers</h2>
            <p className="text-slate-600 mt-4 max-w-md">Discover the pieces our customers love most. Each selection celebrates quality, craftsmanship, and timeless design.</p>
          </div>
          <Link href="/shop?filter=bestsellers" className="hidden md:flex items-center gap-2 text-sm tracking-widest uppercase text-slate-900 hover:text-slate-600 transition-colors font-medium whitespace-nowrap">
            View All <ArrowRight size={14} />
          </Link>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bestsellers.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="mt-12 md:hidden text-center">
          <Link href="/shop?filter=bestsellers" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-slate-900 hover:text-slate-600 transition-colors font-medium">
            View All <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function BrandStorySection() {
  return (
    <section className="py-0">
      <div className="grid md:grid-cols-2 min-h-screen md:min-h-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[350px] md:min-h-[600px] order-2 md:order-1"
        >
          <Image 
            src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=90" 
            alt="Gijayi Craftsmanship" 
            fill 
            className="object-cover" 
            sizes="50vw" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center px-8 md:px-16 py-16 md:py-24 order-1 md:order-2"
        >
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-slate-300 mb-6 font-medium">Our Heritage</p>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-8">Where Tradition<br />Meets Vision</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-slate-200 to-transparent mb-8" />
            <div className="space-y-6 mb-10">
              <p className="text-base text-slate-200 leading-relaxed">
                Founded on the belief that true luxury lies in authenticity and craftsmanship, Gijayi celebrates India&apos;s
                jewellery-making heritage. Each piece is created by master artisans who have inherited their art through
                generations of devotion.
              </p>
              <p className="text-base text-slate-200 leading-relaxed">
                We source only the finest materials – ethically-sourced gemstones and noble metals – ensuring every jewel that
                leaves our atelier is a testament to quality, rarity, and timeless beauty that will be treasured for
                generations to come.
              </p>
            </div>
            <Link href="/about" className="inline-flex items-center gap-3 text-xs tracking-[0.4em] uppercase text-slate-100 hover:text-white transition-colors font-medium group">
              Read Our Story <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function NewArrivalsSection({ products }: { products: Product[] }) {
  const newArrivals = products.filter((p) => p.isNew).slice(0, 6);
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16 gap-8"
        >
          <div className="flex-1">
            <p className="text-[10px] tracking-[0.5em] uppercase text-slate-500 mb-4 font-medium">Fresh From The Atelier</p>
            <h2 className="font-serif text-5xl md:text-6xl text-slate-900">New Arrivals</h2>
            <p className="text-slate-600 mt-4 max-w-md">Introducing the latest creations from our master artisans. Contemporary designs with a timeless soul.</p>
          </div>
          <Link href="/shop?filter=new" className="hidden md:flex items-center gap-2 text-sm tracking-widest uppercase text-slate-900 hover:text-slate-600 transition-colors font-medium whitespace-nowrap">
            View All <ArrowRight size={14} />
          </Link>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="mt-12 text-center">
          <Link href="/products" className="inline-flex items-center justify-center gap-2 border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-lg hover:bg-slate-900 hover:text-white transition-colors font-medium tracking-widest uppercase text-sm">
            Browse All Products <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: 'Priya Sharma', location: 'Mumbai', text: 'The Kundan necklace I ordered for my wedding was absolutely breathtaking. The craftsmanship was exquisite and arrived beautifully packaged. Will treasure it forever.', rating: 5 },
  { name: 'Ananya Reddy', location: 'Hyderabad', text: 'Gijayi has the most stunning collection I\'ve seen online. The quality is superior – you can feel the difference when you hold the pieces. Worth every rupee.', rating: 5 },
  { name: 'Meera Nair', location: 'Kochi', text: 'Ordered the pearl jhumkas and I receive compliments every single time I wear them. Lightweight, beautiful, and exactly as pictured. Fast delivery too!', rating: 5 },
];

function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-slate-50 to-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-slate-500 mb-4 font-medium">Loved By Customers</p>
          <h2 className="font-serif text-5xl md:text-6xl text-slate-900 mb-6">Customer Stories</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Real reviews from real customers who cherish their Gijayi pieces.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={18} fill="#d97706" className="text-amber-500" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 italic text-lg">
                &quot;{t.text}&quot;
              </p>
              <div className="pt-6 border-t border-slate-200">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const trustSignals = [
  { icon: Shield, title: 'Certified Authentic', desc: 'Every piece comes with a certificate of authenticity and quality assurance.' },
  { icon: Truck, title: 'Free Shipping', desc: 'Complimentary shipping on all orders above ₹5,000 across India.' },
  { icon: RotateCcw, title: 'Easy Returns', desc: 'Hassle-free 15-day returns. Your satisfaction is our priority.' },
  { icon: Sparkles, title: 'Luxury Concierge', desc: 'Personalised support for bridal edits, gifting and custom styling.' },
];

function TrustSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-slate-50 to-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-slate-500 mb-4 font-medium">Why Choose Gijayi</p>
          <h2 className="font-serif text-5xl md:text-6xl text-slate-900 mb-6">Trusted by Collectors</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustSignals.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white rounded-xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-slate-100 rounded-lg w-fit p-4 mb-6 group-hover:bg-slate-900 transition-colors">
                  <Icon size={28} className="text-slate-900 group-hover:text-slate-100 transition-colors" />
                </div>
                <h4 className="font-medium text-lg text-slate-900 mb-3">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  const instaPics = [
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
    'https://images.unsplash.com/photo-1652812376524-67a7b9490e0e?w=400&q=80',
    'https://images.unsplash.com/photo-1584811644165-33078f50eb15?w=400&q=80',
    'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=81',
  ];
  
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-slate-500 mb-4 font-medium">Follow The Journey</p>
          <h2 className="font-serif text-5xl md:text-6xl text-slate-900 mb-6">@gijayi.official</h2>
          <p className="text-lg text-slate-600">Behind-the-scenes, new launches, and customer love stories.</p>
        </motion.div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {instaPics.map((src, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/gijayi.official"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image 
                src={src} 
                alt={`Instagram ${i + 1}`} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
                sizes="(max-width: 768px) 33vw, 16vw" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium transition-opacity">View Post</span>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/gijayi.official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-lg hover:bg-slate-900 hover:text-white transition-colors font-medium tracking-widest uppercase text-sm"
          >
            Follow Us <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePageClient({ products, collections }: HomePageClientProps) {
  return (
    <>
      <HeroSection />
      <SignatureSection />
      <CollectionsSection collections={collections} />
      <BestsellersSection products={products} />
      <BrandStorySection />
      <TrustSection />
      <NewArrivalsSection products={products} />
      <TestimonialsSection />
      <InstagramSection />
    </>
  );
}
