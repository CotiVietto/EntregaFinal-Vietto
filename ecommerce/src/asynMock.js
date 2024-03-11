const products = [
    {
        id:'1',
        name:'Banana Boat',
        price:'2800',
        category:'Protector Solar Facial',
        filter: 'all',
        img:'../src/assets/protectores/protectorbanaboat.png',
        stock:'6',
        psf:'50',
        ml:'88',
        description:'Sin peso, ultra transpirable: no obstruye los poros, absorbe el exceso de aceite y humedad. Fórmula no grasosa y de rápida absorción: para mantenerte seco y fresco. Protección UVA/UVB de amplio espectro: fórmula resistente al agua hasta 80 minutos.'

    },

    {
        id:'2',
        name:'ACF by Dadatina',
        price:'3800',
        category:'Protector Solar Facial',
        filter: 'all',
        img:'../src/assets/protectores/protectordadatina.png',
        stock:'7',
        pfs:'50',
        ml:'88',
        description:'Su fórmula con efecto toque seco es apta para todo tipo de pieles, otorgando absorción inmediata, y protegiendo la piel los 365 días del año, previniendo quemaduras solares y fotoenvejecimiento. También protege de los daños de la luz azul.'

    },

    {
        id:'3',
        name:'Hawaiian Tropic',
        price:'29890',
        category:'Protector Solar Facial',
        filter: 'all',
        img:'../src/assets/protectores/protectorhawaiiantropic.png',
        stock:'11',
        pfs:'50',
        ml:'90',
        description:'Ahora con su nueva fórmula ultra que brinda tres beneficios en uno: protege, suaviza y deja tu piel radiante. Fusiona su protección de amplio espectro UVA y UVB con exóticos ingredientes tropicales, para que cuides y protejas tu piel mientras disfrutas del sol.'

    },

    {
        id:'4',
        name:'Isdin facial',
        price:'14135.99',
        category:'Protector Solar Facial',
        img:'../src/assets/protectores/protectorisdin.png',
        stock:'9',
        pfs:'50',
        ml:'50',
        description:'Fusion Water Color Bronze es un protector solar facial con color. Gracias a su fórmula ultraligera, protege tu piel a diario contra los rayos UVB y UVA (SPF 50). Aporta una cobertura natural que disimula imperfecciones, unifica el tono y proporciona un efecto buena cara.'

    },

    {
        id:'5',
        name:'La Roche Posay',
        price:'31325',
        category:'Protector Solar Facial',
        img:'../src/assets/protectores/protectorlarocheposay.png',
        stock:'12',
        pfs:'50',
        ml:'60',
        description:'Anthelios toque seco fps 50+ de La Roche-Posay es un protector solar para pieles mixtas a grasas con un efecto mate. Su fórmula es ligera y cómoda para el uso diario y la piel sensible. Acabado invisible de fácil aplicación. No comedogénico, no tapa los poros.'
    },

    {
        id:'6',
        name:'Rayito de Sol',
        price:'7650',
        category:'Protector Solar Facial',
        img:'../src/assets/protectores/protectorrayitodesol.png',
        stock:'7',
        pfs:'50',
        ml:'30',
        description:'Protege la piel del daño inducido por la exposición solar y de los efectos de la luz azul. Mejora los signos relacionados con el envejecimiento en la piel expuesta al sol contribuyendo a la reducción de arrugas y mejorando la firmeza de la piel.'

    },

    {
      id:'7',
      name:'Protector Isdin corporal Foto hydrolotion',
      price:'39.400,81',
      category:'Protector Solar Corporal',
      img:'../src/assets/protectorescorporales/isdincorporal.jpg',
      stock:'17',
      pfs:'50+',
      ml:'200',
      description:'El primer fotoprotector que oxigena tu piel. Consejo de Aplicacion:Mezclar 5 segundos. Asegurar que el producto se ha mezclado correctamente antes de cualquier aplicación. Aplicar generosamente sobre la piel seca, media hora antes de la exposición solar. Reaplicar cada 2 horas y tras transpirar, nadar o secarse con toalla.Mezclar 5 segundos. Asegurar que el producto se ha mezclado correctamente antes de cualquier aplicación. Aplicar generosamente sobre la piel seca, media hora antes de la exposición solar. Reaplicar cada 2 horas y tras transpirar, nadar o secarse con toalla.'

    },

    {
      id:'8',
      name:'Dermaglos protector corporal',
      price:' 3142,35',
      category:'Protector Solar Corporal',
      img:'../src/assets/protectorescorporales/dermagloscorporal.jpg',
      stock:'7',
      pfs:'50',
      ml:'50',
      description:'Protector Solar Dermaglós FPS50 Emulsión con Vitamina E: efecto antioxidante y antiinflamatorio, Alantoína: acción queratolítica y regeneradora de la piel. Filtros solares. Beneficios. Hidrata y nutre la piel.  Ideal para pieles sensibles.'

    },

    {
      id:'9',
      name:'Anthelios corporal',
      price:'34890',
      category:'Protector Solar Corporal',
      img:'../src/assets/protectorescorporales/anthelioscorporal.jpg',
      stock:'12',
      pfs:'50',
      ml:'200',
      description:'Sus beneficios son: 1) Muy alta protección de rayos UVB/UVA, rayos infrarrojos y contaminación. 2) Máxima eficacia con la mayor tolerancia. Apto para las pieles más sensibles. 3) Aplicación práctica. Contiene Agua termal de la Roche-Posay, tecnología de protección solar XL-PROTECT. Testeado bajo control dermatológico.    Consejos de uso: Aplicar 30 minutos antes de la exposición solar. Repetir con regularidad para mantener el nivel de protección: por lo menos una vez cada dos horas, después de cada baño y después de secarse con la toalla. Uso externo.'

    },

    {
      id:'10',
      name:'Caviahue protector solar corporal transparente',
      price:'14625',
      category:'Protector Solar Corporal',
      img:'../src/assets/protectorescorporales/caviahuecorporal.jpg',
      stock:'9',
      pfs:'50',
      ml:'170',
      description:'Libre de parabenos y aceites minerales. Cruelty Free. Protección Alta de amplio espectro: FPS 50 / protección UVA (25). De textura liviana y transparente. Se fija en la piel rápidamente. Resistente al agua.  Permite una aplicación pareja y rápida, facilitando la auto aplicación en zonas de difícil acceso como la espalda.'

  },

  {
    id:'11',
    name:'Vichy Capital Soleil corporal',
    price:'33175',
    category:'Protector Solar Corporal',
    img:'../src/assets/protectorescorporales/vichycorporal.jpg',
    stock:'7',
    pfs:'50',
    ml:'300',
    description:'Vichy Capital Soleil Agua Solar Protectora Hâle Sublimé SPF 50 200 ml es un producto de cuidado basado en una combinación única de un filtro UV de amplio espectro y una fórmula sensorial. Su textura acuosa ultra-fresca y no pegajosa garantiza una aplicación sin marcas blancas y protege eficazmente la piel gracias a su índice SPF50. La fórmula está enriquecida con betacaroteno, un potenciador del bronceado. Ofrece resistencia al agua y al sudor y una agradable fragancia.'

  },

  {
    id:'12',
    name:'Protector Eucerin corporal',
    price:'35000',
    category:'Protector Solar Corporal',
    img:'../src/assets/protectorescorporales/eucerincorporal.jpg',
    stock:'7',
    pfs:'50',
    ml:'200',
    description:'El Protector solar corporal en spray Eucerin Toque Seco se ha diseñado especialmente para pieles sensibles o pieles propensas al acné. Es un spray 100% transparente y de textura ligera que produce un efecto refrescante y se absorbe rápidamente. Su fórmula contiene Licochalcona A, un potente antioxidante que protege las células de la piel contra los daños en la piel inducidos por el sol. También posee FPS 50 y un sistema de filtros UVA/UVB que brinda un cuidado confiable contra las quemaduras solares. Su presentación en aerosol permite aplicarlo rápidamente, de forma homogénea y desde varias posiciones y acceder con facilidad a las áreas de la piel de difícil acceso.'

  }

]

export const getProducts = () => {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(products);
      }, 500);
  });
};

export const getProductsById = (productId) => {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === productId));
      }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise(resolve => {
      setTimeout(() => {
          if (category === 'all') { // Si la categoría es 'all', devolver todos los productos
              resolve(products);
          } else {
              resolve(products.filter(prod => prod.category === category)); // Filtrar productos por categoría
          }
      }, 500);
  });
};