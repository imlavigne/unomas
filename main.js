const logoMarcas=document.getElementById('logos');
const barmenu=document.getElementById('barmenu');
const navbarlist=document.getElementById('navbarlist');
const logosmarcas=[
   
    {   
    
        marcaImg :'./imagenes/logo/balanced-logo.png',
        marca:'logo',
       
    },
    {
        marcaImg :'./imagenes/logo/Belcan.png',
        marca:' belcan',
    },
    {
        marcaImg :'./imagenes/logo/capitan-logo.png',
        marca:'capitan',
    },
    {
        marcaImg :'./imagenes/logo/Crianza-logo.png',
        marca:'crianza',
    },
    {
        marcaImg :'./imagenes/logo/Dog-Chow-1.png',
        marca:'dog chow',
    },
    {
        marcaImg :'./imagenes/logo/Dog-Selection.png',
        marca:'dog selection',
    },
    {
        marcaImg :'./imagenes/logo/Excellent.png',
        marca:'excellent',
    },
    {
        marcaImg :'./imagenes/logo/Logo-RoyalCanin-b.png',
        marca:'royalcanin',
    },
    {
        marcaImg :'./imagenes/logo/purina-pro-plan.png',
        marca:'pro plan',
    },
    {
        marcaImg :'./imagenes/logo/Sabrositos.png',
        marca:'sabrositos',
    },
    {
        marcaImg :'./imagenes/logo/vital-can-logo.png',
        marca:'vital can',
        
    },
];
const products =[
    {
    marca: 'Sabrositos',
    descripcio : 'Cachorros 18 Kg',
    animal:'perro',
    },
    {
    marca: 'Sabrositos',
    descripcio : 'Adulto 15 Kg',
    animal:'perro',
    },
    {
    marca: 'Infinity',
    descripcio : 'Adulto 15 Kg',
    animal:'perro',
    }, 
    {
    marca: 'Infinity',
    descripcio : 'Cachorros 10 Kg',
    animal:'perro',
    },
    {
    marca: 'Sabrositos',
    descripcio : 'Adulto 18 Kg',
    animal:'perro',
    },                
];
const renderlogocart=log=>{
    // console.log('hola');
    return`
    <div class="logomarca">         
        <div class="imagenDiv" style="background-image:url(${log.marcaImg})" alt=""></div>
    </div>    `
}

const renderlogo= (p)=>{
    logoMarcas.innerHTML=p.map(renderlogocart).join(''); 
}
const menutogle=()=> {
    console.log('pepe');
    navbarlist.classList.toggle('hidden');

}

const init =()=>{
    renderlogo(logosmarcas);
    barmenu.addEventListener("click",menutogle);
}
init();