import { AnyAction } from "@reduxjs/toolkit"

export interface IInitialState {
   items: IItems[],
   basket: Partial<IItems[]>
}

export interface IItems {
  name: string; 
  img: string;
  price: string | number;
  id: number;
  isClicked: boolean;
  count: number;
}

const initialState = {
    items: [
    { name: "Властелин колец", 
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/a2d5bcae-a1a9-442f-8195-f5373a5ba77f/300x450",
      price: 2000,
      id: 1,
      isClicked: false,
      count: 0,
    },
    { name: "Шерлок", 
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/f28c1ea2-47b0-49d5-b11c-9608744f0233/600x900",
    price: 2000,
    id: 2,
    isClicked: false,
    count: 0,
    },
    { name: "Игра престолов", 
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/dd78edfd-6a1f-486c-9a86-6acbca940418/600x900",
    price: 2000,
    id: 3,
    isClicked: false,
    count: 0,
    },
    { name: "Гарри Поттер", 
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/27ed5c19-a045-49dd-8624-5f629c5d96e0/600x900",
    price: 2000,
    id: 4,
    isClicked: false,
    count: 0,
    },
    { name: "Мартин Иден", 
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/42029831-ad26-4199-b655-e0f0a5cc4f88/300x450",
    price: "2000",
    id: 5,
    isClicked: false,
    count: 0,
    },
    { name: "Оно", 
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/34653c61-8b9a-4ba4-8057-6c81d70c71ed/300x450",
    price: 2000,
    id: 6,
    isClicked: false,
    count: 0,
    },
    { name: "Тонкое искусство пофигизма", 
    img: "https://avatars.mds.yandex.net/get-mpic/2017233/img_id770997152814401904.jpeg/orig",
    price: 2000,
    id: 7,
    isClicked: false,
    count: 0,
    },
    { name: "Первому игроку приготовиться", 
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/5ae82f4b-fd6a-46b5-b5ba-897106eb1eae/300x450",
    price: 2000,
    id: 8,
    isClicked: false,
    count: 0,
    },
    { name: "Тор", 
    img: "https://upload.wikimedia.org/wikipedia/ru/9/92/%D0%A2%D0%BE%D1%80_%D0%9B%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C_%D0%B8_%D0%B3%D1%80%D0%BE%D0%BC_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg",
    price: 2000,
    id: 9,
    isClicked: false,
    count: 0,
    },
    { name: "Путь Абая", 
    img: "https://cdn.f.kz/prod/137/136013_550.jpg",
    price: 2000,
    id: 10,
    isClicked: false,
    count: 0,
    },
    { name: "Кыз жыбек", 
    img: "https://cdn.f.kz/prod/148/147571_550.jpg",
    price: 2000,
    id: 11,
    isClicked: false,
    count: 0,
    },
    { name: "Край Обетованный", 
    img: "https://cv2.litres.ru/pub/c/elektronnaya-kniga/cover_330/155121-haruki-murakami-kray-obetovannyy.jpg",
    price: 2000,
    id: 12,
    isClicked: false,
    count: 0,
    },
  ],
  basket: []
}

export default function rootReducer(state: IInitialState = initialState, action: AnyAction) {
  switch (action.type) {
    case 'ADD_BASKET': {
      return { 
        ...state,
        basket: state.basket.concat(action.value)
       }
    }
    case 'SET_CLICKED': {
      return { 
        ...state,
        items: state.items.map((item) => {
          if (item.id == action.id) return { ...item, isClicked: action.value }
          else return item;
         } )
       }
    }
    case 'SET_COUNT': {
      return { 
        ...state,
         basket: state.basket.map((item) => {
          if(!item) return item;
          if (item.id == action.id) return { ...item, count: action.value }
          else return item;
         } )
       }
    }
    default:
      return state
  }
}