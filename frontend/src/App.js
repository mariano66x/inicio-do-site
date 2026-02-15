import { useState, useEffect } from "react";
import "@/App.css";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Fone Bluetooth TWS Pro",
      category: "Tech",
      store: "Shopee",
      originalPrice: 159.90,
      price: 39.90,
      discount: 75,
      image: "https://images.unsplash.com/photo-1755182529034-189a6051faae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjBibHVldG9vdGglMjBoZWFkcGhvbmVzfGVufDB8fHx8MTc3MTE3NjIyNXww&ixlib=rb-4.1.0&q=85",
      featured: true
    },
    {
      id: 2,
      name: "Vestido Floral de Verão",
      category: "Moda",
      store: "Shein",
      originalPrice: 89.90,
      price: 35.90,
      discount: 60,
      image: "https://images.unsplash.com/photo-1763559008868-f5d0f308253b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBkcmVzcyUyMGZhc2hpb24lMjB3b21lbiUyMGNsb3RoaW5nfGVufDB8fHx8MTc3MTE3NjIyNnww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 3,
      name: "Kit Utensílios de Cozinha Premium",
      category: "Casa",
      store: "AliExpress",
      originalPrice: 129.90,
      price: 49.90,
      discount: 62,
      image: "https://images.unsplash.com/photo-1766399654242-e3af854f2a94?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwdXRlbnNpbHMlMjBjb29raW5nJTIwdG9vbHN8ZW58MHx8fHwxNzcxMTc2MjI2fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 4,
      name: "Paleta de Maquiagem Profissional",
      category: "Beleza",
      store: "Shopee",
      originalPrice: 79.90,
      price: 29.90,
      discount: 63,
      image: "https://images.unsplash.com/photo-1723150512429-bfa92988d845?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBjb3NtZXRpY3MlMjBiZWF1dHklMjBwcm9kdWN0c3xlbnwwfHx8fDE3NzExNzYyMjd8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 5,
      name: "Smartwatch Fitness Tracker",
      category: "Tech",
      store: "TikTok Shop",
      originalPrice: 249.90,
      price: 89.90,
      discount: 64,
      image: "https://images.unsplash.com/photo-1665860455418-017fa50d29bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNoJTIwZml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8fHwxNzcxMTc2MjI4fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 6,
      name: "Mochila de Viagem Impermeável",
      category: "Moda",
      store: "AliExpress",
      originalPrice: 149.90,
      price: 59.90,
      discount: 60,
      image: "https://images.unsplash.com/photo-1673505705687-dffbfd02b613?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMHRyYXZlbCUyMGJhZ3xlbnwwfHx8fDE3NzExNzYyMjh8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 7,
      name: "Fone de Ouvido Gamer RGB",
      category: "Tech",
      store: "Shopee",
      originalPrice: 199.90,
      price: 79.90,
      discount: 60,
      image: "https://images.unsplash.com/photo-1570993492903-ba4c3088f100?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwyfHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjBibHVldG9vdGglMjBoZWFkcGhvbmVzfGVufDB8fHx8MTc3MTE3NjIyNXww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 8,
      name: "Conjunto Lingerie Premium",
      category: "Moda",
      store: "Shein",
      originalPrice: 69.90,
      price: 24.90,
      discount: 64,
      image: "https://images.unsplash.com/photo-1758539197931-ef90ca4a3c5e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBkcmVzcyUyMGZhc2hpb24lMjB3b21lbiUyMGNsb3RoaW5nfGVufDB8fHx8MTc3MTE3NjIyNnww&ixlib=rb-4.1.0&q=85"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });

  const categories = ["Todos", "Tech", "Moda", "Casa", "Beleza"];

  // Cronômetro da oferta do dia
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              minutes = 59;
              seconds = 59;
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Filtro de busca e categoria
  useEffect(() => {
    let filtered = products;

    // Filtro por categoria
    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filtro por busca (nome, categoria e loja)
    if (searchTerm.trim() !== "") {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(search) ||
        p.category.toLowerCase().includes(search) ||
        p.store.toLowerCase().includes(search)
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  const storeColors = {
    "Shopee": "bg-orange-500",
    "Shein": "bg-pink-500",
    "TikTok Shop": "bg-black",
    "AliExpress": "bg-red-500"
  };

  const featuredProduct = products.find(p => p.featured);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header" data-testid="header">
        <div className="header-content">
          <div className="logo" data-testid="logo">
            <i className="fas fa-fire-alt"></i>
            <span>Achados da Web</span>
          </div>
          
          <div className="search-container" data-testid="search-container">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              placeholder="Buscar ofertas por produto, loja ou categoria..."
              className="search-input"
              data-testid="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="categories-quick" data-testid="categories-quick">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                data-testid={`category-${cat.toLowerCase()}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {featuredProduct && (
        <section className="hero-section" data-testid="hero-section">
          <div className="hero-content">
            <div className="hero-badge" data-testid="hero-badge">
              <i className="fas fa-bolt"></i> OFERTA DO DIA
            </div>
            <h1 className="hero-title" data-testid="hero-title">{featuredProduct.name}</h1>
            <p className="hero-subtitle">Desconto imperdível de {featuredProduct.discount}%</p>
            
            <div className="countdown" data-testid="countdown">
              <div className="countdown-item">
                <span className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="countdown-label">Horas</span>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item">
                <span className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="countdown-label">Min</span>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item">
                <span className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="countdown-label">Seg</span>
              </div>
            </div>

            <div className="hero-price" data-testid="hero-price">
              <span className="price-old">R$ {featuredProduct.originalPrice.toFixed(2)}</span>
              <span className="price-new">R$ {featuredProduct.price.toFixed(2)}</span>
            </div>

            <button className="cta-button" data-testid="hero-cta-button">
              <i className="fas fa-bolt"></i>
              Ver Ofertas Relâmpago
            </button>
          </div>
          
          <div className="hero-image-container">
            <img src={featuredProduct.image} alt={featuredProduct.name} className="hero-image" />
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="products-section" data-testid="products-section">
        <div className="section-header">
          <h2 className="section-title" data-testid="section-title">
            <i className="fas fa-tags"></i>
            Todas as Ofertas
          </h2>
          <p className="section-subtitle">{filteredProducts.length} produtos encontrados</p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-results" data-testid="no-results">
            <i className="fas fa-search"></i>
            <p>Nenhum produto encontrado</p>
            <button onClick={() => { setSearchTerm(""); setSelectedCategory("Todos"); }} className="reset-btn" data-testid="reset-filters-button">
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="products-grid" data-testid="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card" data-testid={`product-card-${product.id}`}>
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className={`store-badge ${storeColors[product.store]}`} data-testid={`store-badge-${product.id}`}>
                    {product.store}
                  </div>
                  <div className="discount-badge" data-testid={`discount-badge-${product.id}`}>
                    -{product.discount}%
                  </div>
                </div>
                
                <div className="product-info">
                  <h3 className="product-name" data-testid={`product-name-${product.id}`}>{product.name}</h3>
                  <p className="product-category" data-testid={`product-category-${product.id}`}>
                    <i className="fas fa-tag"></i> {product.category}
                  </p>
                  
                  <div className="product-prices">
                    <span className="price-original" data-testid={`price-original-${product.id}`}>
                      R$ {product.originalPrice.toFixed(2)}
                    </span>
                    <span className="price-promotional" data-testid={`price-promotional-${product.id}`}>
                      R$ {product.price.toFixed(2)}
                    </span>
                  </div>
                  
                  <button className="product-cta" data-testid={`product-cta-${product.id}`}>
                    <i className="fas fa-shopping-cart"></i>
                    Pegar Promoção
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="footer" data-testid="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <i className="fas fa-fire-alt"></i>
            <span>Achados da Web</span>
          </div>
          <p className="footer-text">As melhores ofertas em um só lugar</p>
          <div className="footer-platforms">
            <span>Parceiros:</span>
            <span className="platform-name">Shopee</span>
            <span className="platform-name">Shein</span>
            <span className="platform-name">TikTok Shop</span>
            <span className="platform-name">AliExpress</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;