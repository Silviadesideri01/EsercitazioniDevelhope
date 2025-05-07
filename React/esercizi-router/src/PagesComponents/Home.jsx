

const products = [
  {
    id: 1,
    name: 'Giacche primaverili',
    price: 'A partire da 19.99 €',
    description:"Levi's, Max Mara, Carhartt...",
    image: 'https://plus.unsplash.com/premium_photo-1700053641043-8cc03ce39b29?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Sneakers Ultra',
    price: 'A partire da 79.99 €',
    description: "Nike, New Balance, Adidas...",
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Accessori alla moda',
    price: 'A partire da 39.99 €',
    description : "Gucci, D&G, Ray-Ban...",
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Benvenuto nell'Home di Zalando!</h1>
      <p>Scopri i nostri prodotti più popolari del momento:</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              textAlign: 'center',
              borderRadius: '8px',
            }}
          >
            <img src={product.image} alt={product.name} width="100%" />
            <h3>{product.name}</h3>
            <p><cite>{product.description}</cite></p>
            <p style={{ fontWeight: 'bold' }}>{product.price}</p>
            <button style={{ padding: '5px 10px' }}>Aggiungi al carrello</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
