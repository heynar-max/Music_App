import { Playlist, Song } from "./types";
import bcryptjs from 'bcryptjs';

interface SeedUser {
    email: string;
    password: string;
    name: string;
    role: 'admin'|'user'
}

interface SeedData {
    users: SeedUser[];
}

export const initialData: SeedData = {

    users: [
        {
        email: 'heynar@google.com',
        name: 'Heynar Soto',
        password: bcryptjs.hashSync('123456'),
        role: 'admin'
    },
    {
        email: 'janeth@google.com',
        name: 'janeth narvaez',
        password: bcryptjs.hashSync('123456'),
        role: 'user'
    },

    ],
}


export const playlists: Playlist[] = [
{
    id: '1',
    albumId: 1,
    title: "Más alla de la realidad",
    cover: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233374/xqlham3gwdkzkfdais10.jpg",
    artists: ["Akash"],
    genre: "RockEspanol",
},
{
    id: '2',
    albumId: 2,
    title: "AM",
    cover: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233474/bbazezygjc6isnmsaikk.jpg",
    artists: ["Arctic Monkeys"],
    genre: "Rock",
},
{
    id: '3',
    albumId: 3,
    title: "Avalancha",
    cover: "https://res.cloudinary.com/dzty81hol/image/upload/v1697931368/lalfctbpxmrfvuappaxq.jpg",
    artists: ["Heroes del Silencio"],
    genre: "RockEspanol",
},
{
    id: '4',
    albumId: 4,
    title: "Adentro",
    cover: "https://res.cloudinary.com/dzty81hol/image/upload/v1740187720/pc8scxqhmqo2qm0ku7rd.jpg",
    artists: ["Los de Adentro"],
    genre: "RockEspanol",
},
{
    id: '5',
    albumId: 5,
    title: "Kronos Exitos",
    cover: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233673/j6x4oor8lhfd5j8yeoa4.jpg",
    artists: ["Kronos"],
    genre: "RockEspanol",
},
{
    id: '6',
    albumId: 6,
    title: "Le Mua Exitos",
    cover: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233768/dttyn0ybxhkfcuqviie5.jpg",
    artists: ["Le Mua"],
    genre: "PopRock",
},
{
    id: '7',
    albumId: 7,
    title: "REMIX",
    cover: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233861/o2eqjyznckselkg8br6e.jpg",
    artists: ["Duke Dumont", "Roger Sanchez", "Tennebreck", "Qodes", "Bob Sinclar","David Guetta"],
    genre: "Dance",
},
{
    id: '8',
    albumId: 8,
    title: "EL ESPíRITU DEL VINO",
    cover: "https://res.cloudinary.com/dzty81hol/image/upload/v1741546650/njozbdcas59yj9yhmwd0.jpg",
    artists: ["Heroes del Silencio"],
    genre: "RockEspanol",
},
{
    id: '9',
    albumId: 9,
    title: "SENDEROS DE TRADICIóN",
    cover: "https://res.cloudinary.com/dzty81hol/image/upload/v1741546650/hcsih5bg8zsimvhrwreb.jpg",
    artists: ["Heroes del Silencio"],
    genre: "RockEspanol",
},
];

export const songs: Song[] = [
{
    id: 1,
    albumId: 1,
    title: "Ven y Salta",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233374/xqlham3gwdkzkfdais10.jpg",
    artists: ["Akash"],
    album: "Mas Alla De La Realidad",
    duration: "4:00",
    genre: "RockEspanol",
    audioUrl: "/music/1/1.mp3"
},
{
    id: 2,
    albumId: 1,
    title: "Sol y Luna",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233374/xqlham3gwdkzkfdais10.jpg",
    artists: ["Akash"],
    album: "Mas Alla De La Realidad",
    duration: "3:51",
    genre: "RockEspanol",
    audioUrl: "/music/1/2.mp3"
},
{
    id: 3,
    albumId: 1,
    title: "Una Sombra a la Atardecer",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233374/xqlham3gwdkzkfdais10.jpg",
    artists: ["Akash"],
    album: "Mas Alla De La Realidad",
    duration: "6:46",
    genre: "RockEspanol",
    audioUrl: "/music/1/3.mp3"
},
{
    id: 4,
    albumId: 2,
    title: "I Wanna Be Yours",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233474/bbazezygjc6isnmsaikk.jpg",
    artists: ["Arctic Monkeys"],
    album: "AM",
    duration: "3:04",
    genre: "Rock",
    audioUrl: "/music/2/4.mp3"
},
{
    id: 5,
    albumId: 2,
    title: "Why'd You Only Call Me When You're High?",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233474/bbazezygjc6isnmsaikk.jpg",
    artists: ["Arctic Monkeys"],
    album: "AM",
    duration: "2:41",
    genre: "Rock",
    audioUrl: "/music/2/5.mp3"
},
{
    id: 6,
    albumId: 2,
    title: "Do I Wanna Know?",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233474/bbazezygjc6isnmsaikk.jpg",
    artists: ["Arctic Monkeys"],
    album: "AM",
    duration: "4:32",
    genre: "Rock",
    audioUrl: "/music/2/6.mp3"
},
{
    id: 7,
    albumId: 2,
    title: "Snap Out Of It",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233474/bbazezygjc6isnmsaikk.jpg",
    artists: ["Arctic Monkeys"],
    album: "AM",
    duration: "3:16",
    genre: "Rock",
    audioUrl: "/music/2/7.mp3"
},
{
    id: 8,
    albumId: 2,
    title: "505",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233474/bbazezygjc6isnmsaikk.jpg",
    artists: ["Arctic Monkeys"],
    album: "AM",
    duration: "4:14",
    genre: "Rock",
    audioUrl: "/music/2/8.mp3"
},
{
    id: 9,
    albumId: 3,
    title: "Deshacer el Mundo",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1697931368/lalfctbpxmrfvuappaxq.jpg",
    artists: ["Heroes del Silencio"],
    album: "Avalancha",
    duration: "4:47",
    genre: "RockEspanol",
    audioUrl: "/music/3/9.mp3"
},
{
    id: 10,
    albumId: 3,
    title: "En los Brazos de la Fiebre",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1697931368/lalfctbpxmrfvuappaxq.jpg",
    artists: ["Heroes del Silencio"],
    album: "Avalancha",
    duration: "4:45",
    genre: "RockEspanol",
    audioUrl: "/music/3/10.mp3"
},
{
    id: 11,
    albumId: 3,
    title: "Iberia Sumergida",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1697931368/lalfctbpxmrfvuappaxq.jpg",
    artists: ["Heroes del Silencio"],
    album: "Avalancha",
    duration: "5:17",
    genre: "RockEspanol",
    audioUrl: "/music/3/11.mp3"
},
{
    id: 12,
    albumId: 3,
    title: "La Chispa Adecuada",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1697931368/lalfctbpxmrfvuappaxq.jpg",
    artists: ["Heroes del Silencio"],
    album: "Avalancha",
    duration: "5:27",
    genre: "RockEspanol",
    audioUrl: "/music/3/12.mp3"
},
{
    id: 13,
    albumId: 3,
    title: "Opio",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1697931368/lalfctbpxmrfvuappaxq.jpg",
    artists: ["Heroes del Silencio"],
    album: "Avalancha",
    duration: "6:18",
    genre: "RockEspanol",
    audioUrl: "/music/3/13.mp3"
},
{
    id: 14,
    albumId: 4,
    title: "Dime que Si",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1740187720/pc8scxqhmqo2qm0ku7rd.jpg",
    artists: ["Los de Adentro"],
    album: "Adentro",
    duration: "3:00",
    genre: "RockEspanol",
    audioUrl: "/music/4/14.mp3"
},
{
    id: 15,
    albumId: 4,
    title: "Estrellas",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1740187720/pc8scxqhmqo2qm0ku7rd.jpg",
    artists: ["Los de Adentro"],
    album: "Adentro",
    duration: "4:41",
    genre: "RockEspanol",
    audioUrl: "/music/4/15.mp3"
},
{
    id: 16,
    albumId: 4,
    title: "No Más",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1740187720/pc8scxqhmqo2qm0ku7rd.jpg",
    artists: ["Los de Adentro"],
    album: "Adentro",
    duration: "3:14",
    genre: "RockEspanol",
    audioUrl: "/music/4/16.mp3"
},
{
    id: 17,
    albumId: 4,
    title: "Por Siempre",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1740187720/pc8scxqhmqo2qm0ku7rd.jpg",
    artists: ["Los de Adentro"],
    album: "Adentro",
    duration: "4:18",
    genre: "RockEspanol",
    audioUrl: "/music/4/17.mp3"
},
{
    id: 18,
    albumId: 4,
    title: "Tal Vez",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1740187720/pc8scxqhmqo2qm0ku7rd.jpg",
    artists: ["Los de Adentro"],
    album: "Adentro",
    duration: "3:45",
    genre: "RockEspanol",
    audioUrl: "/music/4/18.mp3"
},
{
    id: 19,
    albumId: 5,
    title: "Fuego En Mis Venas",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233673/j6x4oor8lhfd5j8yeoa4.jpg",
    artists: ["Kronos"],
    album: "Kronos Exitos",
    duration: "5:20",
    genre: "RockEspanol",
    audioUrl: "/music/5/19.mp3"
},
{
    id: 20,
    albumId: 5,
    title: "Igual Que Ayer",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233673/j6x4oor8lhfd5j8yeoa4.jpg",
    artists: ["Kronos"],
    album: "Kronos Exitos",
    duration: "4:06",
    genre: "RockEspanol",
    audioUrl: "/music/5/20.mp3"
},
{
    id: 21,
    albumId: 5,
    title: "Todo Esta Bien",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233673/j6x4oor8lhfd5j8yeoa4.jpg",
    artists: ["Kronos"],
    album: "Kronos Exitos",
    duration: "3:48",
    genre: "RockEspanol",
    audioUrl: "/music/5/21.mp3"
},

{
    id: 22,
    albumId: 6,
    title: "Abre Los Ojos",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233768/dttyn0ybxhkfcuqviie5.jpg",
    artists: ["Le Mua"],
    album: "Le Mua Exitos",
    duration: "3:30",
    genre: "PopRock",
    audioUrl: "/music/6/22.mp3"
},
{
    id: 23,
    albumId: 6,
    title: "Otros Labios",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233768/dttyn0ybxhkfcuqviie5.jpg",
    artists: ["Le Mua"],
    album: "Le Mua Exitos",
    duration: "3:38",
    genre: "PopRock",
    audioUrl: "/music/6/23.mp3"
},
{
    id: 24,
    albumId: 6,
    title: "Senti-Grados",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233768/dttyn0ybxhkfcuqviie5.jpg",
    artists: ["Le Mua"],
    album: "Le Mua Exitos",
    duration: "4:45",
    genre: "PopRock",
    audioUrl: "/music/6/24.mp3"
},
{
    id: 25,
    albumId: 7,
    title: "Ocean Drive",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233861/o2eqjyznckselkg8br6e.jpg",
    artists: ["Duke Dumont"],
    album: "Duality",
    duration: "3:27",
    genre: "Dance",
    audioUrl: "/music/7/25.mp3"
},
{
    id: 26,
    albumId: 7,
    title: "Lost",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233861/o2eqjyznckselkg8br6e.jpg",
    artists: ["Roger Sanchez"],
    album: "Come With Me",
    duration: "4:49",
    genre: "Dance",
    audioUrl: "/music/7/26.mp3"
},
{
    id: 27,
    albumId: 7,
    title: "Nina",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233861/o2eqjyznckselkg8br6e.jpg",
    artists: ["Tennebreck"],
    album: "Nina Sencillo",
    duration: "4:20",
    genre: "Dance",
    audioUrl: "/music/7/27.mp3"
},
{
    id: 28,
    albumId: 7,
    title: "Poison",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233861/o2eqjyznckselkg8br6e.jpg",
    artists: ["Qodes"],
    album: "Poison Sencillo",
    duration: "3:30",
    genre: "Dance",
    audioUrl: "/music/7/28.mp3"
},
{
    id: 29,
    albumId: 7,
    title: "Cinderella",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233861/o2eqjyznckselkg8br6e.jpg",
    artists: ["Bob Sinclar"],
    album: "Paris By Night",
    duration: "3:02",
    genre: "Dance",
    audioUrl: "/music/7/29.mp3"
},
{
    id: 30,
    albumId: 7,
    title: "I´m Good(Blue)",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233861/o2eqjyznckselkg8br6e.jpg",
    artists: ["David Guetta"],
    album: "I´m Good(Blue)",
    duration: "2:55",
    genre: "Dance",
    audioUrl: "/music/7/30.mp3"
},
{
    id: 31,
    albumId: 7,
    title: "World Hold On",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1714233861/o2eqjyznckselkg8br6e.jpg",
    artists: ["Bob Sinclar"],
    album: "Radio Edit",
    duration: "3:19",
    genre: "Dance",
    audioUrl: "/music/7/31.mp3"
},
{
    id: 32,
    albumId: 8,
    title: "La Apariencia no es Sincera",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1741546650/njozbdcas59yj9yhmwd0.jpg",
    artists: ["Heroes del Silencio"],
    album: "Espiritu del Vino",
    duration: "7:03",
    genre: "RockEspanol",
    audioUrl: "/music/8/32.mp3"
},
{
    id: 33,
    albumId: 8,
    title: "La Sirena Varada",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1741546650/njozbdcas59yj9yhmwd0.jpg",
    artists: ["Heroes del Silencio"],
    album: "Espiritu del Vino",
    duration: "4:15",
    genre: "RockEspanol",
    audioUrl: "/music/8/33.mp3"
},
{
    id: 34,
    albumId: 8,
    title: "Nuestros Nombres",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1741546650/njozbdcas59yj9yhmwd0.jpg",
    artists: ["Heroes del Silencio"],
    album: "Espiritu del Vino",
    duration: "5:57",
    genre: "RockEspanol",
    audioUrl: "/music/8/34.mp3"
},
{
    id: 35,
    albumId: 9,
    title: "Malas Intenciones",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1741546650/hcsih5bg8zsimvhrwreb.jpg",
    artists: ["Heroes del Silencio"],
    album: "Senderos de Traición",
    duration: "3:47",
    genre: "RockEspanol",
    audioUrl: "/music/9/35.mp3"
},
{
    id: 36,
    albumId: 9,
    title: "Maldito Duende",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1741546650/hcsih5bg8zsimvhrwreb.jpg",
    artists: ["Heroes del Silencio"],
    album: "Senderos de Traición",
    duration: "4:15",
    genre: "RockEspanol",
    audioUrl: "/music/9/36.mp3"
},
{
    id: 37,
    albumId: 9,
    title: "Oración",
    image: "https://res.cloudinary.com/dzty81hol/image/upload/v1741546650/hcsih5bg8zsimvhrwreb.jpg",
    artists: ["Heroes del Silencio"],
    album: "Senderos de Traición",
    duration: "4:06",
    genre: "RockEspanol",
    audioUrl: "/music/9/37.mp3"
},
];
