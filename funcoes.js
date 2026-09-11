function multiplicaNumeros(){
    let n1 = 2;
    let n2 = 3;
    console.log(n1 * n2);
}

multiplicaNumeros();


function multiplicaComParametros(v1, v2){
    console.log(v1 , " x ", v2 , " = ",v1 * v2);
}
multiplicaComParametros(3,4);
multiplicaComParametros(4,10);
multiplicaComParametros(6,7);

function EquacaoDeBurrinho (x,y,z){
    let resultado = (x + y) / z;
}
console.log(EquacaoDeBurrinho(2,3,4));

const EquacaoDeTontinho = (x,y,z,w)=> {
    return(x+y)*(z+w)/2;
}
console.log("o resultado")