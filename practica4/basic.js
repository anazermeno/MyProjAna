var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Lista de pendientes'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        bucl:[
            { message:"Estudiar seguridad"  },
            { message:"Reporte de Calidad" },
            { message:"Laboratorio" },
            { message: "Estudiar graficas" },
            { message: "Ver clases" },
        ]
    }
  })

var app3 = new Vue({ 
    el: '#app-3',
    data: {
        message: 'Lista de materias'
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        bucl:[
            { message: "Desarrollo Web" },
            { message: "Seguridad Informatica" },
            { message: "Metodos Cuantitativos y Simulacion" },
            { message: "Graficas Computacionales" },
            { message: "Lenguajes de Programacion" },
            { message: "APIS" },
        ]
    }
})

function GetRandomImage(){
    let picturePath = ''
    let imageBank = ['https://images.adsttc.com/media/images/599d/9e00/b22e/38f0/8900/00c2/large_jpg/PatioCentral.jpg?1503501795','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/92/f9/d8/received-1089143311168942.jpg?w=1000&h=-1&s=1','https://upload.wikimedia.org/wikipedia/commons/6/60/Panorama_ITESM.jpg','https://upload.wikimedia.org/wikipedia/commons/a/ae/ITESM_Monterrey_Rectoria_CETEC.jpg']
    picturePath += imageBank[Math.floor(Math.random()* imageBank.length)]
    return picturePath
}

var detalle = new Vue({
    el: '#detalle',
    data: {
        name: 'Ana Zermeno',
        date: '16 Marzo 2022',
        imag: GetRandomImage()
    } 
})