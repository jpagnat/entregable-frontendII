/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresa tu nombre");
  datosPersona.edad = prompt("Ingresa el año en que naciste");
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
  datosPersona.interesPorJs = confirm("Te interesa JavaScript?");
}

function calcularEdad() {
  let hoy = new Date();
  let edad = hoy.getFullYear() - datosPersona.edad;
  return edad;
}

function interesPorJs() {
  if (datosPersona.interesPorJs) {
    return "Si";
  } else {
    return "No";
  }
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre").innerText = datosPersona.nombre;
  document.getElementById("edad").innerText = calcularEdad();
  document.getElementById("ciudad").innerText = datosPersona.ciudad;
  document.getElementById("javascript").innerText = interesPorJs();
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let containerCard = document.getElementById("fila");

  if (document.getElementsByClassName("caja").length > 0) {
    return alert("Las materias ya se muestran en pantalla");
  }

  for (let i = 0; i < listado.length; i++) {
    containerCard.innerHTML += `
    <div class="caja">
      <img src=${listado[i].imgUrl} alt=${listado[i].lenguajes}>
      <p class="lenguajes"> Lenguaje: ${listado[i].lenguajes}</p>
      <p class="bimestre"> Bimestre: ${listado[i].bimestre}</p>
    </div>
    `;
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let sitio = document.getElementById("sitio");

  if (sitio.classList.contains("dark")) {
    sitio.classList.remove("dark");
  } else {
    sitio.classList.add("dark");
  }
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

const sobreMi = document.getElementById("sobre-mi");
window.addEventListener("keypress", mostrarInfo);

function mostrarInfo(e) {
  if (e.key == "f") {
    sobreMi.classList.remove("oculto");
  }
}
