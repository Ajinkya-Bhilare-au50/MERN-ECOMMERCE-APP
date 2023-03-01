const products = [
  {
    name: "Airpods Wireless Bluetooth Headphones",
    image: "/images/airpods.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    countInStock: 3,
    rating: 4,
    numReviews: 45,
  },
  {
    name: "Fitbit Charge 5",
    image: "/images/fitbit.jpg",
    description:
      "Advanced health and fitness tracking features, including skin temperature, heart rate, and sleep monitoring Built-in GPS for accurate outdoor exercise tracking Slim design with a bright, high-resolution touchscreen",
    brand: "Fitbit",
    category: "Electronics",
    price: 179.99,
    countInStock: 8,
    rating: 5,
    numReviews: 75,
  },

  {
    name: "GoPro HERO10 Black",
    image: "/images/gopro.jpg",
    description:
      "High-quality 5.3K video recording and 23MP photo capture for stunning visuals HyperSmooth 4.0 technology provides stable footage in any situation Waterproof design for use in any environment",
    brand: "GoPro",
    category: "Electronics",
    price: 499.99,
    countInStock: 2,
    rating: 4,
    numReviews: 77,
  },
  {
    name: "Beats Solo Pro Wireless Noise Cancelling Headphones",
    image: "/images/beats.jpg",
    description:
      "Active noise cancelling technology blocks out external noise and distractions High-quality audio with deep bass and clear vocals Hands-free controls with Siri voice commands",
    brand: "Beats",
    category: "Electronics",
    price: 299.99,
    countInStock: 5,
    rating: 5,
    numReviews: 39,
  },

  {
    name: "Bose QuietComfort 35 II Wireless Headphones",
    image: "/images/bose.jpg",
    description:
      "Active noise cancelling technology reduces ambient noise for a peaceful listening experience Alexa voice control allows you to manage music, calls and more Premium sound quality with deep bass and clear treble",
    brand: "Bose",
    category: "Electronics",
    price: 249.99,
    countInStock: 2,
    rating: 2,
    numReviews: 66,
  },

  {
    name: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    image: "/images/sony.jpg",
    description:
      "Industry-leading noise cancellation technology adapts to your environment for personalized listening Premium audio quality with rich bass and clear treble Touch controls and built-in voice assistant for easy navigation",
    brand: "Sony",
    category: "Electronics",
    price: 349.99,
    countInStock: 7,
    rating: 3,
    numReviews: 26,
  },

  {
    name: "JBL Flip 5 Waterproof Portable Bluetooth Speaker",
    image: "/images/jbl.jpg",
    description:
      "Waterproof design makes it perfect for outdoor activities and pool parties High-quality audio with deep bass and clear vocals Bluetooth connectivity allows for easy wireless pairing with compatible devices",
    brand: "JBL",
    category: "Electronics",
    price: 129.99,
    countInStock: 4,
    rating: 2,
    numReviews: 17,
  },

  {
    name: "Samsung Galaxy Buds Pro Wireless Earbuds",
    image: "/images/samsung.jpg",
    description:
      "Active noise cancelling technology reduces external noise for a clear listening experience Crystal-clear audio with rich bass and bright treble Hands-free voice control with Bixby and Alexa",
    brand: "Samsung",
    category: "Electronics",
    price: 199.99,
    countInStock: 6,
    rating: 4,
    numReviews: 75,
  },

  {
    name: "Sennheiser Momentum True Wireless 2 Earbuds",
    image: "/images/sennheiser.jpg",
    description:
      "Premium audio quality with deep bass and clear treble Active noise cancelling technology reduces ambient noise for a peaceful listening experience Intuitive touch controls and voice assistant integration for easy navigation",
    brand: "Sennheiser",
    category: "Electronics",
    price: 299.99,
    countInStock: 2,
    rating: 1,
    numReviews: 39,
  },

  {
    name: "Canon EOS R6 Mirrorless Camera",
    image: "/images/canon.jpg",
    description:
      "Advanced autofocus system and image stabilization for sharp, clear photos and video 20.1MP full-frame sensor for stunning image quality Built-in Wi-Fi and Bluetooth for easy sharing and remote control",
    brand: "Canon",
    category: "Electronics",
    price: 2499.99,
    countInStock: 1,
    rating: 2,
    numReviews: 26,
  },

  {
    name: "Nintendo Switch OLED Model",
    image: "/images/nintendo-switch.jpg",
    description:
      "Vibrant 7-inch OLED screen for a stunning gaming experience Dockable console for seamless play on the TV or on-the-go Advanced Joy-Con controllers for immersive gameplay",
    brand: "Nintendo",
    category: "Electronics",
    price: 349.99,
    countInStock: 5,
    rating: 4,
    numReviews: 35,
  },

  {
    name: "Xbox Series X",
    image: "/images/xbox.jpg",
    description:
      "Powerful gaming console with lightning-fast load times and stunning graphics 4K Ultra HD Blu-ray player for immersive entertainment Smart Delivery ensures that you play the best version of every game",
    brand: "Microsoft",
    category: "Electronics",
    price: 499.99,
    countInStock: 3,
    rating: 5,
    numReviews: 45,
  },

  {
    name: "PlayStation 5",
    image: "/images/playstation.jpg",
    description:
      "Next-generation gaming console with lightning-fast load times and stunning graphics DualSense wireless controller with haptic feedback and adaptive triggers for immersive gameplay 4K Ultra HD Blu-ray player for immersive entertainment",
    brand: "Sony",
    category: "Electronics",
    price: 499.99,
    countInStock: 4,
    rating: 4,
    numReviews: 10,
  },

  {
    name: "LG C1 55-inch OLED TV",
    image: "/images/lg-tv.jpg",
    description:
      "Stunning OLED display with perfect blacks and vibrant colors Advanced image processing for smooth motion and realistic visuals Dolby Vision IQ and Dolby Atmos for a cinematic audiovisual experience",
    brand: "LG",
    category: "Electronics",
    price: 1799.99,
    countInStock: 2,
    rating: 3,
    numReviews: 14,
  },

  {
    name: "iPhone 11 Pro 256GB Memory",
    image: "/images/phone.jpg",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 48,
    rating: 2,
    numReviews: 25,
  },
  {
    name: "Cannon EOS 80D DSLR Camera",
    image: "/images/camera.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 0,
    rating: 3,
    numReviews: 95,
  },
  {
    name: "Sony Playstation 4 Pro White Version",
    image: "/images/playstation.jpg",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 10,
    rating: 4,
    numReviews: 72,
  },
  {
    name: "Logitech G-Series Gaming Mouse",
    image: "/images/mouse.jpg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 4,
    numReviews: 58,
  },
  {
    name: "Amazon Echo Dot 3rd Generation",
    image: "/images/alexa.jpg",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 3,
    numReviews: 49,
  },
];

export default products;
