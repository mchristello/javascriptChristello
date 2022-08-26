// Declaración de Clases

class Items {
    constructor(id, tipo, imagen, marca, modelo, anio, precio) {
        this.id = id
        this.tipo = tipo
        this.imagen = imagen
        this.marca = marca
        this.modelo = modelo
        this.anio = anio
        this.precio = precio
    };
}

let paletero = [];

// Nos traemos los items del archivo .json
fetch(`productos.json`)
.then(response => response.json())
// Cargamos esos items al array "paletero"
.then((info) => {
    info.forEach((item) => {
        paletero.push(item);
    })
});



// let items1 = new Items(1,`Pala`, `img/AT10_18k.webp`, `Nox`, `AT10 18k`, 2022, 60500);
// let items2 = new Items(2,`Pala`, `img/ML10_ProCup.webp`, `Nox`, `ML10 Pro Cup`, 2022, 60500);
// let items3 = new Items(3,`Pala`, `img/Head_AlphaElite.jpg`, `Head`, `Alpha Elite`, 2022, 64400);
// let items4 = new Items(4,`Pala`, `img/Head_DeltaPro.jpg`, `Head`, `Delta Pro`, 2022, 74500);
// let items5 = new Items(5,`Pala`, `img/Bullpadel_Hack03.jpg`, `Bullpadel`, `Hack 03`, 2022, 119900);
// let items6 = new Items(6,`Pala`, `img/Bullpadel_Vertex03.jpg`, `Bullpadel`, `Vertex 03`, 2022, 126000);
// let items7 = new Items(7,`Pala`, `img/Babolat_AirViper.jpg`, `Babolat`, `Air Viper`, 2022, 94500);
// let items8 = new Items(8,`Pala`, `img/Babolat_TechnicalViper.webp`, `Babolat`, `Technical Viper`, 2022, 94500);
// let items9 = new Items(9, `Zapatilla`, `img/Zapatillas_AT10_Rojo.webp`, `Nox`, `AT10 Rojo/Negro`, 2022, 34900);
// let items10 = new Items(10, `Zapatilla`, `img/Head_SprintPro.jpg`, `Head`, `Head Sprint Pro`, 2021, 28600);
// let items11 = new Items(11, `Zapatilla`, `img/Head_SprintEvo.jpg`, `Head`, `Head Sprint Evo`, 2022, 31500);
// let items12 = new Items(12, `Zapatilla`, `img/Bullpadel_ZapatillaVertex.jpg`, `Bullpadel`, `Vertex`, 2022, 30700);
// let items13 = new Items(13, `Zapatilla`, `img/Bullpadel_ZapatillaHack.jpg`, `Bullpadel`, `Hack`, 2022, 29500);
// let items14 = new Items(14, `Zapatilla`, `img/Babolat_JetPremura.jpg`, `Babolat`, `Jet Premura`, 2021, 25500);
// let items15 = new Items(15, `Bolso`, `img/Head_TourTeamPadelBag.jpg`, `Head`, `Tour Team`, 2021, 21500);
// let items16 = new Items(16, `Bolso`, `img/Head_ElitePadelBag.jpg`, `Head`, `Elite Padel`, 2021, 22500);
// let items17 = new Items(17, `Bolso`, `img/Bullpadel_BolsoVertex.jpg`, `Bullpadel`, `Vertex`, 2022, 24900);
// let items18 = new Items(18, `Bolso`, `img/Bullpadel_BolsoFlow.jpg`, `Bullpadel`, `Flow`, 2020, 19800);
// let items19 = new Items(19, `Bolso`, `img/Bolso_AT10.webp`, `Nox`, `AT10`, 2021, 21400);
