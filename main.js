const logoMarcas=document.getElementById('logos');
const barmenu=document.getElementById('barmenu');
const navbarlist=document.getElementById('navbarlist');
const productos=document.getElementById('productos');
const vermasbtn=document.getElementById('vermasbtn');
const quienesSomos=document.getElementById('quienesSomos');
const marcas=document.getElementById('marcas');
const animal=document.querySelectorAll('.animal');

const navbar=document.querySelector('.navbar-list');
const perroGatoContainer=document.querySelector('.perroGatoContainer');

const logosmarcas=[
   
    {   
    
        marcaImg :'./imagenes/logo/balanced-logo.png',
        marca:'Balanced',
       
    },
    {
        marcaImg :'./imagenes/logo/Belcan.png',
        marca:'Belcan',
    },
    {
        marcaImg :'./imagenes/logo/capitan-logo.png',
        marca:'Capitan',
    },
    {
        marcaImg :'./imagenes/logo/Crianza-logo.png',
        marca:'Crianza',
    },
    {
        marcaImg :'./imagenes/logo/Dog-Chow-1.png',
        marca:'Dog Chow',
    },
    {
        marcaImg :'./imagenes/logo/Dog-Selection.png',
        marca:'Dog Selection',
    },
    {
        marcaImg :'./imagenes/logo/Excellent.png',
        marca:'Excellent',
    },
    {
        marcaImg :'./imagenes/logo/Logo-RoyalCanin-b.png',
        marca:'Royal Canin',
    },
    {
        marcaImg :'./imagenes/logo/purina-pro-plan.png',
        marca:'Proplan',
    },
    {
        marcaImg :'./imagenes/logo/Sabrositos.png',
        marca:'Sabrositos',
    },
    {
        marcaImg :'./imagenes/logo/vital-can-logo.png',
        marca:'Vitalcan',
        
    },
];
const products =[
    {
    marca: 'Sabrositos',
    descripcion : 'Alimento Sabrositos Para Perro Cachorros 18 Kg ',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/sabrositos/1.png',
    precio:5120,
    },
    {
    marca: 'Sabrositos',
    descripcion : 'Alimento Sabrositos Para Perro Adulto 15 Kg ',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/sabrositos/2.png',
    precio:3290,
    },
    {
    marca: 'Infinity',
    descripcion : 'Alimento Infinity Para Perro Adultos 15Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/infinity/1.png',
    precio:4950,
    }, 
    {
    marca: 'Infinity',
    descripcion : 'Alimento Infinity Para Perro Adultos 21Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/infinity/1.png',
    precio:6500,
    }, 
    {
    marca: 'Infinity',
    descripcion : 'Alimento Infinity Para Perro Cachorros - 10Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/infinity/2.png',
    precio:4100,
    },
    {
    marca: 'Dog Selection',
    descripcion : 'Alimento Dog Selection Criadores Carne y Pollo Para Perro Adulto 21 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/dogselection/1.png',
    precio:6160,
    },                
    {
    marca: 'Dog Selection',
    descripcion : 'Alimento Dog Selection Criadores Para Perro Cachorro 21 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/dogselection/2.png',
    precio:7400,
    },
    {marca: 'Proplan',
    descripcion : 'Alimento Pro Plan para Perro Cachorro Raza Pequeña 7,5 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/proplan/1.png',
    precio:9100,
    },
    {marca: 'Proplan',
    descripcion : 'Alimento Pro Plan para Perro Cachorro Raza Mediana 15 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/proplan/2.png',
    precio:14980,
    },    
    {marca: 'Proplan',
    descripcion : 'Alimento Pro Plan para Perro Cachorro Raza Grande 15 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/proplan/3.png',
    precio:14980,
    },
    {marca: 'Proplan',
    descripcion : 'Alimento Pro Plan para Perro Adulto Raza Pequeña 7,5 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/proplan/4.png',
    precio:8300,
    },    
    {marca: 'Proplan',
    descripcion : 'Alimento Pro Plan para Perro Adulto Raza Mediana 15 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/proplan/5.png',
    precio:13700,
    },
    {marca: 'Proplan',
    descripcion : 'Alimento Pro Plan para Perro Adulto Raza Grande 15 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/proplan/6.png',
    precio:13700,
    },
    {marca: 'Proplan',
    descripcion : 'Alimento Pro Plan para Perro Adulto Exigent Raza Pequeñas 7,5 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/proplan/7.png',
    precio:10000,
    },   
    {marca: 'Excellent',
    descripcion : 'Alimento Excellent para Perro Adulto Formula 20 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/excellent/1.png',
    precio:11060,
    },   
    {marca: 'Excellent',
    descripcion : 'Alimento Excellent para Perro Cachorro Formula 20 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/excellent/2.png',
    precio:13070,
    },   
    {marca: 'Dog Chow',
    descripcion : 'Alimento Dog Chow Para Perro Cachorro 15 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/dogchow/1.png',
    precio:7980,
    },     
    {marca: 'Dog Chow',
    descripcion : 'Alimento Dog Chow Para Perro Adulto 15 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/dogchow/2.png',
    precio:7420,
    }, 
    {marca: 'Royal Canin',
    descripcion : 'Alimento Royal Canin Para Perro Mini Adulto 7,5 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/royalcanin/1.png',
    precio:9490,
    }, 
    {marca: 'Royal Canin',
    descripcion : 'Alimento Royal Canin Para Perro Mini Junior 7,5 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/royalcanin/2.png',
    precio:9650,
    }, 
    {marca: 'Royal Canin',
    descripcion : 'Alimento Royal Canin Para Perro Maxi Adulto 15 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/royalcanin/3.png',
    precio:14800,
    }, 
    {marca: 'Royal Canin',
    descripcion : 'Alimento Royal Canin Para Perro Maxi Junior 15 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/royalcanin/4.png',
    precio:16670,
    }, 
    {marca: 'Vitalcan',
    descripcion : 'Alimento VitalCan Premium Para Perro Adulto 20 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/vitalcan/1.png',
    precio:6570,
    }, 
    {marca: 'Vitalcan',
    descripcion : 'Alimento VitalCan Premium Para Perro Cachorro 15 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/vitalcan/1.png',
    precio:6000,
    },    
    {marca: 'Vitalcan',
    descripcion : 'Alimento VitalCan Premium Para Perro Adulto Raza Pequeña 20 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/vitalcan/3.png',
    precio:6570,
    },  
    {marca: 'Balanced',
    descripcion : 'Alimento Balanced Para Perro Cachorro Raza Pequeña 7,5 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/balance/1.png',
    precio:6380,
    },  
    {marca: 'Balanced',
    descripcion : 'Alimento Balanced Para Perro Cachorro Raza Mediana 20 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/balance/5.png',
    precio:12450,
    },    
    {marca: 'Balanced',
    descripcion : 'Alimento Balanced Para Perro Cachorro Raza Grande 20 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/balance/6.png',
    precio:12450,
    },    
    {marca: 'Balanced',
    descripcion : 'Alimento Balanced Para Perro Adulto Raza Pequeña 7,5 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/balance/4.png',
    precio:5000,
    },    
    {marca: 'Balanced',
    descripcion : 'Alimento Balanced Para Perro Adulto Raza Mediana 20 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/balance/5.png',
    precio:9950,
    },    
    {marca: 'Balanced',
    descripcion : 'Alimento Balanced Para Perro Adulto Raza Grande 20 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/balance/6.png',
    precio:9950,
    },       
    {marca: 'Crianza',
    descripcion : 'Alimento Crianza Para Perro Adulto 20 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/crianza/1.png',
    precio:5000,
    },  
    {marca: 'Crianza',
    descripcion : 'Alimento Crianza Para Perro Cachorro 15 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/crianza/2.png',
    precio:5000,
    },  
    {marca: 'Capitan',
    descripcion : 'Alimento Capitan Para Perro Adulto 22 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/capitan/1.jpg',
    precio:3750,
    },  
    {marca: 'Belcan',
    descripcion : 'Alimento Belcan Para Perro Adulto 22 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/belcan/1.png',
    precio:4270,
    },  
    {marca: 'Belcan',
    descripcion : 'Alimento Belcan Para Perro Cachorro 15 Kg',
    animal:'perro',
    productImg :'./imagenes/marcas/marcas/belcan/2.png',
    precio:3830,
    }, 
    
    {marca: 'Excellent',
    descripcion : 'Alimento Excellent Para Gato Adulto 7,5 kg',
    animal:'gato',
    productImg :'./imagenes/marcas/marcas/gatos/excellent/1.png',
    precio:8100,
    },
    {marca: 'Royal Canin',
    descripcion : 'Alimento Royal Canin Para Gato 10 Kg',
    animal:'gato',
    productImg :'./imagenes/marcas/marcas/gatos/royalcanin/1.png',
    precio:13500,
    },
    {marca: 'Vitalcan',
    descripcion : 'Alimento VitalCan Para Gato Urinary 7,5 Kg',
    animal:'gato',
    productImg :'./imagenes/marcas/marcas/gatos/vitalcan/1.png',
    precio:5600,
    },    
];

let arrayauxiliar=[];
const renderlogocart=log=>{
    // console.log('hola');
    return`
    <div class="logomarca">         
        <div class="imagenDiv" data-logomarca="${log.marca}" style="background-image:url(${log.marcaImg})" alt=""></div>
    </div>    `
}

const renderlogo= (p)=>{
    logoMarcas.innerHTML=p.map(renderlogocart).join(''); 
}
const renderproduct=p=>{
    // console.log('hola');
    return`
        <div class="producto">
        <div class="productoImg">
          <img src="${p.productImg}"/>
        </div>
       
        <p>${p.descripcion}</p>
        <div class="precio">$${p.precio.toLocaleString('de-DE')}</div>

    </div>`
}

const renderproducts= (p)=>{
    productos.innerHTML+=p.map(renderproduct).join(''); 
}
const renderproductfilter= (p)=>{
    productos.innerHTML=p.map(renderproduct).join(''); 
}
const menutogle=()=> {
    // console.log('pepe');
    navbarlist.classList.toggle('hidden');

}

// ---------------divido el array
const splitProducts =size=>{
    let divideProducts=[];
    for (i=0; i<products.length; i += size){
      divideProducts.push(products.slice(i,i + size));
    }
    // console.log(divideProducts);
    return divideProducts;

  }
  const productsController = {
    dividedProducts: splitProducts(6),
    // nextProductsIndex: 1,
    actual:1,

    productsLimit: splitProducts(6).length,
   
  };

  const verMas =()=>{
    
    // console.log(productsController);
   if(productsController.actual!=productsController.productsLimit)
  {
  
  productsController.actual ++;
   // renderproducts(productsController.dividedProducts[productsController.actual-1]);
     renderproducts(productsController.dividedProducts[productsController.actual]);
    
  }
  if(productsController.actual==6){
    vermasbtn.classList.add('btnhiden');
    
}

}
//-----------filtro por animal------
const filtrarAnimal =(e)=>{
    const animalSelect=e.target.dataset.animal;
    // console.log(e.target.dataset.animal);
    // console.log(animalSelect);
    if(!animalSelect){

        
    }
    else{
        let filtrado = products.filter(p => p.animal === animalSelect)
        console.log(filtrado);
        renderproductfilter(filtrado);
        vermasbtn.classList.add('btnhiden');
        quienesSomos.classList.add('btnhiden');
        marcas.classList.add('btnhiden');
        navbarlist.classList.add('hidden');

    }

}

//-----------filtro por marca------
const filtrarMarcas =(e)=>{
    const marcaSelect=e.target.dataset.logomarca;
     console.log(e.target.dataset.logomarca);
    console.log(marcaSelect);
    if(!marcaSelect){

        
    }
    else{
        let filtrado = products.filter(p => p.marca == marcaSelect);
        let filtradoMarcas = logosmarcas.filter(p => p.marca == marcaSelect);

        // console.log(filtrado);
        renderproductfilter(filtrado);
        vermasbtn.classList.add('btnhiden');
        quienesSomos.classList.add('btnhiden');
        renderlogo(filtradoMarcas);
        // marcas.classList.add('btnhiden');
        navbarlist.classList.add('hidden');

    }

}

const init =()=>{
    renderlogo(logosmarcas);
    // renderproducts(products);
   
    renderproducts(productsController.dividedProducts[0]);
    perroGatoContainer.addEventListener("click",filtrarAnimal);
    navbar.addEventListener("click",filtrarAnimal);
    barmenu.addEventListener("click",menutogle);
    vermasbtn.addEventListener("click",verMas);
    marcas.addEventListener("click",filtrarMarcas);
}
init();
