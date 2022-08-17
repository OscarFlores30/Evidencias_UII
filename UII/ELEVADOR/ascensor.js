var img={
	ascensor_abierto:"elevador.png",
	ascensor_cerrado:"elevador.png",
	persona:"per.png",
	vacio:"vacio.svg"
};
var ascensor=document.getElementById('ascensor');
ascensor.setAttribute("src",this.img.ascensor_cerrado);
var piso_actual=5;
var limite=5;
var imagen=null;
generar();

document.getElementById('btn-subir').addEventListener("click",()=>{
	if(this.piso_actual<5){
		this.piso_actual++;
		ascensor.style.top=(5-(this.piso_actual))*20+"vh";
	}
});

document.getElementById('btn-bajar').addEventListener("click",()=>{
	if(this.piso_actual>1){
		this.piso_actual--;
		ascensor.style.top=(5-(this.piso_actual))*20+"vh";
	}
});

document.getElementById('btn-tomar').addEventListener("click",()=>{
		ascensor.setAttribute("src",this.img.ascensor_abierto);
		setTimeout(()=>{
			ascensor.setAttribute("src",this.img.ascensor_cerrado);
		},250);
		if(this.piso_actual==this.imagen.piso || this.piso_actual==1){
			if(this.piso_actual==1){
				document.getElementById('piso'+this.piso_actual).appendChild(ascensor.childNodes[0]);
				document.getElementById('total').innerHTML="Personas: "+ascensor.childNodes.length+" / 5";
			}else{
				if(ascensor.childNodes.length>=this.limite){
					alert("No hay espacio limite de 2 (Ve a la planta 1 y desmonta a las personas)");
				}else{
					this.imagen.piso=1;
					ascensor.appendChild(this.imagen.img);
					document.getElementById('total').innerHTML="Personas: "+ascensor.childNodes.length+" / 5";
					this.generar();
				}
			}
		}
});

function generar(){
	this.imagen={
		img:document.createElement("img"),
		piso:null
	};
	this.imagen.img.setAttribute("src",this.img.persona);
	this.imagen.piso=Math.round(Math.random()*3)+2;
	document.getElementById('piso'+this.imagen.piso).appendChild(this.imagen.img);
}