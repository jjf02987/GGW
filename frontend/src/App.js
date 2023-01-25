
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a href="/">Glass Gone Wow McKnight</a>
      </header>
      <main>
        <h1> Featured Glass </h1>
        {
          data.products.map(product => (<div>
            <img src= {product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
          ))}
      </main>
    </div>
  );
}

export default App;
