import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    iphones: [
      {
        id: 1,
        productName: "iPhone 15 Pro",
        description: "From $999 or $41.62/mo. for 24 mo.*",
        price: 999.0,
        param: "iphone-15-pro",
        productImage: "/images/iphones/iphone15pro.png",
        productImage1: "/images/iphones/iphone15pro_detail_1.png",
        productImage2: "/images/iphones/iphone15pro_detail_2.png",
        productImage3: "/images/iphones/iphone15pro_detail_3.png",
        productImage4: "/images/iphones/iphone15pro_detail_4.png",
        text1:
          "6.1-inch Super Retina XDR display footnote ¹ featuring ProMotion, Always-On, and Dynamic Island",
        text2:
          "Strong and light titanium design with Action button — a fast track to your favorite feature",
        text3:
          "48MP Main camera for super-high-resolution photos and 3x Telephoto camera",
        text4:
          "A17 Pro chip delivers a massive leap in graphics performance, transforming mobile gaming",
        text5:
          "USB-C connector with USB 3 for up to 20x faster transfer speeds footnote ² and new pro workflows",
      },

      {
        id: 2,
        productName: "iPhone 15",
        description: "From $799 or $33.29/mo. for 24 mo.*",
        price: 799.0,
        param: "iphone-15",
        productImage: "/images/iphones/iphone15.png",
        productImage1: "/images/iphones/iphone15_detail_1.png",
        productImage2: "/images/iphones/iphone15_detail_2.png",
        productImage3: "/images/iphones/iphone15_detail_3.png",
        productImage4: "/images/iphones/iphone15_detail_4.png",
        text1:
          "6.1-inch durable color-infused glass and aluminum design footnote with Ceramic Shield front",
        text2:
          "Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else",
        text3:
          "48MP Main camera with 2x Telephoto captures breathtaking detail up close or far away",
        text4:
          "A16 Bionic powers computational photography and smooth gaming performance with great efficiency for all-day battery life",
        text5: "Connect and charge with USB-C",
      },
      {
        id: 3,
        productName: "iPhone 14",
        description: "From $699 or $29.12/mo. for 24 mo.*",
        price: 799.0,
        param: "iphone-14",
        productImage: "/images/iphones/iphone14.png",
        productImage1: "/images/iphones/iphone14_detail_1.png",
        productImage2: "/images/iphones/iphone14_detail_2.png",
        productImage3: "/images/iphones/iphone14_detail_3.png",
        productImage4: "/images/iphones/iphone14_detail_4.png",
        text1:
          "6.1-inch durable design footnote 1 with Ceramic Shield and water and dust resistance",
        text2: "All-day battery life with up to 20 hours of video playback",
        text3:
          "Vital safety features like Roadside Assistance via satellite, footnote 3 Emergency SOS via satellite, footnote 3 and Crash Detection footnote ",
        text4:
          "A Pro-level Main camera and advanced image processing for sensational shots in all kinds of light",
        text5: "A15 Bionic, the same superspeedy chip that’s in iPhone 13 Pro",
      },
      {
        id: 4,
        productName: "iPhone 13",
        description: "From $599 or $24.95/mo. for 24 mo.*",
        price: 799.0,
        param: "iphone-13",
        productImage: "/images/iphones/iphone13.png",
        productImage1: "/images/iphones/iphone13_detail_1.png",
        productImage2: "/images/iphones/iphone13_detail_2.png",
        productImage3: "/images/iphones/iphone13_detail_3.png",
        productImage4: "/images/iphones/iphone13_detail_4.png",
        text1: "6.1-inch Super Retina XDR display footnote ",
        text2: "Dual-camera system for incredible low-light photos and videos",
        text3: "A15 Bionic with 4-core GPU for lightning-fast performance",
        text4: "Ceramic Shield, and water and dust resistance",
        text5: "5G for superfast downloads and high-quality streaming",
      },
      {
        id: 5,
        productName: "iPhone SE",
        description: "From $599 or $24.95/mo. for 24 mo.*",
        price: 799.0,
        param: "iphone-se",
        productImage: "/images/iphones/iphonese.png",
        productImage1: "/images/iphones/iphonese_detail_1.png",
        productImage2: "/images/iphones/iphonese_detail_2.png",
        productImage3: "/images/iphones/iphonese_detail_3.png",
        productImage4: "/images/iphones/iphonese_detail_4.png",
        text1:
          "4.7-inch Retina HD display footnote ¹ that’s bright, colorful, and sharp",
        text2: "A15 Bionic, the same superpowerful chip that’s in iPhone 13",
        text3: "5G for fast downloads and high-quality streaming footnote",
        text4:
          "Smarter camera makes automatic adjustments so faces, places, everything looks fabulous",
        text5:
          "Home button with Touch ID — securely unlock, sign in to apps, and use Apple Pay",
      },
    ],
  },
  {
    ipads: [
      {
        id: 6,
        productName: "iPad Pro",
        description: "From $999 or $83.25/mo. for 12 mo.*",
        price: 999.0,
        param: "ipad-pro",
        productImage: "/images/ipads/ipad_pro.png",
        productImage1: "/images/ipads/ipad_pro_detail_1.png",
        productImage2: "/images/ipads/ipad_pro_detail_2.png",
        productImage3: "/images/ipads/ipad_pro_detail_3.png",
        productImage4: "/images/ipads/ipad_pro_detail_4.png",
        text1:
          "Apple M2 chip powers a huge leap in performance and all-day battery life",
        text2:
          "Liquid Retina display delivers a stunning, immersive viewing experience",
        text3:
          "Landscape 12MP Ultra Wide front camera with Center Stage for a great video calling experience",
        text4:
          "Stay connected with Wi-Fi 6E and 5G for superfast downloads and high-quality streaming",
        text5:
          "Compatible with Apple Pencil Pro, Apple Pencil (USB-C), Magic Keyboard, and Smart Folio",
      },
      {
        id: 7,
        productName: "iPad Air",
        description: "From $599 or $49.91/mo. for 12 mo.*",
        price: 599.0,
        param: "ipad-air",
        productImage: "/images/ipads/ipad_air.png",
        productImage1: "/images/ipads/ipad_air_detail_1.png",
        productImage2: "/images/ipads/ipad_air_detail_2.png",
        productImage3: "/images/ipads/ipad_air_detail_3.png",
        productImage4: "/images/ipads/ipad_air_detail_4.png",
        text1:
          "Apple M2 chip powers a huge leap in performance and all-day battery life",
        text2:
          "Liquid Retina display delivers a stunning, immersive viewing experience",
        text3:
          "Landscape 12MP Ultra Wide front camera with Center Stage for a great video calling experience",
        text4:
          "Stay connected with Wi-Fi 6E and 5G for superfast downloads and high-quality streaming",
        text5:
          "Compatible with Apple Pencil Pro, Apple Pencil (USB-C), Magic Keyboard, and Smart Folio",
      },
      {
        id: 8,
        productName: "iPad",
        description: "From $349 or $29.08/mo. for 12 mo.*",
        price: 349.0,
        param: "ipad",
        productImage: "/images/ipads/ipad_10th_gen.png",
        productImage1: "/images/ipads/ipad_10th_detail_1.png",
        productImage2: "/images/ipads/ipad_10th_detail_2.png",
        productImage3: "/images/ipads/ipad_10th_detail_3.png",
        productImage4: "/images/ipads/ipad_10th_detail_4.png",
        text1:
          "The A14 Bionic chip lets you run multiple apps and work smoothly between them",
        text2:
          "All-screen design with 10.9-inch Liquid Retina display¹ delivers an amazing viewing experience",
        text3:
          "Landscape 12MP Ultra Wide front camera with Center Stage for a great video calling experience",
        text4: "Stay connected with fast Wi‑Fi 6 and 5G wireless",
        text5:
          "Compatible with Apple Pencil (USB‑C), Apple Pencil (1st generation),³ Magic Keyboard Folio, and Smart Folio",
      },
      {
        id: 9,
        productName: "iPad mini",
        description: "From $449 or $41.58/mo. for 12 mo.*",
        price: 449.0,
        param: "ipad-mini",
        productImage: "/images/ipads/ipad_mini.png",
        productImage1: "/images/ipads/ipad_mini_detail_1.png",
        productImage2: "/images/ipads/ipad_mini_detail_2.png",
        productImage3: "/images/ipads/ipad_mini_detail_3.png",
        productImage4: "/images/ipads/ipad_mini_detail_4.png",
        text1:
          "A15 Bionic chip for incredible performance and all-day battery life",
        text2:
          "Stunning 8.3-inch Liquid Retina display with True Tone and P3 wide color  ",
        text3:
          "12MP Ultra Wide front camera with Center Stage for great video calls",
        text4: "Stay connected with fast Wi‑Fi 6 and 5G wireless",
        text5:
          "Compatible with Apple Pencil (2nd generation), Apple Pencil (USB-C), and Smart Folio",
      },
    ],
  },
  {
    macbooks: [
      {
        id: 10,
        productName: "MacBook Air",
        description: "From $999 or $83.25/mo. for 12 mo.*",
        price: 999.0,
        param: "macbook-air-m3",
        productImage: "/images/computers/macbook_air_13_m2.png",
        productImage1: "/images/computers/mba13_detail_1.png",
        productImage2: "/images/computers/mba13_detail_2.png",
        productImage3: "/images/computers/mba13_detail_3.png",
        productImage4: "/images/computers/mba13_detail_4.png",
        text1:
          "Portable design — Lightweight and under half an inch thin, so you can take MacBook Air anywhere you go.",
        text2:
          "Get more done faster — The powerful 8-core CPU and up to 10-core GPU of the Apple M2 chip keep things running smoothly.",
        text3:
          "Up to 18 hours of battery life — Amazing, all-day battery life so you can leave the power adapter at home.",
        text4:
          "A brilliant display — The 13.6-inch Liquid Retina display supports 1 billion colors. ",
        text5:
          "Look sharp, sound great — Everything looks and sounds amazing with a 1080p FaceTime HD camera, three mics, and four speakers with Spatial Audio.",
      },
      {
        id: 11,
        productName: "MacBook Pro",
        description: "From $1599 or $133.25/mo. for 12 mo.*",
        price: 1599.0,
        param: "macbook-pro",
        productImage: "/images/computers/macbook_pro_14.png",
        productImage1: "/images/computers/mbp_detail_1.png",
        productImage2: "/images/computers/mbp_detail_2.png",
        productImage3: "/images/computers/mbp_detail_3.png",
        productImage4: "/images/computers/mbp_detail_4.png",
        text1:
          "With M3, M3 Pro, or M3 Max, our most advanced chips for personal computers, MacBook Pro empowers you to take on the most demanding projects",
        text2: "Go all day with up to 22 hours of battery life",
        text3:
          "Liquid Retina XDR display is the best ever in a laptop, with Extreme Dynamic Range, incredible contrast, and true-to-life colors",
        text4:
          "Look sharp and sound clear — anywhere — with the 1080p FaceTime HD camera, three studio-quality mics, and six speakers with Spatial Audio",
        text5:
          "Connect everything you need with up to three Thunderbolt 4 ports, an SDXC card slot, an HDMI port, a MagSafe 3 port, and a headphone jack",
      },
      {
        id: 12,
        productName: "iMac",
        description: "From $1299 or $108.25/mo. for 12 mo.*",
        price: 1299.0,
        param: "imac",
        productImage: "/images/computers/imac.png",
        productImage1: "/images/computers/imac_detail_1.png",
        productImage2: "/images/computers/imac_detail_2.png",
        productImage3: "/images/computers/imac_detail_3.png",
        productImage4: "/images/computers/imac_detail_2.png",
        text1:
          "Supercharged by the Apple M3 chip, so everything you do on your iMac is incredibly fast and responsive",
        text2: "Immersive 24-inch 4.5K Retina display",
        text3: "Strikingly thin all-in-one desktop in seven vibrant colors",
        text4:
          "Look sharp and sound great with the 1080p FaceTime HD camera, three-mic array, and six-speaker sound system with Spatial Audio",
        text5: "Color-matched Magic Mouse and Magic Keyboard included",
      },
      {
        id: 13,
        productName: "Mac Studio",
        description: "From $1999 or $166.58/mo. for 12 mo.*",
        price: 1999.0,
        param: "mac-studio",
        productImage: "/images/computers/mac-studio.png",
        productImage1: "/images/computers/mac_studio_detail_1.png",
        productImage2: "/images/computers/mac_studio_detail_2.png",
        productImage3: "/images/computers/mac_studio_detail_3.png",
        productImage4: "/images/computers/mac_studio_detail_1.png",
        text1:
          "Supercharged by the M2 Max or M2 Ultra chip — our most powerful chips yet",
        text2:
          "A wide array of high-performance ports allows you to build the studio of your dreams",
        text3: "Stunningly compact design fits right on your desk",
        text4: "Pairs perfectly with Studio Display — or up to eight displays",
        text5:
          "Get more done faster — The powerful 8-core CPU and up to 10-core GPU of the Apple M2 chip keep things running smoothly.",
      },
      {
        id: 14,
        productName: "Mac mini",
        description: "From $599 or $49.91/mo. for 12 mo.*",
        price: 599.0,
        param: "mac-mini",
        productImage: "/images/computers/mac-mini.png",
        productImage1: "/images/computers/mac_mini_detail_1.png",
        productImage2: "/images/computers/mac_mini_detail_2.png",
        productImage3: "/images/computers/mac_mini_detail_3.png",
        productImage4: "/images/computers/mac_mini_detail_1.png",
        text1:
          "Do more and do it faster with the next-generation M2 or M2 Pro chip",
        text2:
          "Mac mini turns any desk into a powerful workstation, so you can create, code and collaborate",
        text3:
          "Customize your setup using Mac mini’s two or four Thunderbolt 4 ports, two USB-A ports, HDMI, and Gigabit Ethernet",
        text4: "Complete your system with Studio Display and Magic accessories",
        text5:
          "Get more done faster — The powerful 8-core CPU and up to 10-core GPU of the Apple M2 chip keep things running smoothly.",
      },
      {
        id: 15,
        productName: "Mac Pro",
        description: "From $6999 or $583.25/mo. for 12 mo.*",
        price: 6999.0,
        param: "mac-pro",
        productImage: "/images/computers/mac-pro-desktop.jpg",
        productImage1: "/images/computers/mac_pro_details_1.png",
        productImage2: "/images/computers/mac_pro_details_2.png",
        productImage3: "/images/computers/mac_pro_details_3.png",
        productImage4: "/images/computers/mac_pro_details_4.png",
        text1: "Supercharged by M2 Ultra, our most powerful and capable chip",
        text2:
          "PCIe gen 4 expansion slots provide up to twice the bandwidth for specialized workflows",
        text3:
          "Connect all your accessories with high-performance I/O, including eight Thunderbolt 4, two HDMI, and two 10Gb Ethernet ports",
        text4: "Runs cool and quiet, even under intensive workloads",
        text5:
          "Comes with Magic accessories. Complete your setup with Pro Display XDR.",
      },
      {
        id: 16,
        productName: "Pro Display XDR",
        description: "From $4999 or $416.58/mo. for 12 mo.*",
        price: 4999.0,
        param: "pro-display-xdr",
        productImage: "/images/computers/proxdr-display.jpg",
        productImage1: "/images/computers/proxdr_detail_1.png",
        productImage2: "/images/computers/proxdr_detail_2.png",
        productImage3: "/images/computers/proxdr_detail_3.png",
        productImage4: "/images/computers/proxdr_detail_4.png",
        text1:
          "32-inch 6K Retina display provides astoundingly sharp and detailed imagery",
        text2:
          "Extreme Dynamic Range (XDR) for next-level brightness, contrast, and color",
        text3:
          "1000 nits full-screen sustained brightness and 1600 nits peak brightness",
        text4: "1,000,000:1 contrast ratio and stunningly real XDR imagery",
        text5:
          "P3 wide color gamut and 10-bit color depth for the highest-quality color possible",
      },
      {
        id: 17,
        productName: "Studio Display",
        description: "From $1599 or $133.25/mo. for 12 mo.*",
        price: 1599.0,
        param: "studio-display",
        productImage: "/images/computers/studio-display.png",
        productImage1: "/images/computers/studio_display_detail_1.png",
        productImage2: "/images/computers/studio_display_detail_2.png",
        productImage3: "/images/computers/studio_display_detail_3.png",
        productImage4: "/images/computers/studio_display_detail_4.png",
        text1:
          "27-inch 5K Retina display draws you in with 14.7 million pixels and one billion colors",
        text2:
          "12MP Ultra Wide camera with Center Stage — powered by Apple silicon — allows for more engaging video calls",
        text3:
          "Three studio-quality mics and six-speaker sound system with Spatial Audio for more immersive calls, movies, and music",
        text4:
          "With ports for connectivity and charging and three stand options, it fits any setup",
        text5:
          "Pairs perfectly with any Mac, including the all-new Mac Studio. Add new matching Magic accessories to complete your studio.",
      },
    ],
  },
  {
    watches: [
      {
        id: 18,
        productName: "Apple Watch Series 9",
        description: "From $399 or $33.25/mo. for 12 mo.*",
        price: 399.0,
        param: "apple-watch-series-9",
        productImage: "/images/watches/watch1.png",
        productImage1: "/images/watches/watchs9_detail_1.png",
        productImage2: "/images/watches/watchs9_detail_2.png",
        productImage3: "/images/watches/watchs9_detail_3.png",
        productImage4: "/images/watches/watchs9_detail_4.png",
        text1:
          "Brighter Always-On Retina display with a durable, crack-resistant front crystal",
        text2:
          "Get deep insights into your physical and mental health including heart rate, mood, and more",
        text3: "With advanced workout metrics and views",
        text4:
          "The all-new S9 SiP powers a magical new way to use your watch without touching the screen",
        text5:
          "Innovative safety features including Emergency SOS, Fall Detection, and Crash Detection",
      },
      {
        id: 19,
        productName: "Apple Watch Ultra 2",
        description: "From $799 or $366.58/mo. for 12 mo.*",
        price: 799.0,
        param: "apple-watch-ultra-2",
        productImage: "/images/watches/watch2.png",
        productImage1: "/images/watches/watch_ultra2_detail_1.png",
        productImage2: "/images/watches/watch_ultra2_detail_2.png",
        productImage3: "/images/watches/watch_ultra2_detail_3.png",
        productImage4: "/images/watches/watch_ultra2_detail_4.png",
        text1:
          "Tough 49mm titanium case with customizable Action button strikes a balance with weight, ruggedness, and corrosion resistance",
        text2:
          "All-new S9 SiP powers our brightest display ever and a magical new way to use your watch without touching the screen",
        text3:
          "The most accurate GPS in a sports watch in dense urban environments",
        text4:
          "Up to 36 hours of battery life, up to 72 hours on low power settings, and up to 17 hours of workout use in Low Power Mode",
        text5:
          "Pair with three band styles specialized for outdoor adventure, water sports, and all workout types",
      },
      {
        id: 20,
        productName: "Apple Watch SE",
        description: "From $249 or $20.75/mo. for 12 mo.*",
        price: 249.0,
        param: "apple-watch-se",
        productImage: "/images/watches/watch3.png",
        productImage1: "/images/watches/watch_se_detail_1.png",
        productImage2: "/images/watches/watch_se_detail_2.png",
        productImage3: "/images/watches/watch_se_detail_3.png",
        productImage4: "/images/watches/watch_se_detail_4.png",
        text1:
          "Call and message even when you don't have your iPhone nearby with GPS + Cellular models",
        text2: "Get advanced workout metrics and views",
        text3:
          "Track your sleep stages with the Sleep app, and check your heart rate anytime",
        text4:
          "Innovative safety features including Emergency SOS, Fall Detection, and Crash Detection",
        text5:
          "Family Setup lets you pair watches for family members without an iPhone",
      },
      {
        id: 21,
        productName: "Apple Watch Hermès",
        description: "From $1249 or $3104.08/mo. for 12 mo.*",
        price: 1249.0,
        param: "apple-watch-series-9",
        productImage: "/images/watches/watch4.png",
        productImage1: "/images/watches/watch_hermes_detail_1.png",
        productImage2: "/images/watches/watch_hermes_detail_2.png",
        productImage3: "/images/watches/watch_hermes_detail_3.png",
        productImage4: "/images/watches/watch_hermes_detail_4.png",
        text1: "Exclusive Hermès bands and watch faces",
        text2:
          "Brighter Always-On Retina display with a durable, crack-resistant front crystal",
        text3:
          "Get deep insights into your physical and mental health including heart rate, mood, and more",
        text4:
          "The all-new S9 SiP powers a magical new way to use your watch without touching the screen",
        text5:
          "Innovative safety features including Emergency SOS, Fall Detection, and Crash Detection",
      },
    ],
  },
  {
    airpods: [
      {
        id: 22,
        productName: "AirPods Pro 2",
        description: "From $249 or $20.75/mo. for 12 mo.**",
        price: 249.0,
        param: "air-pods-pro-2nd-gen",
        productImage: "/images/airpods/airpods_pro_large.png",
        productImage1: "/images/computers/mba13_detail_1.png",
        productImage2: "/images/computers/mba13_detail_2.png",
        productImage3: "/images/computers/mba13_detail_3.png",
        productImage4: "/images/computers/mba13_detail_4.png",
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        text5: "",
      },
      {
        id: 23,
        productName: "AirPods Max",
        description: "From $549 or $45.75/mo. for 12 mo.**",
        price: 549.0,
        param: "air-max",
        productImage: "/images/airpods/airpods_max.png",
        productImage1: "/images/computers/mba13_detail_1.png",
        productImage2: "/images/computers/mba13_detail_2.png",
        productImage3: "/images/computers/mba13_detail_3.png",
        productImage4: "/images/computers/mba13_detail_4.png",
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        text5: "",
      },
      {
        id: 25,
        productName: "Airpods 3",
        description: "From $169 or $10.75/mo. for 12 mo.*",
        price: 169.0,
        param: "airpods-3nd-gen",
        productImage: "/images/airpods/airpods_3gen_large.png",
        productImage1: "/images/computers/mba13_detail_1.png",
        productImage2: "/images/computers/mba13_detail_2.png",
        productImage3: "/images/computers/mba13_detail_3.png",
        productImage4: "/images/computers/mba13_detail_4.png",
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        text5: "",
      },
      {
        id: 24,
        productName: "AirPods 2",
        description: "From $129 or $14.08/mo. for 12 mo.*",
        price: 129.0,
        param: "airpods-2nd-gen",
        productImage: "/images/airpods/airpods_2gen_large.png",
        productImage1: "/images/computers/mba13_detail_1.png",
        productImage2: "/images/computers/mba13_detail_2.png",
        productImage3: "/images/computers/mba13_detail_3.png",
        productImage4: "/images/computers/mba13_detail_4.png",
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        text5: "",
      },
    ],
  },
  {
    footerLinks: [
      "Privacy Policy",
      "Terms of Use",
      "Sales Policy",
      "Legal",
      "Site Map",
    ],
  },
];

const dataBase = createSlice({
  name: "dataBase",
  initialState,
  reducers: {},
});

export default dataBase.reducer;
