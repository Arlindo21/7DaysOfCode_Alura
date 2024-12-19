
iniciarJogo=()=> {
    alert("Bem-vindo ao jogo de escolhas na programação!");
  
    
    let area = prompt("Você quer seguir para a área de Front-End ou Back-End?");
  
    if (area.toLowerCase() === "front-end" || area.toLowerCase() === "back-end") {
      let tecnologia;
  
      if (area.toLowerCase() === "front-end") {
        tecnologia = prompt("Você quer aprender React ou Vue?");
        if (tecnologia.toLowerCase() === "react" || tecnologia.toLowerCase() === "vue") {
          alert(`Ótima escolha! ${tecnologia} é uma ferramenta poderosa no Front-End.`);
        } else {
          alert("Escolha inválida. Iniciando novamente...");
          return iniciarJogo();
        }
      } else {
        tecnologia = prompt("Você quer aprender C# ou Java?");
        if (tecnologia.toLowerCase() === "c#" || tecnologia.toLowerCase() === "java") {
          alert(`Ótima escolha! ${tecnologia} é essencial no desenvolvimento Back-End.`);
        } else {
          alert("Escolha inválida. Iniciando novamente...");
          return iniciarJogo();
        }
      }
  
      
      let especializacao = prompt("Você quer se especializar na área escolhida ou se tornar Fullstack? (Digite 'especializar' ou 'fullstack')");
  
      if (especializacao.toLowerCase() === "especializar") {
        alert("Ótimo! Focar em se especializar é uma excelente maneira de se destacar na área.");
      } else if (especializacao.toLowerCase() === "fullstack") {
        alert("Ótima decisão! Ser Fullstack permite ter uma visão completa do desenvolvimento.");
      } else {
        alert("Escolha inválida. Vamos continuar o jogo mesmo assim.");
      }
  
      
      let tecnologiasExtras = [];
      let desejaAprenderMais = "sim";
  
      while (desejaAprenderMais.toLowerCase() === "sim") {
        let tecnologiaExtra = prompt("Qual tecnologia você gostaria de aprender?");
        if (tecnologiaExtra) {
          tecnologiasExtras.push(tecnologiaExtra);
          alert(`Interessante! Aprender ${tecnologiaExtra} pode abrir muitas portas.`);
        }
        desejaAprenderMais = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (Digite 'ok' para continuar ou qualquer outra coisa para sair)");
      }
  
      
      alert(`Parabéns por suas escolhas! Aqui está um resumo do que você quer aprender: \nÁrea: ${area} \nEspecialização: ${especializacao} \nTecnologias extras: ${tecnologiasExtras.join(", ")}`);
    } else {
      alert("Escolha inválida. Por favor, inicie o jogo novamente e escolha entre Front-End ou Back-End.");
      return iniciarJogo();
    }
  }
  
  
  iniciarJogo();
  