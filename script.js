function doar() {
    let doacao = confirm("Deseja efetuar a doação?")
    if (doacao == true) {
      alert("O mundo agradece, muito obrigado!")
    }
    
    var valor = document.getElementById("valor").value
  
    localStorage.setItem("Valor da Doação", valor)
  }
