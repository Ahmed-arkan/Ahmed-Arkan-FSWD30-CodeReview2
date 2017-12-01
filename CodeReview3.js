function MyFunction() {
 Ams =[1500, 500, 1800, 700];
 Lon = [2500, 1500, 1000, 900];
 Avr1 = Ams[0] + Ams[1] + Ams[2] + Ams[3];
 Avr2 = Lon[0] + Lon[1] + Lon[2] + Lon[3];
 R1 = Avr1 / 4;
 R2 = Avr2 / 4;
 Price = R2 - R1;

 	
	document.getElementById("pend").innerHTML = Price + " €";
	document.getElementById("londo").innerHTML = R1 + " €";
 	document.getElementById("amsa").innerHTML =  R2 + " €";
}
MyFunction()