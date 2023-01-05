const LogoMarcas=document.getElementById('logos');

const logosmarcas=[
   
    {   
    
        Marcaimg :'./imagenes/logo/balanced-logo.jpg',
       
    },
    {
        Marcaimg :'./imagenes/logo/Belcan.png',
        
    },
    {
        Marcaimg :'./imagenes/logo/capitan-logo.png',
    },
    {
        Marcaimg :'./imagenes/logo/Crianza-logo-PNG-1536x480.png',
    },
    {
        Marcaimg :'./imagenes/logo/Dog-Chow-1.jpg',
    },
    {
        Marcaimg :'./imagenes/logo/Dog-Selection.png',
    },
    {
        Marcaimg :'./imagenes/logo/Excellent.jpg',
    },
    {
        Marcaimg :'./imagenes/logo/Logo-RoyalCanin-b.jpg',
    },
    {
        Marcaimg :'./imagenes/logo/purina-pro-plan.jpg',
    },
    {
        Marcaimg :'./imagenes/logo/Sabrositos.png',
    },
    {
        Marcaimg :'./imagenes/logo/vital-can-logo.png',
        
    },
];
const renderlogocart=log=>{
    console.log('hola');
    return`
    <div class="logomarca">
         
        <img src="${log.Marcaimg}" alt="" />
        
    </div>
    `
}

const renderlogo= (p)=>{
    LogoMarcas.innerHTML=p.map(renderlogocart).join(''); 
}

const init =()=>{
    renderlogo(logosmarcas);
}
init();