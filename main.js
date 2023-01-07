const logoMarcas=document.getElementById('logos');
const barmenu=document.getElementById('barmenu');
const navbarlist=document.getElementById('navbarlist');
const logosmarcas=[
   
    {   
    
        marcaImg :'./imagenes/logo/balanced-logo.jpg',
       
    },
    {
        marcaImg :'./imagenes/logo/Belcan.png',
        
    },
    {
        marcaImg :'./imagenes/logo/capitan-logo.png',
    },
    {
        marcaImg :'./imagenes/logo/Crianza-logo-PNG-1536x480.png',
    },
    {
        marcaImg :'./imagenes/logo/Dog-Chow-1.jpg',
    },
    {
        marcaImg :'./imagenes/logo/Dog-Selection.png',
    },
    {
        marcaImg :'./imagenes/logo/Excellent.jpg',
    },
    {
        marcaImg :'./imagenes/logo/Logo-RoyalCanin-b.jpg',
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
const renderlogocart=log=>{
    // console.log('hola');
    return`
    <div class="logomarca">         
        <img src="${log.marcaImg}" alt="" />        
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