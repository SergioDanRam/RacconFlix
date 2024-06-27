const peliculas = [
    {
        nombre: "Inception",
        src: `assets/images/catalogo/catalogo1.jpg`,
        alt: "Inception",
        categoria: "Ciencia Ficción drama accion aventura",
        tipo: "pelicula"
    },
    {
        nombre: "Mision Imposible",
        src: `assets/images/catalogo/catalogo2.jpg`,
        alt: "Misión Imposible",
        categoria: "Acción suspenso crimen drama aventura",
        tipo: "pelicula"
    },
    {
        nombre: "Rapidos y Furiosos 7",
        src: `assets/images/catalogo/catalogo3.jpg`,
        alt: "Rápidos y Furiosos 7",
        categoria: "Acción suspenso aventura crimen",
        tipo: "pelicula"
    },
    {
        nombre: "Guardianes de la Galaxia 1",
        src: `assets/images/catalogo/catalogo4.jpg`,
        alt: "Guardianes de la Galaxia 1",
        categoria: "Ciencia Ficción accion aventura fantasia comedia",
        tipo: "pelicula"
    },
    {
        nombre: "John Wick 4",
        src: `assets/images/catalogo/catalogo5.jpg`,
        alt: "John Wick 4",
        categoria: "Acción suspenso",
        tipo: "pelicula"
    },
    {
        nombre: "Prison Break",
        src: `assets/images/catalogo/catalogo6.jpg`,
        alt: "Prison Break",
        categoria: "Drama aventura suspenso accion",
        tipo: "serie"
    },
    {
        nombre: "Breaking Bad",
        src: `assets/images/catalogo/catalogo7.jpg`,
        alt: "Breaking Bad",
        categoria: "Drama criminal suspenso ",
        tipo: "serie"
    },
    {
        nombre: "Lost",
        src: `assets/images/catalogo/catalogo8.jpg`,
        alt: "Lost",
        categoria: "Drama ciencia ficcion",
        tipo: "serie"
    },
    {
        nombre: "La Casa de Papel",
        src: `assets/images/catalogo/catalogo9.jpg`,
        alt: "La Casa de Papel",
        categoria: "Acción romance policial",
        tipo: "serie"
    },
    {
        nombre: "El Falcon y el Soldado de Invierno",
        src: `assets/images/catalogo/catalogo10.jpg`,
        alt: "El Falcon y el Soldado de Invierno",
        categoria: "Acción drama",
        tipo: "pelicula"
    },
    {
        nombre: "Maze Runner: Correr o Morir",
        src: `assets/images/catalogo/catalogo11.jpg`,
        alt: "Maze Runner: Correr o Morir",
        categoria: "Ciencia Ficción",
        tipo: "pelicula"
    },
    {
        nombre: "Godzilla vs. Kong",
        src: `assets/images/catalogo/catalogo12.jpg`,
        alt: "Godzilla vs. Kong",
        categoria: "Acción ciencia ficcion ",
        tipo: "pelicula"
    },
    {
        nombre: "Dead pool 3",
        src: `assets/images/catalogo/catalogo13.jpg`,
        alt: "Deadpool 3",
        categoria: "Acción comedia ",
        tipo: "pelicula"
    },
    {
        nombre: "Project X",
        src: `assets/images/catalogo/catalogo14.jpg`,
        alt: "Project X",
        categoria: "Comedia",
        tipo: "pelicula"
    },
    {
        nombre: "Son como Niños",
        src: `assets/images/catalogo/catalogo15.jpg`,
        alt: "Son como Niños",
        categoria: "Comedia",
        tipo: "pelicula"
    },
    {
        nombre: "Free Guy",
        src: `assets/images/catalogo/catalogo16.jpg`,
        alt: "Free Guy",
        categoria: "Comedia ciencia ficcion accion",
        tipo: "pelicula"
    },
    {
        nombre: "Incorregibles",
        src: `assets/images/catalogo/catalogo17.jpg`,
        alt: "Incorregibles",
        categoria: "Comedia accion",
        tipo: "pelicula"
    },
    {
        nombre: "Friends",
        src: `assets/images/catalogo/catalogo18.jpg`,
        alt: "Friends",
        categoria: "Comedia",
        tipo: "serie"
    },
    {
        nombre: "The Office",
        src: `assets/images/catalogo/catalogo19.jpg`,
        alt: "The Office",
        categoria: "Comedia",
        tipo: "serie"
    },
    {
        nombre: "The Big Bang Theory",
        src: `assets/images/catalogo/catalogo20.jpg`,
        alt: "The Big Bang Theory",
        categoria: "Comedia",
        tipo: "serie"
    },
    {
        nombre: "How I Met Your Mother",
        src: `assets/images/catalogo/catalogo21.jpg`,
        alt: "How I Met Your Mother",
        categoria: "Comedia drama",
        tipo: "serie"
    },
    {
        nombre: "Ash vs Evil Dead",
        src: `assets/images/catalogo/catalogo22.jpg`,
        alt: "Ash vs Evil Dead",
        categoria: "Terror comedia ",
        tipo: "serie"
    },
    {
        nombre: "Game of Thrones",
        src: `assets/images/catalogo/catalogo23.jpg`,
        alt: "Game of Thrones",
        categoria: "Drama fantasia aventura ",
        tipo: "serie"
    },
    {
        nombre: "The Last of Us",
        src: `assets/images/catalogo/catalogo24.jpg`,
        alt: "The Last of Us",
        categoria: "Acción aventura",
        tipo: "serie"
    },
    {
        nombre: "Cars",
        src: `assets/images/catalogo/catalogo25.jpg`,
        alt: "Cars",
        categoria: "infantil aventura comedia ",
        tipo: "pelicula"
    },
    {
        nombre: "El Sorprendente Hombre Araña",
        src: `assets/images/catalogo/catalogo26.jpg`,
        alt: "El Sorprendente Hombre Araña",
        categoria: "Acción suspenso ciencia ficcion",
        tipo: "pelicula"
    },
    {
        nombre: "El Reino del Planeta de los Simios",
        src: `assets/images/catalogo/catalogo27.jpg`,
        alt: "El Reino del Planeta de los Simios",
        categoria: "Ciencia Ficción accion aventura",
        tipo: "pelicula"
    },
    {
        nombre: "El Curioso Caso de Benjamin Button",
        src: `assets/images/catalogo/catalogo28.jpg`,
        alt: "El Curioso Caso de Benjamin Button",
        categoria: "Drama fantasia",
        tipo: "pelicula"
    },
    {
        nombre: "Hasta el Último Hombre",
        src: `assets/images/catalogo/catalogo29.jpg`,
        alt: "Hasta el Último Hombre",
        categoria: "Drama ",
        tipo: "pelicula"
    },
    {
        nombre: "El Justiciero 2",
        src: `assets/images/catalogo/catalogo30.jpg`,
        alt: "El Justiciero 2",
        categoria: "Acción crimen",
        tipo: "pelicula"
    },
    {
        nombre: "Un Lugar en Silencio 2",
        src: `assets/images/catalogo/catalogo31.jpg`,
        alt: "Un Lugar en Silencio 2",
        categoria: "Terror",
        tipo: "pelicula"
    },
    {
        nombre: "Close",
        src: `assets/images/catalogo/catalogo32.jpg`,
        alt: "Close",
        categoria: "Acción drama ",
        tipo: "pelicula"
    },
    {
        nombre: "Fallout",
        src: `assets/images/catalogo/catalogo33.jpg`,
        alt: "Fallout",
        categoria: "Ciencia Ficción aventura accion",
        tipo: "pelicula"
    },
    {
        nombre: "Succession",
        src: `assets/images/catalogo/catalogo34.jpg`,
        alt: "Succession",
        categoria: "Drama comedia ",
        tipo: "serie"
    },
    {
        nombre: "El Encargado",
        src: `assets/images/catalogo/catalogo35.jpg`,
        alt: "El Encargado",
        categoria: "Comedia ",
        tipo: "serie"
    },
    {
        nombre: "CSI: El Final",
        src: `assets/images/catalogo/catalogo36.jpg`,
        alt: "CSI: El Final",
        categoria: "Drama crimen",
        tipo: "serie"
    },
    {
        nombre: "The Good Doctor",
        src: `assets/images/catalogo/catalogo37.jpg`,
        alt: "The Good Doctor",
        categoria: "Drama",
        tipo: "serie"
    },
    {
        nombre: "Harry Potter y la Piedra Filosofal",
        src: `assets/images/catalogo/catalogo38.jpg`,
        alt: "Harry Potter y la Piedra Filosofal",
        categoria: "Fantasía infantil",
        tipo: "pelicula"
    },
    {
        nombre: "Dune",
        src: `assets/images/catalogo/catalogo39.jpg`,
        alt: "Dune",
        categoria: "Ciencia Ficción",
        tipo: "pelicula"
    },
    {
        nombre: "Avatar",
        src: `assets/images/catalogo/catalogo40.jpg`,
        alt: "Avatar",
        categoria: "Ciencia Ficción drama accion aventura",
        tipo: "pelicula"
    },
    {
        nombre: "¿Que le Pasó a Lunes?",
        src: `assets/images/catalogo/catalogo41.jpg`,
        alt: "¿Qué le Pasó a Lunes?",
        categoria: "Ciencia Ficción accion crimen drama aventura",
        tipo: "pelicula"
    },
    {
        nombre: "Un Monstruo Viene a Verme",
        src: `assets/images/catalogo/catalogo42.jpg`,
        alt: "Un Monstruo Viene a Verme",
        categoria: "Drama aventura fantasia",
        tipo: "pelicula"
    },
    {
        nombre: "Wednesday",
        src: `assets/images/catalogo/catalogo43.jpg`,
        alt: "Wednesday",
        categoria: "Comedia fantasia drama",
        tipo: "serie"
    },
    {
        nombre: "Outlander",
        src: `assets/images/catalogo/catalogo44.jpg`,
        alt: "Outlander",
        categoria: "Drama ciencia ficcion accion",
        tipo: "serie"
    },
    {
        nombre: "The Witcher",
        src: `assets/images/catalogo/catalogo45.jpg`,
        alt: "The Witcher",
        categoria: "Fantasía drama",
        tipo: "serie"
    },
    {
        nombre: "Frozen",
        src: `assets/images/catalogo/catalogo46.jpg`,
        alt: "Frozen",
        categoria: "infantil aventura drama",
        tipo: "pelicula"
    },
    {
        nombre: "Bluey",
        src: `assets/images/catalogo/catalogo47.jpg`,
        alt: "Bluey",
        categoria: "infantil comedia",
        tipo: "serie"
    },
    {
        nombre: "Jovenes Titanes",
        src: `assets/images/catalogo/catalogo48.jpg`,
        alt: "Jóvenes Titanes",
        categoria: "infantil accion aventura",
        tipo: "serie"
    },
    {
        nombre: "Spider-Man",
        src: `assets/images/catalogo/catalogo49.jpg`,
        alt: "Spider-Man",
        categoria: "Acción infantil",
        tipo: "pelicula"
    },
    {
        nombre: "Ben 10",
        src: `assets/images/catalogo/catalogo50.jpg`,
        alt: "Ben 10",
        categoria: "infantil aventura accion",
        tipo: "serie"
    },
    {
        nombre: "Scooby-Doo",
        src: `assets/images/catalogo/catalogo51.jpg`,
        alt: "Scooby-Doo",
        categoria: "infantil aventura accion fantasia",
        tipo: "serie"
    },
    {
        nombre: "Dark",
        src: `assets/images/catalogo/catalogo52.jpg`,
        alt: "Dark",
        categoria: "Drama ciencia ficcion suspenso",
        tipo: "serie"
    },
    {
        nombre: "Stranger Things",
        src: `assets/images/catalogo/catalogo53.jpg`,
        alt: "Stranger Things",
        categoria: "Ciencia Ficción accion suspenso aventura",
        tipo: "serie"
    },
    {
        nombre: "The Sinner",
        src: `assets/images/catalogo/catalogo54.jpg`,
        alt: "The Sinner",
        categoria: "Drama crimen ficcion accion",
        tipo: "serie"
    },
    {
        nombre: "Shrek 2",
        src: `assets/images/catalogo/catalogo55.jpg`,
        alt: "Shrek 2",
        categoria: "infantil accion aventura",
        tipo: "pelicula"
    },
    {
        nombre: "El Conjuro 2",
        src: `assets/images/catalogo/catalogo56.jpg`,
        alt: "El Conjuro 2",
        categoria: "Terror suspenso",
        tipo: "pelicula"
    },
    {
        nombre: "Mi Villano Favorito",
        src: `assets/images/catalogo/catalogo57.jpg`,
        alt: "Mi Villano Favorito",
        categoria: "infantil aventura",
        tipo: "pelicula"
    },
    {
        nombre: "Interestelar",
        src: `assets/images/catalogo/catalogo58.jpg`,
        alt: "Interestelar",
        categoria: "Ciencia Ficción accion aventura drama ",
        tipo: "pelicula"
    },
    {
        nombre: "Barbie",
        src: `assets/images/catalogo/catalogo59.jpg`,
        alt: "Barbie",
        categoria: "Infantil fantasia aventura ",
        tipo: "pelicula"
    },
    {
        nombre: "Mario Bros",
        src: `assets/images/catalogo/catalogo60.jpg`,
        alt: "Mario Bros",
        categoria: "infantil aventura",
        tipo: "pelicula"
    },
    {
        nombre: "Under the Dome",
        src: `assets/images/catalogo/catalogo61.jpg`,
        alt: "Under the Dome",
        categoria: "Ciencia Ficción drama accion misterio",
        tipo: "serie"
    },
    {
        nombre: "Flash",
        src: `assets/images/catalogo/catalogo62.jpg`,
        alt: "Flash",
        categoria: "Acción fantasia aventura",
        tipo: "serie"
    },
    {
        nombre: "Diarios de Vampiros",
        src: `assets/images/catalogo/catalogo63.jpg`,
        alt: "Diarios de Vampiros",
        categoria: "Drama terror ciencia ficcion suspenso",
        tipo: "serie"
    },
    {
        nombre: "Los 100",
        src: `assets/images/catalogo/catalogo64.jpg`,
        alt: "Los 100",
        categoria: "Ciencia Ficción accion suspenso",
        tipo: "serie"
    },
    {
        nombre: "Talk to Me",
        src: `assets/images/catalogo/catalogo65.jpg`,
        alt: "Talk to Me",
        categoria: "Terror suspenso",
        tipo: "serie"
    },
    {
        nombre: "El Aro 2",
        src: `assets/images/catalogo/catalogo66.jpg`,
        alt: "El Aro 2",
        categoria: "Terror suspenso",
        tipo: "serie"
    },
    {
        nombre: "Hereditary",
        src: `assets/images/catalogo/catalogo67.jpg`,
        alt: "Hereditary",
        categoria: "Terror",
        tipo: "pelicula"
    },
    {
        nombre: "El Exorcista",
        src: `assets/images/catalogo/catalogo68.jpg`,
        alt: "El Exorcista",
        categoria: "Terror",
        tipo: "pelicula"
    },
    {
        nombre: "Supernatural",
        src: `assets/images/catalogo/catalogo69.jpg`,
        alt: "Supernatural",
        categoria: "Terror drama accion",
        tipo: "serie"
    },
    {
        nombre: "Chucky",
        src: `assets/images/catalogo/catalogo70.jpg`,
        alt: "Chucky",
        categoria: "Terror",
        tipo: "serie"
    },
    {
        nombre: "Fear the Walking Dead",
        src: `assets/images/catalogo/catalogo71.jpg`,
        alt: "Fear the Walking Dead",
        categoria: "Terror accion ",
        tipo: "serie"
    },
    {
        nombre: "Black Summer",
        src: `assets/images/catalogo/catalogo72.jpg`,
        alt: "Black Summer",
        categoria: "Terror ciencia ficcion aventura",
        tipo: "serie"
    },
    {
        nombre: "Lo imposible",
        src: `assets/images/catalogo/catalogo73.jpg`,
        alt: "Lo imposible",
        categoria: "catastrofe",
        tipo: "pelicula"
    },
    {
        nombre: "El coloso en llamas",
        src: `assets/images/catalogo/catalogo74.jpg`,
        alt: "El coloso en llamas",
        categoria: "catastrofe",
        tipo: "pelicula"
    },
    {
        nombre: "Huracán sobre la isla",
        src: `assets/images/catalogo/catalogo75.jpg`,
        alt: "Huracán sobre la isla",
        categoria: "catastrofe",
        tipo: "serie"
    },
    {
        nombre: "Geostorm geotormenta",
        src: `assets/images/catalogo/catalogo76.jpg`,
        alt: "Geostorm",
        categoria: "catastrofe",
        tipo: "pelicula"
    },
    {
        nombre: "2012",
        src: `assets/images/catalogo/catalogo77.jpg`,
        alt: "2012",
        categoria: "catastrofe",
        tipo: "pelicula"
    },
    {
        nombre: "Moonfall",
        src: `assets/images/catalogo/catalogo78.jpg`,
        alt: "Moonfall",
        categoria: "catastrofe",
        tipo: "pelicula"
    },
    {
        nombre: "The Wave la ola",
        src: `assets/images/catalogo/catalogo79.jpg`,
        alt: "The Wave",
        categoria: "catastrofe",
        tipo: "pelicula"
    },
    {
        nombre: "Volcano",
        src: `assets/images/catalogo/catalogo80.jpg`,
        alt: "Volcano",
        categoria: "catastrofe",
        tipo: "pelicula"
    },
    {
        nombre: "Armageddon",
        src: `assets/images/catalogo/catalogo81.jpg`,
        alt: "Armageddon",
        categoria: "catastrofe",
        tipo: "pelicula"
    },
    {
        nombre: "Deep Impact impacto profundo",
        src: `assets/images/catalogo/catalogo82.jpg`,
        alt: "Deep Impact",
        categoria: "catastrofe",
        tipo: "pelicula"
    },
    {
        nombre: "The Day After Tomorrow el dia despues de mañana",
        src: `assets/images/catalogo/catalogo83.jpg`,
        alt: "The Day After Tomorrow",
        categoria: "catastrofe",
        tipo: "pelicula"
    },
    {
        nombre: "The Core",
        src: `assets/images/catalogo/catalogo84.jpg`,
        alt: "The Core",
        categoria: "catastrofe",
        tipo: "pelicula"
    },
    {
        nombre: "Into the Storm",
        src: `assets/images/catalogo/catalogo85.jpg`,
        alt: "Into the Storm",
        categoria: "catastrofe",
        tipo: "pelicula"
    },
    {
        nombre: "La falla de San Andreas",
        src: `assets/images/catalogo/catalogo86.jpg`,
        alt: "La falla de San Andreas",
        categoria: "catastrofe",
        tipo: "pelicula"
    }


];

console.log(peliculas.length)

//Limpiar HTML

function limpiarHTML() {
    //Leer el elemento 
    const catalogo = document.querySelector('.grid-catalogo');

    //Limpiar los resultados anteriores
    while (catalogo.firstChild) {
        catalogo.removeChild(catalogo.firstChild);
    }
}


/*
 
BUSQUEDA DE PELICULAS
 
 
*/



const busqueda = document.querySelector('.input-busqueda input[type="text"]');


document.addEventListener('DOMContentLoaded', () => {
    mostrarCatalogoCompleto(peliculas)
});



function mostrarCatalogoCompleto(peliculas) {
    limpiarHTML();

    //Leer el elemento pelicula
    const catalogo = document.querySelector('.grid-catalogo');

    //Construir el HTML de las peliculas
    peliculas.forEach(pelicula => {
        const a = document.createElement('A');
        if (pelicula.tipo == 'serie') {
            a.href = 'pages/serie.html';
        }
        // a.href = 'pages/pelicula.html';
        if (pelicula.tipo == 'pelicula') {
            a.href = 'pages/pelicula.html';
        }

        a.innerHTML = `
      <img src="${pelicula.src}" ${pelicula.alt}>
    `
        catalogo.appendChild(a);
    })

}


busqueda.addEventListener('input', buscadorPeliculasYSeries);

function buscadorPeliculasYSeries(e) {
    limpiarHTML();

    if (e.target.value == '') {
        mostrarCatalogoCompleto(peliculas);
    }

    peliculas.forEach(pelicula => {
        const catalogo = document.querySelector('.grid-catalogo');

        if (pelicula.nombre.toLocaleLowerCase().trim().includes(e.target.value.toLocaleLowerCase().trim())) {
            //   console.log(e.target.value)
            const a = document.createElement('A'); 
            if (pelicula.tipo == 'serie') {
                a.href = 'pages/serie.html';
            }
            // a.href = 'pages/pelicula.html';
            if (pelicula.tipo == 'pelicula') {
                a.href = 'pages/pelicula.html';
            }
            a.innerHTML = `
      <img src="${pelicula.src}" ${pelicula.alt}>
    `
            catalogo.appendChild(a);
        }

        // if(!(pelicula.nombre.toLocaleLowerCase().trim().includes(e.target.value.toLocaleLowerCase().trim()))){

        //     limpiarHTML();

        //     const parrafo = document.createElement('P');
        //     parrafo.innerHTML = 'No se encontro el titulo';
        //     parrafo.style.color = 'white';
        //     parrafo.style.fontSize = '30px';

        //     catalogo.appendChild(parrafo);
        // }

    })
}


/**
 * 
 * 
 * BUSQUEDA POR FILTRO DE CATEGORIAS
 * 
 * 
 */

const filtroCategoria = document.querySelector('#categoria');


filtroCategoria.addEventListener('input', filtrarPorCategoria);

function filtrarPorCategoria(e) {
    limpiarHTML();
    filtroTipo.selectedIndex = 0;


    console.log(e)

    peliculas.forEach(pelicula => {

        const catalogo = document.querySelector('.grid-catalogo');

        if (pelicula.categoria.toLowerCase().includes(e.target.value.toLowerCase())) {
            const a = document.createElement('A');
            if (pelicula.tipo == 'serie') {
                a.href = '../pages/serie.html';
            }
            // a.href = 'pages/pelicula.html';
            if (pelicula.tipo == 'pelicula') {
                a.href = '../pages/pelicula.html';
            }
            a.innerHTML = `
            <img src="${pelicula.src}" ${pelicula.alt}>
            `
            catalogo.appendChild(a);
            // console.log(a);
        }
        // else{
        //     limpiarHTML();

        //     const parrafo = document.createElement('P');
        //     parrafo.textContent = 'No se encontraron titulos';
        //     parrafo.style.color = 'white';
        //     catalogo.appendChild(parrafo);
        // }

        const opcion = document.querySelector('.todas').value;

        if (e.target.value.toLowerCase().includes(opcion.toLowerCase())) {
            mostrarCatalogoCompleto(peliculas)
        }

    })

}

/**
 * 
 * 
 * FILTRAR POR PELICULA O SERIE
 * 
 * 
 */

const filtroTipo = document.querySelector('#tipo');

filtroTipo.addEventListener('input', filtrarPorTipo);

function filtrarPorTipo(e) {
    limpiarHTML();
    // filtroCategoria.textContent = 'waos';
    filtroCategoria.selectedIndex = 0;

    peliculas.forEach(pelicula => {

        const catalogo = document.querySelector('.grid-catalogo');

        if (pelicula.tipo.toLowerCase().includes(e.target.value.toLowerCase())) {
            const a = document.createElement('A');
            if (pelicula.tipo == 'serie') {
                a.href = '../pages/serie.html';
            }
            // a.href = 'pages/pelicula.html';
            if (pelicula.tipo == 'pelicula') {
                a.href = '../pages/pelicula.html';
            }
            a.innerHTML = `
            <img src="${pelicula.src}" ${pelicula.alt}>
            `
            catalogo.appendChild(a);
        }

        const opcion = document.querySelector('.todas').value;

        if (e.target.value.toLowerCase().includes(opcion.toLowerCase())) {
            mostrarCatalogoCompleto(peliculas)
        }

    })
}

/**
 * 
 * BORRAR LOCALSTORAGE
 * 
 */

const loginPerfil = document.querySelector('.login-perfil');
const parrafo = document.createElement('P');

function btnCerrarSesion(){
    parrafo.textContent = 'Cerrar Sesion';
    parrafo.style.color = 'white';
    parrafo.style.fontSize = '20px';
    parrafo.style.display = 'flex';
    parrafo.style.alignItems = 'center'
    parrafo.style.cursor = 'pointer';

    if(localStorage.length){
        loginPerfil.appendChild(parrafo);
        
        parrafo.addEventListener('click', cerrarSesion);
        parrafo.classList.add('barrita')
    }

}

btnCerrarSesion()

function cerrarSesion() {
        localStorage.clear();
        alert('Sesión cerrada exitosamente')
        parrafo.classList.remove('barrita')
        loginPerfil.removeChild(parrafo)
}
