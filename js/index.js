const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userModel = require("./user.js");
const app = express();
app.use(express.json()); // Add this line to parse JSON data
app.use(express.urlencoded({ extended: true })); // Add this line to parse form data
const user = "admin";
const password = "Sy8GdT9ZBQ3GC8dM";
const dbname = "1";
const uri = `mongodb+srv://${user}:${password}@cluster1.mmhs6af.mongodb.net/${dbname}?retryWrites=true&w=majority`;
app.use(cors({ origin: "http://localhost:5501" }));

const MONGO_URI = `mongodb+srv://${user}:${password}@cluster1.mmhs6af.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(uri);

app.post("/Usuarios", async function (request, response) {
  console.log("atendiendo solicitud post a /Usuarios");
  if (!request.body) {
    console.log("No se recibio el Usuario");
    return response.status(400).send("No se recibio el Usuarios");
  }
  const usuario = userModel({
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
  });
  try {
    console.log("Guardado en la base de datos");
    const resultado = await usuario.save();
    console.log("Usuario guardado", resultado);
    response.status(201).send(resultado);
  } catch (error) {
    console.log("Error al guardar Usuaio:", error);
    response.status(500).send(error);
  }
});
app.get("/Usuarios/:id", async function (request, response) {
  try {
    console.log("Buscando usuario en la base de datos con Id", id);
    const usuario = await userModel.find({ _id: id });
    console.log("Usuario encontrado", usuario);

    response.status(200).send(usuario);
  } catch (error) {
    console.log(error);
    response.status(404).send(error);
  }
});

// const db = mongoose.connection;
// mongoose.connect;
// db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
// db.once("open", () => {
//   console.log("Conexión exitosa a MongoDB Atlas");
// });
// // Ruta para registrar nuevos usuarios
// app.post("/Usuarios", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     // Verifica si el usuario ya existe en la base de datos por su correo electrónico
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ error: "El usuario ya está registrado" });
//     }

//     // Crea un nuevo usuario utilizando el modelo definidos
//     const newUser = new userModel({ name, email, password });

//     // Guarda el usuario en la base de datos
//     await newUser.save();

//     res.status(201).json({ message: "Registro exitoso" });
//   } catch (err) {
//     res.status(500).json({ error: "Error al registrar el usuario" });
//   }
// });

// Inicia el servidor
const PORT = 5501;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});

// let tab = document.querySelector(".profile_form");
// let tabHeader = tab.querySelector(".profile_header");
// let tabHeaderElements = tab.querySelectorAll(".profile_header > div");
// let tabBody = tab.querySelector(".profile_body");
// let tabBodyElements = tab.querySelectorAll(".profile_body > div");

// for (let i = 0; i < tabHeaderElements.length; i++) {
//   tabHeaderElements[i].addEventListener("click", function () {
//     tabHeader.querySelector(".active").classList.remove("active");
//     tabHeaderElements[i].classList.add("active");
//     tabBody.querySelector(".active").classList.remove("active");
//     tabBodyElements[i].classList.add("active");
//   });
// }

// // Subir foto

// let profilePhoto = document.getElementById("profile_photo");
// let inputFile = document.getElementById("input_file");

// inputFile.onchange = function () {
//   profilePhoto.src = URL.createObjectURL(inputFile.files[0]);
// };

// botón recordar psw

function validar_email() {
  var emailInput = document.getElementById("email");
  var email = emailInput.value;

  if (emailInput.validity.valid) {
    alert("El correo para restablecer su contraseña fue enviado con éxito!");
  } else {
    alert("Dirección de correo electrónico inválida");
  }
}

// guardar perfil
function guardar() {
  var data = document.getElementById("education").value;

  if (data.trim() !== "") {
    alert("Usuario guardado con éxito!");
    window.open("index_miperfil.html");
  } else {
    alert("Por favor, completar la información!");
    window.onload;
  }
}
//fomr guardar empresa
function guardar_empresa() {
  var data_company = document.getElementById("description").value;
  if (data_company.trim() !== "") {
    alert("Usuario guardado con éxito!");
    window.open("index_perfil_administrador.html");
  } else {
    alert("Por favor, completar la información!");
    window.onload;
  }
}
// login
function inicio_sesion() {
  var email_sesion = document.getElementById("email_signin");
  var email = email_sesion.value;

  if (email_sesion.validity.valid) {
    alert("Bienvenido!");
    window.open("index_miperfil.html");
  }
}
// info form
function formulario() {
  var form = document.getElementById("email_form");
  var email = form.value;

  if (form.validity.valid) {
    alert("Usuario creado con éxito");
  }
}
// editar puesto
function editar_puesto() {
  alert("Aquí podrá editar la información de los empleos!");
}

// Roles
function roles() {
  var rol = document.getElementById("correo_rol").value;

  if (rol.trim() !== "") {
    alert("Usuario guardado con éxito!");
    window.open("index.html");
  }
}
// guardar trabajo
function save() {
  alert("Empleo guardado con éxito!");
}

// editar trabajo
function edit() {
  alert("Empleo editado!");
}
// publicar trabajo
function publish() {
  alert("Empleo publicado con éxito");
}

// enviar correo

function enviar_correo() {
  alert("El correo fue enviado con éxito al aplicante.");
}

// aplicar

function aplicar() {
  alert("Aplicaste con éxito, pronto te contactaremos!");
}

/******************************************************************************/
// Perfiles
// administrador

function mi_perfil() {
  var nuevaPagina = "index_aplicaciones.html";
  window.location.href = nuevaPagina;
}

// miperfil

function perfil_admin() {
  var nuevaPagina = "index_usuarios_perfiles.html";
  window.location.href = nuevaPagina;
}

/******************************************************************************/
// Puestos
// administrador

function perfil_admin_puestos() {
  var nuevaPagina = "index_edicion_puestos_empresa_login.html";
  window.location.href = nuevaPagina;
}

// reclutador

function perfil_reclutador_puestos() {
  var nuevaPagina = "index_empleos.html";
  window.location.href = nuevaPagina;
}

// manager

function perfil_manager_puestos() {
  var nuevaPagina = "index_empleos.html";
  window.location.href = nuevaPagina;
}

/******************************************************************************/
// Puestos
// administrador

function perfil_admin_aplicantes() {
  var nuevaPagina = "index_buscar_aplicantes_login.html";
  window.location.href = nuevaPagina;
}

// reclutador

function perfil_reclutador_aplicantes() {
  var nuevaPagina = "index_buscar_aplicantes_login.html";
  window.location.href = nuevaPagina;
}

// manager

function perfil_manager_aplicantes() {
  var nuevaPagina = "index_buscar_aplicantes_login.html";
  window.location.href = nuevaPagina;
}

// Botón Cerrar Sesión

function cerrar() {
  alert("Sesión Finalizada!");
}

/******************************************************************************/

/* Select */

/* Dashboards Registros */

function cargarPagina() {
  var selectElement = document.getElementById("pageSelect");
  var selectedValue = selectElement.value;
  if (selectedValue) {
    window.open(selectedValue);
  }
}

// Filtro

function filterResults() {
  var status = document.getElementById("status").value;
  var company = document.getElementById("company").value;
  var type = document.getElementById("type").value;
  var salary = document.getElementById("salary").value;

  var applications = document.getElementsByClassName("applications");

  for (var i = 0; i < applications.length; i++) {
    var application = applications[i];
    var appId = application.getAttribute("id");

    if (
      (status !== "na" &&
        application.getElementsByClassName("apply")[0].innerText !== status) ||
      (company !== "na" &&
        application.getElementsByClassName("job_detail2")[0].innerText !==
          company) ||
      (type !== "na" &&
        application.getElementsByClassName("job_detail1")[0].innerText !==
          type) ||
      (salary !== "na" &&
        application.getElementsByClassName("job_detail3")[0].innerText !==
          salary)
    ) {
      application.style.display = "none";
    } else {
      application.style.display = "grid";
    }
  }
}
