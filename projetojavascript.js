let produtos = [];
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

const carregarProdutos = async () => {
  const resposta = await fetch('https://fakestoreapi.com/products');
  const dados = await resposta.json();
  produtos = dados;
  exibirProdutos();
};

const exibirProdutos = () => {
  const containerCatalogo = document.getElementById('catalog-container');
  containerCatalogo.innerHTML = '';

  produtos.forEach(produto => {
    const cartaoProduto = document.createElement('div');
    cartaoProduto.classList.add('product-card');
    cartaoProduto.innerHTML = `
      <img src="${produto.image}" alt="${produto.title}">
      <h3>${produto.title}</h3>
      <p>${produto.description}</p>
      <p>R$ ${produto.price}</p>
      <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
    `;
    containerCatalogo.appendChild(cartaoProduto);
  });
};

const adicionarAoCarrinho = (produtoId) => {
  const produto = produtos.find(p => p.id === produtoId);
  const produtoExistente = carrinho.find(p => p.id === produtoId);

  if (produtoExistente) {
    produtoExistente.quantity++;
  } else {
    produto.quantity = 1;
    carrinho.push(produto);
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(`${produto.title} adicionado ao carrinho!`);
};

const mostrarCarrinho = () => {
  document.getElementById('cart-container').style.display = 'block';
  document.getElementById('catalog-container').style.display = 'none';
  exibirCarrinho();
};

const exibirCarrinho = () => {
  const containerItensCarrinho = document.getElementById('cart-items');
  containerItensCarrinho.innerHTML = '';
  let total = 0;

  carrinho.forEach(item => {
    total += item.price * item.quantity;
    const itemCarrinho = document.createElement('div');
    itemCarrinho.classList.add('cart-item');
    itemCarrinho.innerHTML = `
      <span>${item.title} (x${item.quantity})</span>
      <span>R$ ${item.price * item.quantity}</span>
    `;
    containerItensCarrinho.appendChild(itemCarrinho);
  });

  document.getElementById('total-price').innerHTML = `Total: R$ ${total.toFixed(2)}`;
};

const finalizarCompra = () => {
  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }

  alert('Compra realizada com sucesso!');
  carrinho = [];
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  mostrarCatalogo();
};

window.onload = carregarProdutos;

