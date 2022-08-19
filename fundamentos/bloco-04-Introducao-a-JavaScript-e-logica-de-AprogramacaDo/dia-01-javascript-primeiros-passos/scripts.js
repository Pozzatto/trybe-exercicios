let salarioBruto = 3000;
let salarioSemInss = 0;
let salario = 0;

if (salarioBruto <= 1556.94){
  salarioSemInss = salarioBruto * 0.92;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
  salarioSemInss = salarioBruto * 0.91;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
  salarioSemInss = salarioBruto * 0.89;
} else if (salarioBruto > 5189.82){
  salarioSemInss = salarioBruto - 570.88;
};

if (salarioSemInss <= 1903.98){
  salario = salarioSemInss;
} else if (salarioSemInss >= 1903.99 && salarioSemInss <= 2826.65){
  salario = ((salarioSemInss * 0.925) + 142.80);
} else if (salarioSemInss >= 2826.66 && salarioSemInss <= 3751.05){
  salario = ((salarioSemInss * 0.85) + 354.80);
} else if (salarioSemInss >= 3751.06 && salarioSemInss <= 4664.68){
  salario = ((salarioSemInss * 0.775) + 636.13);
} else if (salarioSemInss > 4664.68){
  salario = ((salarioSemInss * 0.725) + 869.36);
};
console.log('R$', salario);