import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';
import 'rxjs/add/observable/of';

export interface Place {
    id: number;
    img: string;
    thumbnail: string;
    phone: string;
    title: string;
    weather: PlaceWeather;
    social: PlaceSocial;
    type: string;
    description?: string;
}

interface PlaceWeather {
    water: number;
    air: number;
}

interface PlaceSocial {
    followers: number;
    following: number;
}

const places = [{
    "id": 1,
    "img": "https://picsum.photos/334/201/?random=634",
    "thumbnail": "https://picsum.photos/100/100/?random=441",
    "phone": "+55 (327) 722-3467",
    "title": "Schmitt, Johns and Schmeler",
    "weather": {
        "water": 30,
        "air": 25
    },
    "social": {
        "followers": 1775,
        "following": 1320
    },
    "type": "guest_house",
    "description": "Quisque ut erat."
}, {
    "id": 2,
    "img": "https://picsum.photos/334/201/?random=183",
    "thumbnail": "https://picsum.photos/100/100/?random=552",
    "phone": "+263 (469) 782-5768",
    "title": "Balistreri-Rath",
    "weather": {
        "water": 20,
        "air": 34
    },
    "social": {
        "followers": 466,
        "following": 2235
    },
    "type": "guest_house",
    "description": "Nam nulla."
}, {
    "id": 3,
    "img": "https://picsum.photos/334/201/?random=460",
    "thumbnail": "https://picsum.photos/100/100/?random=536",
    "phone": "+55 (925) 625-4695",
    "title": "Bernier-Lang",
    "weather": {
        "water": 20,
        "air": 31
    },
    "social": {
        "followers": 595,
        "following": 5581
    },
    "type": "guest_house",
    "description": "Proin interdum mauris non ligula pellentesque ultrices."
}, {
    "id": 4,
    "img": "https://picsum.photos/334/201/?random=143",
    "thumbnail": "https://picsum.photos/100/100/?random=75",
    "phone": "+251 (474) 450-2771",
    "title": "Kshlerin, Bins and Conn",
    "weather": {
        "water": 22,
        "air": 23
    },
    "social": {
        "followers": 8334,
        "following": 2203
    },
    "type": "appartments",
    "description": "Cras non velit nec nisi vulputate nonummy."
}, {
    "id": 5,
    "img": "https://picsum.photos/334/201/?random=335",
    "thumbnail": "https://picsum.photos/100/100/?random=134",
    "phone": "+420 (586) 124-9477",
    "title": "Hansen-Vandervort",
    "weather": {
        "water": 27,
        "air": 32
    },
    "social": {
        "followers": 7403,
        "following": 2322
    },
    "type": "hotel",
    "description": "Duis at velit eu est congue elementum."
}, {
    "id": 6,
    "img": "https://picsum.photos/334/201/?random=313",
    "thumbnail": "https://picsum.photos/100/100/?random=849",
    "phone": "+54 (834) 138-7000",
    "title": "Luettgen, Hamill and Becker",
    "weather": {
        "water": 28,
        "air": 38
    },
    "social": {
        "followers": 5201,
        "following": 5255
    },
    "type": "appartments",
    "description": "Mauris ullamcorper purus sit amet nulla."
}, {
    "id": 7,
    "img": "https://picsum.photos/334/201/?random=986",
    "thumbnail": "https://picsum.photos/100/100/?random=311",
    "phone": "+1 (285) 290-3346",
    "title": "Brekke-Runte",
    "weather": {
        "water": 28,
        "air": 40
    },
    "social": {
        "followers": 1689,
        "following": 5649
    },
    "type": "appartments",
    "description": "Cras in purus eu magna vulputate luctus."
}, {
    "id": 8,
    "img": "https://picsum.photos/334/201/?random=112",
    "thumbnail": "https://picsum.photos/100/100/?random=515",
    "phone": "+7 (628) 316-1791",
    "title": "Senger-Kihn",
    "weather": {
        "water": 27,
        "air": 36
    },
    "social": {
        "followers": 6514,
        "following": 115
    },
    "type": "guest_house",
    "description": "Aliquam sit amet diam in magna bibendum imperdiet."
}, {
    "id": 9,
    "img": "https://picsum.photos/334/201/?random=401",
    "thumbnail": "https://picsum.photos/100/100/?random=557",
    "phone": "+84 (141) 220-0785",
    "title": "Gorczany, Anderson and O'Kon",
    "weather": {
        "water": 15,
        "air": 21
    },
    "social": {
        "followers": 6073,
        "following": 5676
    },
    "type": "hotel",
    "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa."
}, {
    "id": 10,
    "img": "https://picsum.photos/334/201/?random=91",
    "thumbnail": "https://picsum.photos/100/100/?random=989",
    "phone": "+86 (466) 908-2693",
    "title": "Rempel-Kassulke",
    "weather": {
        "water": 19,
        "air": 36
    },
    "social": {
        "followers": 6720,
        "following": 7677
    },
    "type": "appartments",
    "description": "Mauris lacinia sapien quis libero."
}];


export const places$: Observable<Place[]> = Observable.of(places).pipe(
    delay(1000)
);
