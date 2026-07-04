let carrinho = [];
let total = 0;

function add(nome, preco){
  carrinho.push({nome, preco});
  total += preco;
  atualizar();
}

function atualizar(){
  let lista = document.getElementById("lista");
  let totalEl = document.getElementById("total");

  lista.innerHTML = "";

  carrinho.forEach((item)=>{
    let li = document.createElement("li");
    li.textContent = item.nome + " - R$ " + item.preco;
    lista.appendChild(li);
  });

  totalEl.textContent = total;
}

function finalizar(){
  let pagamento = document.getElementById("pagamento").value;

  let msg = "🍧 Novo pedido Açaí Pulse:%0A";

  carrinho.forEach(item=>{
    msg += "- " + item.nome + "%0A";
  });

  msg += "%0ATotal: R$ " + total;
  msg += "%0APagamento: " + pagamento;

  let url = "https://wa.me/5547996932514?text=" + msg;

  window.open(url, "_blank");
}
