function exe2(){

        var vet = []
    
        for (var i=0; i < 3; i++){
            var objeto = {}
            // coloca os dados no objeto
            objeto.salario = Number(prompt("Insira o salário: "))
            objeto.filhos = Number(prompt("Quantidade de filhos: "))
            objeto.idade = Number(prompt("Idade: "))
            objeto.sexo = prompt("Sexo, M para Masculino ou F para Feminino: ")

            vet.push(objeto)

        }
    
        var mediaSalario = 0;
        var mediaFilhos = 0;
        var maiorSalario = vet[0].salario
        var qtdeMulheres = 0;
    
        for (var i=0; i<vet.lenght; i++){
            mediaSalario = mediaSalario + vet[i].salario
            mediaFilhos = mediaFilhos + vet[i].filhos
            
            if (vet[i].salario > maiorSalario){
                maiorSalario = vet[i].salario
            }
            
            if ((vet[i].sexo == 'F') && (vet[i].salario > 1000)){
                qtdeMulheres++;
            }
    
    
        }
        alert ("A media salarial é: " + mediaSalario/vet.lenght)
        alert ("A media filhos é: " + mediaFilhos/vet.lenght)
        alert ("O maior salário: " + maiorSalario)
        alert ("A quantidade de Mulheres com salário maior que R$1000: " + qtdeMulheres*vet.lenght/100)
    
    
    
    
}
