// creo las temporadas con su cantidad de capitulos
let temporada1 = [1,2,3,4,5,6];
let temporada2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
let temporada3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let temporada4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
let temporada5 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
let temporada6 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
let temporada7 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
let temporada8 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
let temporada9 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];

// llamo a los select 
let temporadas = document.getElementById("temporadas");
let episodios = document.getElementById("episodios");

temporadas.addEventListener("change",()=>{
    episodios.innerHTML="";
    switch (temporadas.value) {
        case "1":
            //recorro el array
            for (let i in temporada1){

                //creo el elemento option 
                let option= document.createElement("option");

                //le agrego un valor al option
                option.value=i;

                //creo el nodo de tipo text
                let episodio= document.createTextNode(temporada1[i]);

                //le asigno el episodio al option
                option.appendChild(episodio);

                //le asigno ese option a la lista de episodios
                episodios.appendChild(option);
            } 
           
            break;
        case "2":
             //recorro el array
             for (let i in temporada2){

                //creo el elemento option 
                let option= document.createElement("option");

                //le agrego un valor al option
                option.value=i;

                //creo el nodo de tipo text
                let episodio= document.createTextNode(temporada2[i]);

                //le asigno el episodio al option
                option.appendChild(episodio);

                //le asigno ese option a la lista de episodios
                episodios.appendChild(option);
            } 
            break;
        case "3":
             //recorro el array
             for (let i in temporada3){

                //creo el elemento option 
                let option= document.createElement("option");

                //le agrego un valor al option
                option.value=i;

                //creo el nodo de tipo text
                let episodio= document.createTextNode(temporada3[i]);

                //le asigno el episodio al option
                option.appendChild(episodio);

                //le asigno ese option a la lista de episodios
                episodios.appendChild(option);
            } 
            break;
        case "4":
             //recorro el array
             for (let i in temporada4){

                //creo el elemento option 
                let option= document.createElement("option");

                //le agrego un valor al option
                option.value=i;

                //creo el nodo de tipo text
                let episodio= document.createTextNode(temporada4[i]);

                //le asigno el episodio al option
                option.appendChild(episodio);

                //le asigno ese option a la lista de episodios
                episodios.appendChild(option);
            } 
            break;
        case "5":
             //recorro el array
             for (let i in temporada5){

                //creo el elemento option 
                let option= document.createElement("option");

                //le agrego un valor al option
                option.value=i;

                //creo el nodo de tipo text
                let episodio= document.createTextNode(temporada5[i]);

                //le asigno el episodio al option
                option.appendChild(episodio);

                //le asigno ese option a la lista de episodios
                episodios.appendChild(option);
            } 
            break;
        case "6":
             //recorro el array
             for (let i in temporada6){

                //creo el elemento option 
                let option= document.createElement("option");

                //le agrego un valor al option
                option.value=i;

                //creo el nodo de tipo text
                let episodio= document.createTextNode(temporada6[i]);

                //le asigno el episodio al option
                option.appendChild(episodio);

                //le asigno ese option a la lista de episodios
                episodios.appendChild(option);
            } 
            break;
        case "7":
             //recorro el array
             for (let i in temporada7){

                //creo el elemento option 
                let option= document.createElement("option");

                //le agrego un valor al option
                option.value=i;

                //creo el nodo de tipo text
                let episodio= document.createTextNode(temporada7[i]);

                //le asigno el episodio al option
                option.appendChild(episodio);

                //le asigno ese option a la lista de episodios
                episodios.appendChild(option);
            } 
            break;
        case "8":
             //recorro el array
             for (let i in temporada8){

                //creo el elemento option 
                let option= document.createElement("option");

                //le agrego un valor al option
                option.value=i;

                //creo el nodo de tipo text
                let episodio= document.createTextNode(temporada8[i]);

                //le asigno el episodio al option
                option.appendChild(episodio);

                //le asigno ese option a la lista de episodios
                episodios.appendChild(option);
            } 
            break;
        case "9":
             //recorro el array
             for (let i in temporada9){

                //creo el elemento option 
                let option= document.createElement("option");

                //le agrego un valor al option
                option.value=i;

                //creo el nodo de tipo text
                let episodio= document.createTextNode(temporada9[i]);

                //le asigno el episodio al option
                option.appendChild(episodio);

                //le asigno ese option a la lista de episodios
                episodios.appendChild(option);
            }
            break;       
    }
});
