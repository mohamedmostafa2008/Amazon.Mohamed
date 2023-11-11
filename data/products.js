export function getProduct(productId){
  let matchingProduct;
  products.forEach((product) =>{
      if (product.id === productId){
          matchingProduct=product;
      }
  });
  return matchingProduct;
}
export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07efiwbfuwrug8i",
    image: "images/products/51051FiD9UL._SX522_.jpg",
    name: "PlayStation 5",
    rating: {
      stars: 5,
      count: 2500
    },
    priceCents: 81253,
    keywords: [
      "playstation",
      "ps5",
      "gaming"
    ]
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07efrfgewnru9ighn9ieuro",
    image: "images/products/61uQKdWCfAL._AC_UY327_FMwebp_QL65_.webp",
    name: "PlayStation DualSense Wireless Controller",
    rating: {
      stars: 4.5,
      count: 1500
    },
    priceCents: 6900,
    keywords: [
      "controller",
      "ps5",
      "gaming"
    ]
  },
  {
    id: "e436828ce-6aa0-4b85-b27f-e1d07efrfeorgupogjh9ernjg",
    image: "images/products/71ITKH6K-UL._AC_UY327_FMwebp_QL65_.webp",
    name: "PlayStation PULSE 3D Wireless Headset",
    rating: {
      stars: 4,
      count: 2547
    },
    priceCents: 9895,
    keywords: [
      "headset",
      "ps5",
      "gaming"
    ]
  },
  {
    id: "e4362828ce-6aa0-4b85-b27f-e1d07efrfeorgupogjh9ernjg",
    image: "images/products/61c4Ud7Os4L._AC_UY327_FMwebp_QL65_.webp",
    name: "PS5 Controller Charger Station with Fast Charging AC Adapter 5V/3A, Dual Controller Charging Stand for Playstation 5, Docking Station Replacement for DualSense Charging Station",
    rating: {
      stars: 5,
      count: 1582
    },
    priceCents: 2499,
    keywords: [
      "charger",
      "ps5",
      "gaming"
    ]
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07efrfeorgueig3938uhtg45",
    image: "images/products/51+AvgQs50L._SX522_.jpg",
    name: "Sony PlayStation 4 Pro 1TB Console - Black (PS4 Pro)",
    rating: {
      stars: 5,
      count: 4220
    },
    priceCents: 29498,
    keywords: [
      "ps4",
      "gaming"
    ]
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07efrfeorgupogjh9ernjg",
    image: "images/products/41mCozLA9CL._SY300_SX300_QL70_FMwebp_.webp",
    name: "DualShock 4 Wireless Controller for PlayStation 4 - Jet Black",
    rating: {
      stars: 5,
      count: 3562
    },
    priceCents: 5999,
    keywords: [
      "controller",
      "ps4",
      "gaming"
    ]
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07efrfeorguei9nrgug",
    image: "images/products/81kIDX6q9fL._AC_UL160_SR160,160_.jpg",
    name: "FIFA 23 Standard Edition Playstation 5 (PS5)| English | Import Region Free",
    rating: {
      stars: 4.5,
      count: 1222
    },
    priceCents: 4098,
    keywords: [
      "Fifa 23",
      "gaming"
    ]
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07efrfeorgueiggjmoerh9ni46",
    image: "images/products/51EEvvzNOJL._SX300_SY300_QL70_FMwebp_.webp",
    name: "Marvel's Spider-Man: Miles Morales Ultimate Edition - PlayStation 5",
    rating: {
      stars: 4.5,
      count: 2650
    },
    priceCents: 4257,
    keywords: [
      "spider man",
      "gaming"
    ]
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07efrfeorgueigge4t94iu5t4",
    image: "images/products/81Pagnfx1DL._AC_UL160_SR160,160_.jpg",
    name: "God of War Ragnarök - PlayStation 5",
    rating: {
      stars: 5,
      count: 1968
    },
    priceCents: 6766,
    keywords: [
      "God of war",
      "gaming"
    ]
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07efrfeorguei84e4t94iu5t4",
    image: "images/products/81RVOixdJCL._AC_UY327_FMwebp_QL65_.webp",
    name: "Grand Theft Auto V",
    rating: {
      stars: 5,
      count: 1255
    },
    priceCents: 3350,
    keywords: [
      "GTA V",
      "gaming"
    ]
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07efrfeorgk0-i84e4t94iu5t4",
    image: "images/products/912YUVcMLjL._AC_UY327_FMwebp_QL65_.jpg",
    name: "Call of Duty: Modern Warfare II - PlayStation 5",
    rating: {
      stars: 5,
      count: 1698
    },
    priceCents: 4799,
    keywords: [
      "call of duty",
      "gaming"
    ]
  },
  {
    id: "e43638ce-6aa0-4b85-b279oie1d07efrfeorgk0-i84e4t94iu5t4",
    image: "images/products/81VGpLvXQuL._AC_UY327_FMwebp_QL65_.webp",
    name: "MARVEL’S SPIDER-MAN 2 – PS5 Launch Edition",
    rating: {
      stars: 4.5,
      count: 2518
    },
    priceCents: 6900,
    keywords: [
      "spiderman",
      "gaming"
    ]
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07efrfeorewrg8349g",
    image: "images/products/21sdyqUxkKL._SX300_SY300_QL70_FMwebp_.webp",
    name: "Xbox Series X",
    rating: {
      stars: 5,
      count: 1691
    },
    priceCents: 43999,
    keywords: [
      "xbox",
      "gaming"
    ]
  },
  {
    id: "e365638ce-6aa0-4b85-b27f-e1d07efrfeorewrg8349g",
    image: "images/products/61rz+BgGJNS._AC_UY327_FMwebp_QL65_.webp",
    name: "Xbox Series S",
    rating: {
      stars: 4,
      count: 2582
    },
    priceCents: 33690,
    keywords: [
      "xbox",
      "gaming"
    ]
  },
  {
    id: "e365638ce-6aa0-4b85-bfff-e1d07efrfeorewrg8349g",
    image: "images/products/613bi6ajL6L.__AC_SY300_SX300_QL70_FMwebp_.webp",
    name: "Xbox One S (Renewed)",
    rating: {
      stars: 5,
      count: 2892
    },
    priceCents: 31500,
    keywords: [
      "xbox",
      "gaming"
    ]
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07efrfeorewef3uh",
    image: "images/products/31cRv25ICvL._SX300_SY300_QL70_FMwebp_.webp",
    name: "Xbox Core Wireless Controller, Robot White, Xbox Series X|S, Xbox One, and Windows Devices",
    rating: {
      stars: 4,
      count: 1195
    },
    priceCents: 5695,
    keywords: [
      "xbox",
      "controller",
      "gaming"
    ]
  },
  {
    id: "e43fff638ce-6aa0-4b85-b27f-e1d07efrfeorewef3uh",
    image: "images/products/61YNiiJizXL._AC_UY327_FMwebp_QL65_.webp",
    name: "Xbox Core Wireless Controller – Carbon Black",
    rating: {
      stars: 5,
      count: 1258
    },
    priceCents: 5290,
    keywords: [
      "xbox",
      "controller",
      "gaming"
    ]
  },
  {
    id: "e4325f638ce-6aa0-4b85-b27f-e1d07efrfeorewef3uh",
    image: "images/products/71TXJZP5c-L._AC_UY327_FMwebp_QL65_.webp",
    name: "OIVO XSX Controller Charger Station with 2 Packs 3360mWh Rechargeable Battery for Xbox Series X/S/One/Elite/Core Controller, USB Charging Dock with 4 Packs Covers",
    rating: {
      stars: 5,
      count: 2547
    },
    priceCents: 2499,
    keywords: [
      "xbox",
      "charger",
      "gaming"
    ]
  },
  {
    id: "e43n8uf638ce-6aa0-4b85-b27f-e1d07efrfeorewef3uh",
    image: "images/products/61jy0Nf4Z3L._AC_UY327_FMwebp_QL65_.webp",
    name: "EA SPORTS FC 24 - STANDARD EDITION (X1+XSX) - Xbox [Digital Code]",
    rating: {
      stars: 5,
      count: 3584
    },
    priceCents: 6999,
    keywords: [
      "xbox",
      "Ea Fc",
      "gaming"
    ]
  },
  {
    id: "e43k98uf638ce-6aa0-4b85-b27f-e1d07efrfeorewef3uh",
    image: "images/products/81kOMgJyDHL._AC_UY327_FMwebp_QL65_.webp",
    name: "Halo Infinite - Xbox Series X",
    rating: {
      stars: 4,
      count: 1528
    },
    priceCents: 4214,
    keywords: [
      "xbox",
      "halo",
      "gaming"
    ]
  },
  {
    id: "e69k98uf638ce-6aa0-4b85-b27f-e1d07efrfeorewef3uh",
    image: "images/products/81CLXU4bElL._AC_UY327_FMwebp_QL65_.webp",
    name: "Starfield: Standard Edition - Xbox Series X",
    rating: {
      stars: 3.5,
      count: 1284
    },
    priceCents: 6401,
    keywords: [
      "xbox",
      "starfield",
      "gaming"
    ]
  },
  {
    id: "e69kf8uf638ce-6aa0-4b85-b27f-e1d07efrfeorewef3uh",
    image: "images/products/71B5cXKcbJL._AC_UY327_FMwebp_QL65_.webp",
    name: "Call of Duty: Modern Warfare III - Cross-Gen Bundle - PRE-PURCHASE - Xbox [Digital Code]",
    rating: {
      stars: 5,
      count: 2548
    },
    priceCents: 6999,
    keywords: [
      "xbox",
      "call of duty",
      "gaming"
    ]
  },
  {
    id: "e69bnuj8uf638ce-6aa0-4b85-b27f-e1d07efrfeorewef3uh",
    image: "images/products/71tFD1bbxjL._AC_UY327_FMwebp_QL65_.webp",
    name: "Hogwarts Legacy: Standard Edition - Xbox One [Digital Code]",
    rating: {
      stars: 5,
      count: 3254
    },
    priceCents: 5999,
    keywords: [
      "xbox",
      "hogwarts",
      "gaming"
    ]
  },
  {
    id: "e69bnuj8uf638ce-6aa0-4lk95-b27f-e1d07efrfeorewef3uh",
    image: "images/products/81DmIVO1u3L._AC_UY327_FMwebp_QL65_.webp",
    name: "NBA 2K24 Kobe Bryant Edition - Xbox One",
    rating: {
      stars: 4.5,
      count: 1254
    },
    priceCents: 3999,
    keywords: [
      "xbox",
      "NBA2K",
      "gaming"
    ]
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07efrfef76tf7",
    image: "images/products/51xiCpbirGL._AC_SX679_.jpg",
    name: "Apple iPhone 14 Pro, 256GB, Silver - Unlocked (Renewed)",
    rating: {
      stars: 4.5,
      count: 452
    },
    priceCents: 89430,
    keywords: [
      "apple",
      "iphone 14 pro max"
    ]
  },
  {
    id: "e254638ce-6aa0-4b85-b27f-e1d07efrfef76tf7",
    image: "images/products/41bIlvE1rdL._AC_UY327_FMwebp_QL65_.webp",
    name: "Apple iPhone 12, 64GB, Black - Fully Unlocked (Renewed)",
    rating: {
      stars: 5,
      count: 2547
    },
    priceCents: 31000,
    keywords: [
      "apple",
      "iphone 12"
    ]
  },
  {
    id: "e2552438ce-6aa0-4b85-b27f-e1d07efrfef76tf7",
    image: "images/products/61M5w4HMIJL._AC_UY327_FMwebp_QL65_.webp",
    name: "Apple iPhone 12 Mini, 64GB, Blue - Unlocked (Renewed)",
    rating: {
      stars: 4,
      count: 1247
    },
    priceCents: 29284,
    keywords: [
      "apple",
      "iphone 12 mini"
    ]
  },
  {
    id: "e25kj8u38ce-6aa0-4b85-b27f-e1d07efrfef76tf7",
    image: "images/products/61eDXs9QFNL.__AC_SX300_SY300_QL70_FMwebp_.webp",
    name: "iPhone 13 Pro, 256GB, Graphite - Unlocked (Renewed Premium)",
    rating: {
      stars: 4,
      count: 3214
    },
    priceCents: 77834,
    keywords: [
      "apple",
      "iphone 13 pro max"
    ]
  },
  {
    id: "e252548u38ce-6aa0-4b85-b27f-e1d07efrfef76tf7",
    image: "images/products/6143ykh8CGL._AC_UY327_FMwebp_QL65_.webp",
    name: "Apple iPhone SE 3rd Gen, 64GB, Midnight - Unlocked (Renewed)",
    rating: {
      stars: 5,
      count: 1459
    },
    priceCents: 26999,
    keywords: [
      "apple",
      "iphone SE"
    ]
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07fg87gut",
    image: "images/products/71j9N0Zr6vL._AC_UY327_FMwebp_QL65_.webp",
    name: "ESR for iPhone 14 Pro Max Case, Compatible with MagSafe, Shockproof Military-Grade Protection, Yellowing Resistant, Magnetic Classic Hybrid Case (HaloLock), Clear",
    rating: {
      stars: 5,
      count: 642
    },
    priceCents: 2099,
    keywords: [
      "apple",
      "iphone 14 pro max",
      "case"
    ]
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07fg87rg45y",
    image: "images/products/81q7NndDVuL._AC_SX522_.jpg",
    name: "Apple Watch Series 9 [GPS 41mm] Smartwatch with Midnight Aluminum Case with Midnight Sport Loop. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Carbon Neutral",
    rating: {
      stars: 4.5,
      count: 1248
    },
    priceCents: 39900,
    keywords: [
      "apple",
      "apple watch"
    ]
  },
  {
    id: "e425438ce-6aa0-4b85-b27f-e1d07fg87rg45y",
    image: "images/products/71DfMwITnaL._AC_UY327_FMwebp_QL65_.webp",
    name: "Apple Watch Series 8 [GPS 41mm] Smart Watch w/ (Product) RED Aluminum Case with (Product) RED Sport Band - M/L. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant",
    rating: {
      stars: 5,
      count: 2145
    },
    priceCents: 29999,
    keywords: [
      "apple",
      "apple watch"
    ]
  },
  {
    id: "e4254245ce-6aa0-4b85-b27f-e1d07fg87rg45y",
    image: "images/products/61HDIQ+CmeL._AC_UY327_FMwebp_QL65_.webp",
    name: "Apple Watch SE (2nd Gen) [GPS + Cellular 40mm] Smartwatch with Midnight Aluminum Case with Midnight Sport Band S/M. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor",
    rating: {
      stars: 3.5,
      count: 2258
    },
    priceCents: 24999,
    keywords: [
      "apple",
      "apple watch"
    ]
  },
  {
    id: "eefkj89638ce-6aa0-4b85-b27f-e1d07fg87gr4yth6ty",
    image: "images/products/41Kz9H3v0yL.__AC_SX342_SY445_QL70_FMwebp_.webp",
    name: "Apple AirPods with Charging Case (Previous Model)",
    rating: {
      stars: 5,
      count: 1852
    },
    priceCents: 15900,
    keywords: [
      "apple",
      "apple airpods"
    ]
  },
  {
    id: "ee565kj89638ce-6aa0-4b85-b27f-e1d07fg87gr4yth6ty",
    image: "images/products/71lj9Fdeq0L.__AC_SX300_SY300_QL70_FMwebp_.webp",
    name: "Apple AirPods Pro - 1st Gen (Renewed)",
    rating: {
      stars: 4.5,
      count: 1852
    },
    priceCents: 25300,
    keywords: [
      "apple",
      "apple airpods"
    ]
  },
  {
    id: "ee565k294638ce-6aa0-4b85-b27f-e1d07fg87gr4yth6ty",
    image: "images/products/61jcsHsFN8L.__AC_SY445_SX342_QL70_FMwebp_.webp",
    name: "Apple AirPods (3rd Generation) Wireless Ear Buds, Bluetooth Headphones, Personalized Spatial Audio, Sweat and Water Resistant, Lightning Charging Case Included, Up to 30 Hours of Battery Life",
    rating: {
      stars: 5,
      count: 2811
    },
    priceCents: 33900,
    keywords: [
      "apple",
      "apple airpods"
    ]
  },
  {
    id: "diur65k294638ce-6aa0-4b85-b27f-e1d07fg87gr4yth6ty",
    image: "images/products/718LuUVEOZL.__AC_SX300_SY300_QL70_FMwebp_.webp",
    name: "SAMSUNG Galaxy S23 Ultra Cell Phone, Factory Unlocked Android Smartphone, 256GB, 200MP Camera, Night Mode, Long Battery Life, S Pen, US Version, 2023, Lavender",
    rating: {
      stars: 5,
      count: 3618
    },
    priceCents: 119999,
    keywords: [
      "android",
      "samsung",
      "samsung galaxy s23 ultra"
    ]
  },
  {
    id: "diur65k294638ce-6a-0jtt0544b85-b27f-e1d07fg87gr4yth6ty",
    image: "images/products/81fRAoUL-fL.__AC_SX300_SY300_QL70_FMwebp_.webp",
    name: "OnePlus 11 5G | 16GB RAM+256GB | Dual-SIM | Titan Black | US Factory Unlocked Android Smartphone | 5000 mAh battery | 80W Fast charging | Hasselblad Camera | 120Hz Fluid Display | 4nm Processor",
    rating: {
      stars: 4,
      count: 289
    },
    priceCents: 79999,
    keywords: [
      "android",
      "oneplus"
    ]
  },
  {
    id: "dj9r65k294638ce-6a-0jtt0544b85-b27f-e1d07fg87gr4yth6ty",
    image: "images/products/71QmFJCJ-ML._AC_SX679_.jpg",
    name: "Oppo Find X5 Pro 5G Dual 256GB ROM 12GB RAM Factory Unlocked (GSM Only | No CDMA - not Compatible with Verizon/Sprint) China Version | No Google Play Installed Mobile Cell Phone - White",
    rating: {
      stars: 4.5,
      count: 258
    },
    priceCents: 87000,
    keywords: [
      "android",
      "oppo"
    ]
  },
  {
    id: "dj9r65iu8g4638ce-6a-0jtt0544b85-b27f-e1d07fg87gr4yth6ty",
    image: "images/products/51O609vwqsL.__AC_SX300_SY300_QL70_FMwebp_.webp",
    name: "Xiaomi Redmi Note 12 Pro 4G (256GB + 8GB) Factory Global Unlocked 6.67 108MP Pro Triple Camera (Tmobile/Tello/Mint USA Market) + Extra (Fast 33w Dual Car Charger) (Graphite Gray (Global))",
    rating: {
      stars: 4,
      count: 368
    },
    priceCents: 23400,
    keywords: [
      "android",
      "xiaomi"
    ]
  },
  {
    id: "dj9rffgjiu8g4638ce-6a-0jtt0544b85-b27f-e1d07fg87gr4yth6ty",
    image: "images/products/61IqkfGCw5L.__AC_SX300_SY300_QL70_FMwebp_.webp",
    name: "SAMSUNG Galaxy Z Flip 5 Cell Phone, Factory Unlocked Android Smartphone, 256GB, Compact, Foldable Design, One-Hand Control, Best Selfies, Full Cover Screen, Hands-Free Use, US Version, 2023, Lavender",
    rating: {
      stars: 5,
      count: 254
    },
    priceCents: 89999,
    keywords: [
      "android",
      "samsung"
    ]
  },
  {
    id: "douu9rffgjiu8g4638ce-6a-0jtt0544b85-b27f-e1d07fg87gr4yth6ty",
    image: "images/products/81rCIc3xUhL._AC_SX466_.jpg",
    name: "SAMSUNG Galaxy Z Fold 4 Cell Phone, Factory Unlocked Android Smartphone, 256GB, Flex Mode, Hands Free Video, Multi Window View, Foldable Display, S Pen Compatible, US Version, 2022, Gray Green",
    rating: {
      stars: 5,
      count: 126
    },
    priceCents: 179999,
    keywords: [
      "android",
      "samsung"
    ]
  }
];