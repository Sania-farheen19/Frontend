

const STORAGE_KEY = "products"

const defaultProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    stock: 5,
    image:
      "https://img.freepik.com/free-photo/laptop-with-sun-background_1232-429.jpg?w=740",
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000,
    stock: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmiAKtiWFbFuOGFav4liY881ikLKeHK96rlw&s",
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    stock: 12,
    image:
      "https://img.freepik.com/free-photo/headphones-audio-listen_1203-7566.jpg?w=740",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 4500,
    stock: 10,
    image:
      "https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?semt=ais_rp_progressive&w=740&q=80",
  },
  {
    id: 5,
    name: "Keyboard",
    price: 1500,
    stock: 15,
    image:
      "https://m.media-amazon.com/images/I/61U7MWJP9rL.jpg",
  },
  {
    id: 6,
    name: "Mouse",
    price: 800,
    stock: 20,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfJLyakRArDS9-aLhLGYLQxKu-UxDhRh5fiehGdrGYcgPb4PCRk_az2GMUULuA7TqdiFuNEsc-v4j4bBm2uij042GiUuZnRg",
  },
  {
    id: 7,
    name: "Monitor",
    price: 12000,
    stock: 6,
    image:
      "https://m.media-amazon.com/images/I/51Vg8koFk9L.jpg",
  },
  {
    id: 8,
    name: "Tablet",
    price: 18000,
    stock: 9,
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2025/04/BEST-TABLETS-2048px-3x2-1.jpg?auto=webp&quality=75&crop=4:3,smart&width=1024",
  },
  {
    id: 9,
    name: "Camera",
    price: 35000,
    stock: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPF6YNWN809w68sQvnI5LMELcEj_zhsB11w&s",
  },
  {
    id: 10,
    name: "T-Shirt",
    price: 250,
    stock: 18,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMRpjJMN7MVEbl1s5dt1SwxBEVidO3bVIPQ&s",
  },
  {
    id: 11,
    name: "Jacket",
    price: 1200,
    stock: 25,
    image:
      "https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745027.jpg?semt=ais_rp_progressive&w=740&q=80",
  },
  {
    id: 12,
    name: "Shirts",
    price: 9000,
    stock: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnH69A3DLTEJIVNZTLOPS8-DlagQWP9Oo-w&s",
  },
  {
    id: 13,
    name: "Glasses",
    price: 2200,
    stock: 14,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNswcNXTn14fMOH1fUvf5JXU2Wlbhbzvi7Dg&s",
  },
  {
    id: 14,
    name: "Earrings",
    price: 6000,
    stock: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7toW8CWhOOlbM_jznqVKEF17Ic_L6ebNhKw&s",
  },
  {
    id: 15,
    name: "Watches",
    price: 600,
    stock: 30,
    image:
      "https://m.media-amazon.com/images/I/71mR1c5l70L._AC_UY350_.jpg",
  },
  {
    id: 16,
    name: "Home decor",
    price: 40000,
    stock: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDI1zJk687jhlm7lM3XWzDt5pg-ffNXNobA&s",
  },
  {
    id: 17,
    name: "Car",
    price: 350000,
    stock: 11,
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Jaguar/F-Pace/10644/1755774688332/front-left-side-47.jpg?impolicy=resize&imwidth=480",
  },
  {
    id: 18,
    name: "Cycle",
    price: 2800,
    stock: 13,
    image:
      "https://vescocycles.com/cdn/shop/files/26t-white-downtown-hybrid-cycle-9953852.jpg?v=1758088597",
  },
  {
    id: 19,
    name: "Make up",
    price: 1200,
    stock: 16,
    image:
      "https://img.freepik.com/free-photo/close-up-collection-make-up-beauty-products_23-2148620012.jpg?semt=ais_rp_progressive&w=740&q=80",
  },
  {
    id: 20,
    name: "Drone",
    price: 3200,
    stock: 22,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-PXQX7FT8Y3P_xZpXZFN1hzktZPZLgQcX5Q&s",
  },
];

const getProducts = ()=>{
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    localStorage.setItem(STORAGE_KEY,JSON.stringify(defaultProducts))
    return defaultProducts
    
  }

  return JSON.parse(data)
}

const saveProducts = (products)=>{
  localStorage.setItem(STORAGE_KEY,JSON.stringify(products))
}

export {getProducts,saveProducts}