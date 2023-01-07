function mostrarMensaje(){



var nombres = ["Maria", "José", "Mohammed", "Yan","Ali","John","David","Ana","Michael","Juan","Mary","Robert","Daniel","Luis","Carlos","Antonio","Joseph","Elena","Peter","Fatima","Alexandra","Richard","Paul","Olga","Pedro","William","Rosa","Thomas","Jorge","Elizabeth","Patricia","Manuel","Victor","Sandra","Emmanuel","Samuel","Sarah","Tatiana","Rita","Martin","Patrick","Natalia","Martha","Andrea","Christine","Irina","Laura","Linda","Marina","Vladimir","Barbara","Angela","George","Roberto"];

var verbos= ["abre","duda","pide","agarra","dura","piensa","ahorra","elige","pierde","almuerza","enamora","perdona","ama","entiende","puede","apaga","escribe","prefiere","aprende","escucha","pregunta","baja","espera","prende","barre","esta","promete","bebe","estudia","quiere","busca","existe","recomienda","cambia","gana","recuerda","camina","gobierna","regala","canta","guarda","rie","cena","resuelve","responde","cocina","habla","saluda","come","indica","comparte","juega","sube","conduce","lava","lee","cuenta","limpia","conversa","llama","trabaja","copia","mira","desayuna", "se despierta", "paga", ];

var lugares =["en el colegio", "en la oficina de correos", "en el hospital", "en el banco", "en la estación de bomberos", "en el supermercado", "en el restaurante", "en el hotel", "en el museo", "en la biblioteca", "en el cine" , "en la fábrica", "en el departamento de policía" ,"en la municipalidad" , "en la prisión", "en el centro comercial", "en la iglesia", "en la catedral", "en la capilla", "en la mezquita", "en la sinagoga", "en la galería de arte", "en la aldea", "en el pueblo", "en el puerto de pesca", "en las afueras", "en la calle", "en la parada de autobús", "en la parada de taxi", "en la estación de metro", "en el aeropuerto", "en la gasolinera", "en el zoológico", "en la plaza", "en el parque", "en el acuario", "en el parque de diversiones", "en la sala de conciertos", "en el circo", "en el gimnasio"];

var adjetivos = ["amigable","creativo","lindo","feo","alto","bajo","simpático","lento","rápido","atento","pequeño","grande","gordo","delgado","curioso","feliz","triste","viejo","sucio","limpio","fuerte","frágil","cruel","ancho","delgado","alegre","bruto","inteligente"];

var nn = Math.round(Math.random()*nombres.length);
var nv = Math.round(Math.random()*verbos.length);
var nl = Math.round(Math.random()*lugares.length);
var na = Math.round(Math.random()*adjetivos.length);

var oración = nombres[nn] + " " + verbos[nv] + " " + lugares[nl] + " para ser el más " + adjetivos[na] + " de su ciudad."

alert(oración);

}
