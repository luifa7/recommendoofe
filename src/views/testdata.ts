import { Recommendation, City, User } from "@/store/types/types";

export const testCities: Array<City> = [
  {
    dId: "ber1",
    name: "Berlin",
    country: "Germany",
    photo:
      "https://a.cdn-hotels.com/cos/heroimage/Berlin_0_154961555.jpg?impolicy=fcrop&w=536&h=384&q=high",
    userDId: "user1",
    visited: false,
  },
  {
    dId: "nue1",
    name: "Nürnberg",
    country: "Germany",
    photo:
      "https://www.wb-fernstudium.de/fileadmin/_processed_/c/3/csm_AdobeStock_131529487_Nuernberg_dc6e2f47c1.jpeg",
    userDId: "user1",
    visited: true,
  },
  {
    dId: "ber2",
    name: "Berlin",
    country: "Germany",
    photo:
      "https://a.cdn-hotels.com/cos/heroimage/Berlin_0_154961555.jpg?impolicy=fcrop&w=536&h=384&q=high",
    userDId: "user2",
    visited: true,
  },
  {
    dId: "ber2",
    name: "Berlin",
    country: "Germany",
    photo:
      "https://a.cdn-hotels.com/cos/heroimage/Berlin_0_154961555.jpg?impolicy=fcrop&w=536&h=384&q=high",
    userDId: "user2",
    visited: false,
  },
  {
    dId: "ber3",
    name: "Berlin",
    country: "Germany",
    photo:
      "https://a.cdn-hotels.com/cos/heroimage/Berlin_0_154961555.jpg?impolicy=fcrop&w=536&h=384&q=high",
    userDId: "user3",
    visited: false,
  },
  {
    dId: "ber4",
    name: "Berlin",
    country: "Germany",
    photo:
      "https://a.cdn-hotels.com/cos/heroimage/Berlin_0_154961555.jpg?impolicy=fcrop&w=536&h=384&q=high",
    userDId: "user4",
    visited: true,
  },
  {
    dId: "ber5",
    name: "Berlin",
    country: "Germany",
    photo:
      "https://a.cdn-hotels.com/cos/heroimage/Berlin_0_154961555.jpg?impolicy=fcrop&w=536&h=384&q=high",
    userDId: "user5",
    visited: true,
  },
  {
    dId: "ber6",
    name: "Berlin 22",
    country: "Germany",
    photo:
      "https://a.cdn-hotels.com/cos/heroimage/Berlin_0_154961555.jpg?impolicy=fcrop&w=536&h=384&q=high",
    userDId: "user6",
    visited: false,
  },
];

export const testUsers: Array<User> = [
  {
    dId: "user1",
    userName: "user1",
    name: "Luifa",
    shortFact1: "Developer",
    shortFact2: "Love to drink Mate",
    shortFact3: "Vegetarian",
    description:
      "I love to visit vegetarian restaurant of all kind of coultures. Bouldering is a hobby but also nice marathons are something i enjoy.",
    interestedIn: "Restaurants, bars, local football teams, dancing",
    photo:
      "https://profile-images.xing.com/images/88103bffbef61b6fd5d47236924b7fed-2/luis-alfredo-godoy-alvarez.1024x1024.jpg",
    friends: ["user2", "user3", "user4"],
  },
  {
    dId: "user2",
    userName: "user2",
    name: "Lyaksandro",
    shortFact1: "Traveler",
    shortFact2: "Dreamer",
    shortFact3: "Idealist",
    description:
      "Traveling is my biggest hobby, but i also enjoy to discover new places in my city. Also recommend me interestin hotels, since i like to change it every time i travel.",
    interestedIn: "wine, beer, metal, books, small cafes",
    photo: "https://f4.bcbits.com/img/a0747725074_10.jpg",
    friends: ["user1", "user3", "user6"],
  },
  {
    dId: "user3",
    userName: "user3",
    name: "Kalevala",
    shortFact1: "Bookworm",
    shortFact2: "Love sweets",
    shortFact3: "Football is my biggest hobby",
    description:
      "Traveling is my biggest hobby, but i also enjoy to discover new places in my city. Also recommend me interestin hotels, since i like to change it every time i travel.",
    interestedIn: "Local traditional food, weird museums, mystery places",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/DEATH_NOTE_L_wallpaper.jpg",
    friends: ["user1", "user2", "user4"],
  },
  {
    dId: "user4",
    userName: "user4",
    name: "Rammon",
    shortFact1: "Hobby fighter",
    shortFact2: "Taekwondist",
    shortFact3: "Ice-cream is my weakness",
    description:
      "Traveling is my biggest hobby, but i also enjoy to discover new places in my city. Also recommend me interestin hotels, since i like to change it every time i travel.",
    interestedIn:
      "small towns near big cities, cafes you cannot find in google maps",
    photo:
      "https://assets.cdn.moviepilot.de/files/d8e9d2e1a642ae710715bb3acc2fec13d6f71dca6427eabbe7c96e4016df/fill/992/477/Ragnar%20Lodbrok.jpg",
    friends: ["user1", "user3", "user5", "user6"],
  },
  {
    dId: "user5",
    userName: "user5",
    name: "Jakob",
    shortFact1: "The road is my home",
    shortFact2: "Motorbikes <3",
    shortFact3: "BBQ lover",
    description:
      "Traveling is my biggest hobby, but i also enjoy to discover new places in my city. Also recommend me interestin hotels, since i like to change it every time i travel.",
    interestedIn: "traditional clothes, national museums, art galleries",
    photo:
      "https://a2.tvspielfilm.de/imedia/7334/10507334,q1ecYDc39Cy2qkADbhdCK2Ta48SRUV0rii2I2SczJwKWZIFywA8meL0j3_do8365e3CcUUFEri0P6ZfSKTgb+A==.jpg",
    friends: ["user4"],
  },
  {
    dId: "user6",
    userName: "user6",
    name: "Luen",
    shortFact1: "I love bloody stakes",
    shortFact2: "Like to experiment",
    shortFact3: "Bizarrist",
    description:
      "Traveling is my biggest hobby, but i also enjoy to discover new places in my city. Also recommend me interestin hotels, since i like to change it every time i travel.",
    interestedIn: "liquours, nerd stuff, local vegan dishes",
    photo:
      "https://www.rollingstone.de/wp-content/uploads/2021/05/10/14/till-kopie-992x560.jpg",
    friends: ["user2", "user4"],
  },
];

export const testRecommendations: Array<Recommendation> = [
  {
    dId: "abc1",
    placeName: "Casa Argentina",
    title: "Buen restaurant argentino",
    text: "Esta bueno probar tal cosa y tal otra. La comida tienen un sabor hogarenio y esta muy bien preparada.",
    address: "Menuloho strasse 12",
    maps: "https://www.google.com/maps/place/Casa+Argentina/@49.4556775,11.0824585,17z/data=!3m1!4b1!4m5!3m4!1s0x479f57a4aaf42ff7:0x88dc8548f85823db!8m2!3d49.4556775!4d11.0846472",
    website: "http://www.casaargentina.de/",
    instagram: "",
    facebook: "",
    otherLink: "",
    photo:
      "data:image/jpeg;base64,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",
    createdOn: Date.now(),
    cityDId: "nue1",
    tags: ["restaurant", "argentinian"],
    fromUserDId: "user4",
    toUserDId: "user1",
  },
  {
    dId: "abc2",
    placeName: "Tiflis",
    title: "Buen restaurant georgiano",
    text: "Al chatchapuri ex muy bueno. los vinos semi dulces son de lo mejor, especialidad de georgia.",
    address: "Menuloho strasse 12",
    maps: "https://goo.gl/maps/GKKMXVSpT36PcesT9",
    website: "https://www.restaurant-tiflis.de",
    instagram: "",
    facebook: "",
    otherLink: "",
    photo:
      "https://gutscheinbuch.de/data/crm_vertrag/610001_180703_094224OK/galerie/610001_180703_094224OK_galerie7_800px.jpg",
    createdOn: Date.now(),
    cityDId: "nue2",
    tags: ["restaurant", "georgian"],
    fromUserDId: "user3",
    toUserDId: "user2",
  },
  {
    dId: "abc3",
    placeName: "Taberu",
    title: "Buen all you can eat japones",
    text: "Te atiende un robot y podes ordenar todo desde la tablet. La calidad es uy buena para ser un all you can eat.",
    address: "Menuloho strasse 12",
    maps: "https://g.page/Taberu_nbg?share",
    website: "",
    instagram: "",
    facebook: "https://www.facebook.com/NbgTaberu",
    otherLink: "",
    photo: "https://10619-2.s.cdn12.com/rests/original/102_508318241.jpg",
    createdOn: Date.now(),
    cityDId: "ber6",
    tags: ["restaurant", "asiatic"],
    fromUserDId: "user5",
    toUserDId: "user6",
  },
  {
    dId: "abc4",
    placeName: "KomeKome",
    title: "Buen restaurant japones",
    text: "El mejor restaurant japones de nürnberg, ahi son todos 100% japoneses por eso la preparacion tiene una calidad especial.",
    address: "Menuloho strasse 12",
    maps: "https://goo.gl/maps/bVT8pXU3GSKHZQUcA",
    website: "http://komekome.de/",
    instagram: "",
    facebook: "",
    otherLink: "",
    photo: "https://www.kawaii-blog.org/wp-content/uploads/DSC02965cc.jpg",
    createdOn: Date.now(),
    cityDId: "ber3",
    tags: ["restaurant", "japanese"],
    fromUserDId: "user6",
    toUserDId: "user3",
  },
];
