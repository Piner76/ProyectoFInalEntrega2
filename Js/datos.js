document.getElementById('#consulta').addEventListener('click', function () {
    console.log('llego')
    obtenerdatos();
    
  
});

document.getElementById('#consultaCV').addEventListener('click', function () {
    obtenerdatos();
    
  
});



async function obtenerdatos() {
    let resultado = await fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => data)
    console.log(resultado.results)

    const fechaNac = new Date(resultado.results[0].dob.date);

    let dia = `${fechaNac.getDate() < 10 ? "0" : ""}${fechaNac.getDate()}`
    let mes = `${(fechaNac.getMonth() + 1) < 10 ? "0" : ""}${fechaNac.getMonth() + 1}`
    let anio = fechaNac.getFullYear()

    console.log(fechaNac)

    console.log(resultado.results[0].picture.large)
    document.getElementById('user-id').innerHTML = resultado.results[0].name.first +
        " " + resultado.results[0].name.last;
    document.getElementById('header-image').src = resultado.results[0].picture.medium;
   // document.getElementById('edad').innerHTML = resultado.results[0].dob.age + " años";
   // document.getElementById('fec-nac').innerHTML = dia + "/" + mes + "/" + anio;
    document.getElementById('pais').innerHTML =    resultado.results[0].location.street.name + " " + resultado.results[0].location.street.number +', ' + resultado.results[0].location.country;
   /* document.getElementById('ciudad').innerHTML =   resultado.results[0].location.street.name + " " + resultado.results[0].location.street.number;
    document.getElementById('estado').innerHTML = resultado.results[0].location.state;
    document.getElementById('cp').innerHTML = resultado.results[0].location.postcode;
    document.getElementById('domicilio').innerHTML = resultado.results[0].location.street.name + " " +
        resultado.results[0].location.street.number;*/
    document.getElementById('email').innerHTML = resultado.results[0].email;

    document.getElementById('celular').innerHTML = resultado.results[0].cell;
    

}
