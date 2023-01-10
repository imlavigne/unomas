const logoMarcas=document.getElementById('logos');
const barmenu=document.getElementById('barmenu');
const navbarlist=document.getElementById('navbarlist');
const logosmarcas=[
   
    {   
    
        marcaImg :'./imagenes/logo/balanced-logo.png',
       
    },
    {
        marcaImg :'./imagenes/logo/Belcan.png',
        
    },
    {
        marcaImg :'./imagenes/logo/capitan-logo.png',
    },
    {
        marcaImg :'./imagenes/logo/Crianza-logo.png',
    },
    {
        marcaImg :'./imagenes/logo/Dog-Chow-1.png',
    },
    {
        marcaImg :'./imagenes/logo/Dog-Selection.png',
    },
    {
        marcaImg :'./imagenes/logo/Excellent.png',
    },
    {
        marcaImg :'./imagenes/logo/Logo-RoyalCanin-b.png',
    },
    {
        marcaImg :'./imagenes/logo/purina-pro-plan.jpg',
    },
    {
        marcaImg :'./imagenes/logo/Sabrositos.png',
    },
    {
        marcaImg :'./imagenes/logo/vital-can-logo.png',
        
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