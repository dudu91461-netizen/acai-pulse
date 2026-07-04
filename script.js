let carrinho = [];
let total = 0;

function add(nome, preco){
  carrinho.push({nome, preco});
  total += preco;
  atualizar();
}

function aplicarCupom(){
  let cupom = document.getElementById("cupom").value.trim().toUpperCase();

  if(cupom === "PULSE10"){
    total = total * 0.9;
    alert("Cupom aplicado: 10% OFF");
  }
  else if(cupom === "BEMVINDO"){
    total = total - 5;
    alert("Cupom aplicado: R$5 OFF");
  }
  else if(cupom === "ACAI15" && total >= 50){
    total = total * 0.85;
    alert("Cupom aplicado: 15% OFF");
  }
  else{
    alert("Cupom inválido ou não atende condições");
  }

  atualizar();
}

function atualizar(){
  let lista = document.getElementById("lista");
  let totalEl = document.getElementById("total");

  lista.innerHTML = "";

  carrinho.forEach((item)=>{
    let li = document.createElement("li");
    li.textContent = item.nome + " - R$ " + item.preco.toFixed(2);
    lista.appendChild(li);
  });

  totalEl.textContent = total.toFixed(2);
}

function finalizar(){
  let pagamento = document.getElementById("pagamento").value;

  let msg = "🍧 Novo pedido Açaí Pulse:%0A";

  carrinho.forEach(item=>{
    msg += "- " + item.nome + "%0A";
  });

  msg += "%0ATotal: R$ " + total.toFixed(2);
  msg += "%0APagamento: " + pagamento;

  let url = "https://wa.me/5547996932514?text=" + msg;

  window.open(url, "_blank");
}
