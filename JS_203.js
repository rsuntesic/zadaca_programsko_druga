let velicina = 4//prompt("Unesite veličinu kvadrata:");
let bijeli = " ";
let crni = "#";
let polje="";
let brojac = 1;
if (velicina > 1){
    while (brojac <= velicina){ 
           for(let i=2; i <= velicina; i++){ 
               let ostatak = i%2
               if (ostatak === 0) {
                   polje = polje + crni
                }    
               else {
                   polje = polje + bijeli
                }
           }
           if(brojac%2 === 0){
           console.log(bijeli+polje)
           }
           else
           {console.log(polje)}
           polje= "";
           brojac++; 
    }
}
else console.log("Polje mora imati dimenzije barem 2X2");