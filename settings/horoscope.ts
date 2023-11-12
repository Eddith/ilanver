const planets = [
  {
    id: 1,
    name: "Merkür",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/600px-Mercury_in_color_-_Prockter07-edit1.jpg",
    details:
      "Merkür, Güneş Sistemi'ndeki en küçük gezegen ve en yakın Güneş'e olan ikinci gezegendir",
    distance: "57.9 milyon km",
    diameter: "4,880 km",
    temperature_range: "-290 °F to 800 °F",
    satellites: 0,
  },
  {
    id: 2,
    name: "Venüs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped%29.jpg/600px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped%29.jpg",
    details:
      "Venüs, Güneş Sistemi'ndeki ikinci gezegen ve Dünya'ya en yakın gezegendir.",
    distance: "108.2 milyon km",
    diameter: "12,104 km",
    temperature: "870 °F",
    atmosphere: "Karbon Dioksit, Azot",
  },
  {
    id: 3,
    name: "Dünya",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/600px-The_Blue_Marble_%28remastered%29.jpg",
    details:
      "Dünya, yaşam barındıran tek gezegen olarak bilinir. Sıvı su, atmosfer ve uygun sıcaklık koşullarına sahiptir.",
    distance: "149.6 milyon km",
    diameter: "12,742 km",
    temperature_range: "-126 °F to 136 °F",
    satellites: 1,
  },
  {
    id: 4,
    name: "Mars",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/600px-OSIRIS_Mars_true_color.jpg",
    details:
      "Mars, Güneş Sistemi'ndeki dördüncü gezegendir. Yüzeyinde kızıl renkli topraklarıyla bilinir.",
    distance: "227.9 milyon km",
    diameter: "6,779 km",
    surface: "Kızıl toprak, volkanlar",
    satellites: 2,
  },
  {
    id: 5,
    name: "Jupiter",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/600px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
    details:
      "Jupiter, Güneş Sistemi'ndeki en büyük gezegendir. Büyük kırmızı lekesiyle bilinir.",
    distance: "778.5 milyon km",
    diameter: "139,820 km",
    magnetic_field: "Güçlü",
    satellites: 79,
  },
  {
    id: 6,
    name: "Satürn",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Saturn_from_Cassini_Orbiter_%282004-10-06%29.jpg/600px-Saturn_from_Cassini_Orbiter_%282004-10-06%29.jpg",
    details:
      "Satürn, halka sistemleri ile ünlüdür. Büyük ve güzel halkaları vardır.",
    distance: "1.4 milyar km",
    diameter: "116,460 km",
    rings: "Güzel halkalar",
    satellites: 82,
  },
  {
    id: 7,
    name: "Uranüs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/600px-Uranus2.jpg",
    details:
      "Uranüs, yatay eksende dönen bir gezegendir ve mavi renkli atmosferiyle bilinir.",
    distance: "2.9 milyar km",
    diameter: "50,724 km",
    atmosphere: "Metan, Hidrojen, Helyum",
    satellites: 27,
  },
  {
    id: 8,
    name: "Neptün",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/600px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
    details:
      "Neptün, Güneş Sistemi'ndeki en uzak gezegendir. Rüzgarlı bir atmosfere sahiptir ve mavi renklidir.",
    distance: "4.5 milyar km",
    diameter: "49,244 km",
    winds: "Hızlı rüzgarlar",
    satellites: 14,
  },
];

export default planets;
