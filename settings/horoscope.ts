const horoscope = [
  {
    id: 1,
    name: "Koç",
    date: "21 Mart - 19 Nisan",
    description:
      'Koç, zodyakın ilk burcudur ve bu burçta doğanlar "öncüler" olarak bilinir. Cesur, bağımsız ve her zaman yeni bir maceraya hazırlar. Koç bir ateş burcudur ve tutkuları parlak bir şekilde yanar. Ayrıca fevri ve sabırsız oldukları bilinir, ancak aynı zamanda çok dürüst ve sadıktırlar. Koç, aksiyon ve enerji gezegeni Mars tarafından yönetilir. Koç, kardinal bir işarettir, yani doğal liderlerdir. Ayrıca çok rekabetçidirler ve kazanmayı severler. Koç, Aslan ve Yay ile en uyumludur.',
    image: "https://www.astrology-zodiac-signs.com/images/aries.jpg",
    color: "Kırmızı",
    mood: "Heyecanlı",
    luckyNumber: 1,
    luckyDay: "Salı",
    luckyStone: "Elmas",
    compatibility: "Aslan, Yay",
  },
  {
    id: 2,
    name: "Boğa",
    date: "20 Nisan - 20 Mayıs",
    description:
      'Boğa, zodyakın ikinci burcudur ve bu burçta doğanlar "inşaatçılar" olarak bilinir. Pratik, güvenilir ve sabırlıdırlar. Boğa bir dünya burcudur ve topraklanmış ve pratiktir. İnatçı ve katı olmalarıyla da tanınırlar, ancak aynı zamanda çok sadık ve güvenilirdirler. Boğa, aşk ve güzellik gezegeni Venüs tarafından yönetilir. Boğa sabit bir burçtur, yani azim ve kararlılıkları ile tanınırlar. Ayrıca çok inatçıdırlar ve değiştirilmeleri çok zor olabilir. Boğa, Başak ve Oğlak ile en uyumludur.',
    image: "https://www.astrology-zodiac-signs.com/images/taurus.jpg",
    color: "Pembe",
    mood: "Sakinlik",
    luckyNumber: 2,
    luckyDay: "Cuma",
    luckyStone: "Zümrüt",
    compatibility: "Başak, Oğlak",
  },
  {
    id: 3,
    name: "İkizler",
    date: "21 Mayıs - 20 Haziran",
    description:
      'İkizler burcun üçüncü burcudur ve bu burçta doğanlar "iletişimciler" olarak bilinirler. Meraklı, esprili ve zekidirler. İkizler bir hava burcudur ve zekaları ve iletişim kurma yetenekleri ile tanınırlar. Ayrıca huzursuz ve tutarsız oldukları bilinir, ancak aynı zamanda çok çekici ve girişkendirler. İkizler iletişim ve zeka gezegeni Merkür tarafından yönetilir. İkizler değişken bir işarettir, yani uyum sağlama ve değişme yetenekleri ile tanınırlar. Aynı zamanda çok yönlü ve yaratıcıdırlar. İkizler en çok Terazi ve Kova ile uyumludur.',
    image: "https://www.astrology-zodiac-signs.com/images/gemini.jpg",
    color: "Sarı",
    mood: "Mutlu",
    luckyNumber: 3,
    luckyDay: "Çarşamba",
    luckyStone: "İnci",
    compatibility: "Terazi, Kova",
  },
  {
    id: 4,
    name: "Yengeç",
    date: "21 Haziran - 22 Temmuz",
    description:
      'Yengeç, zodyakın dördüncü burcudur ve bu burçta doğanlar "besleyiciler" olarak bilinir. Sevecen, hassas ve duygusaldırlar. Yengeç bir su burcudur ve empatileri ve duygusal zekaları ile tanınırlar. Karamsar ve kararsız olmakla da tanınırlar, ancak aynı zamanda çok sadık ve koruyucudurlar. Yengeç, rahatlığı, kişisel bakımı ve annelik enerjisini temsil eden gök cismi Ay tarafından yönetilir. Yengeç kardinal bir işarettir, yani liderlikleri ve sorumluluk alma yetenekleriyle tanınırlar. Aynı zamanda çok duygusal ve hassastırlar. Yengeç burçları en çok Akrep ve Balık ile uyumludur.',
    image: "https://www.astrology-zodiac-signs.com/images/cancer.jpg",
    color: "Mavi",
    mood: "Üzgün",
    luckyNumber: 4,
    luckyDay: "Pazartesi",
    luckyStone: "Yakut",
    compatibility: "Akrep, Balık",
  },
  {
    id: 5,
    name: "Aslan",
    date: "23 Temmuz - 22 Ağustos",
    description:
      'Aslan, zodyakın beşinci burcudur ve bu burcun altında doğanlar "eğlenceciler" olarak bilinir. Yaratıcı, tutkulu ve cömerttirler. Aslan bir ateş burcudur ve cesaretleri ve coşkularıyla tanınırlar. Ayrıca kibirli ve inatçı olarak bilinirler, ancak aynı zamanda çok sadık ve koruyucudurlar. Aslan, gücü, liderliği ve güveni temsil eden gök cismi olan Güneş tarafından yönetilir. Aslan sabit bir burçtur, yani azimleri ve engellerin üstesinden gelme yetenekleri ile tanınırlar. Ayrıca çok yaratıcı ve tutkulular. Aslan en çok Koç ve Yay ile uyumludur.',
    image: "https://www.astrology-zodiac-signs.com/images/leo.jpg",
    color: "Turuncu",
    mood: "Sinirli",
    luckyNumber: 5,
    luckyDay: "Pazar",
    luckyStone: "Safir",
    compatibility: "Koç, Yay",
  },
  {
    id: 6,
    name: "Başak",
    date: "23 Ağustos - 22 Eylül",
    description:
      'Başak, zodyakın altıncı burcudur ve bu burçta doğanlar "mükemmeliyetçiler" olarak bilinirler. Analitik, nazik ve çalışkandırlar. Başak bir dünya burcudur ve pratiklikleri ve detaylara gösterdikleri dikkat ile tanınırlar. Eleştirel ve utangaç olmalarıyla da tanınırlar ama aynı zamanda çok sadık ve çalışkandırlar. Başak, iletişim ve zeka gezegeni Merkür tarafından yönetilir. Başak değişken bir işarettir, yani uyum sağlama yetenekleri ve değişme yetenekleri ile tanınırlar. Aynı zamanda çok yönlü ve yaratıcıdırlar. Başak en çok Boğa ve Oğlak ile uyumludur.',
    image: "https://www.astrology-zodiac-signs.com/images/virgo.jpg",
    color: "Yeşil",
    mood: "Sakinlik",
    luckyNumber: 6,
    luckyDay: "Perşembe",
    luckyStone: "Ametist",
    compatibility: "Boğa, Oğlak",
  },
  {
    id: 7,
    name: "Terazi",
    date: "23 Eylül - 22 Ekim",
    description:
      'Terazi burcun yedinci burcudur ve bu burçta doğanlar "diplomatlar" olarak bilinirler. Sosyal, kibar ve adildirler. Terazi bir hava burcudur ve zekaları ve iletişim kurma yetenekleri ile tanınırlar. Kararsız ve yüzeysel olarak da bilinirler ama aynı zamanda çok çekici ve girişkendirler. Terazi, aşk ve güzellik gezegeni Venüs tarafından yönetilir. Terazi kardinal bir burçtur, yani liderlikleri ve sorumluluk alma yetenekleriyle tanınırlar. Aynı zamanda çok duygusal ve hassastırlar. Terazi en çok İkizler ve Kova ile uyumludur.',
    image: "https://www.astrology-zodiac-signs.com/images/libra.jpg",
    color: "Pembe",
    mood: "Mutlu",
    luckyNumber: 7,
    luckyDay: "Cuma",
    luckyStone: "Elmas",
    compatibility: "İkizler, Kova",
  },
  {
    id: 8,
    name: "Akrep",
    date: "23 Ekim - 21 Kasım",
    description:
      'Akrep, zodyakın sekizinci burcudur ve bu burçta doğanlar "dedektifler" olarak bilinir. Tutkulu, becerikli ve cesurdurlar. Akrep bir su burcudur ve empatileri ve duygusal zekaları ile tanınırlar. Huysuz ve kıskanç olmalarıyla da tanınırlar ama aynı zamanda çok sadık ve korumacıdırlar. Akrep, dönüşüm ve yenilenme gezegeni Pluto tarafından yönetilir. Akrep sabit bir burçtur, yani azimleri ve engellerin üstesinden gelme yetenekleri ile tanınırlar. Ayrıca çok yaratıcı ve tutkulular. Akrep, Yengeç ve Balık ile en uyumludur.',
    image: "https://www.astrology-zodiac-signs.com/images/scorpio.jpg",
    color: "Kırmızı",
    mood: "Üzgün",
    luckyNumber: 8,
    luckyDay: "Salı",
    luckyStone: "Topaz",
    compatibility: "Yengeç, Balık",
  },
  {
    id: 9,
    name: "Yay",
    date: "22 Kasım - 21 Aralık",
    description:
      'Yay, zodyakın dokuzuncu burcudur ve bu burçta doğanlar "maceracılar" olarak bilinirler. İyimser, cömert ve dürüsttürler. Yay bir ateş burcudur ve cesaretleri ve coşkuları ile tanınırlar. Sorumsuz ve yüzeysel olarak da bilinirler ama aynı zamanda çok sadık ve koruyucudurlar. Yay, şans ve bolluk gezegeni Jüpiter tarafından yönetilir. Yay değişken bir burçtur, yani uyum sağlama ve değişme yetenekleri ile tanınırlar. Aynı zamanda çok yönlü ve yaratıcıdırlar. Yay burcu en çok Aslan ve Koç ile uyumludur.',
    image: "https://www.astrology-zodiac-signs.com/images/sagittarius.jpg",
    color: "Sarı",
    mood: "Sinirli",
    luckyNumber: 9,
    luckyDay: "Çarşamba",
    luckyStone: "Turkuaz",
    compatibility: "Aslan, Koç",
  },
  {
    id: 10,
    name: "Oğlak",
    date: "22 Aralık - 19 Ocak",
    description:
      'Oğlak, zodyakın onuncu burcudur ve bu burcun altında doğanlar "başaranlar" olarak bilinir. Çalışkan, disiplinli ve sorumluluk sahibidirler. Oğlak bir dünya burcudur ve pratiklikleri ve detaylara gösterdikleri dikkat ile tanınırlar. Karamsar ve inatçı olmalarıyla da tanınırlar ama aynı zamanda çok sadık ve çalışkandırlar. Oğlak, disiplin ve sorumluluk gezegeni Satürn tarafından yönetilir. Oğlak kardinal bir burçtur, yani liderlikleri ve sorumluluk alma yetenekleriyle tanınırlar. Aynı zamanda çok duygusal ve hassastırlar. Oğlak en çok Başak ve Boğa ile uyumludur.',
    image: "https://www.astrology-zodiac-signs.com/images/capricorn.jpg",
    color: "Kahverengi",
    mood: "Sakinlik",
    luckyNumber: 10,
    luckyDay: "Cumartesi",
    luckyStone: "Lal taşı",
    compatibility: "Başak, Boğa",
  },
  {
    id: 11,
    name: "Kova",
    date: "20 Ocak - 18 Şubat",
    description:
      'Kova, zodyakın on birinci burcudur ve bu burçta doğanlar "vizyonerler" olarak bilinirler. Zeki, yaratıcı ve bağımsızdırlar. Kova bir hava burcudur ve zekaları ve iletişim kurma yetenekleri ile tanınırlar. Ayrıca mesafeli ve inatçı oldukları bilinir, ancak aynı zamanda çok sadık ve koruyucudurlar. Kova, yenilik ve özgürlük gezegeni Uranüs tarafından yönetilir. Kova sabit bir burçtur, yani azimleri ve engellerin üstesinden gelme yetenekleri ile tanınırlar. Ayrıca çok yaratıcı ve tutkulular. Kova en çok Terazi ve İkizler ile uyumludur.',
    image: "https://www.astrology-zodiac-signs.com/images/aquarius.jpg",
    color: "Mavi",
    mood: "Mutlu",
    luckyNumber: 11,
    luckyDay: "Cuma",
    luckyStone: "Ametist",
    compatibility: "Terazi, İkizler",
  },
  {
    id: 12,
    name: "Balık",
    date: "19 Şubat - 20 Mart",
    description:
      'Balık, zodyakın on ikinci burcudur ve bu burçta doğanlar "hayalperestler" olarak bilinirler. Merhametli, sezgisel ve sanatsaldırlar. Balık bir su burcudur ve empatileri ve duygusal zekaları ile tanınırlar. Karamsar ve kararsız olmakla da tanınırlar, ancak aynı zamanda çok sadık ve koruyucudurlar. Balık, hayallerin ve hayal gücünün gezegeni Neptün tarafından yönetilir. Balık değişken bir işarettir, yani uyum sağlama ve değişme yetenekleri ile tanınırlar. Aynı zamanda çok yönlü ve yaratıcıdırlar. Balık burcu en çok Akrep ve Yengeç ile uyumludur.',
    image: "https://www.astrology-zodiac-signs.com/images/pisces.jpg",
    color: "Mor",
    mood: "Üzgün",
    luckyNumber: 12,
    luckyDay: "Salı",
    luckyStone: "Akuamarin",
    compatibility: "Akrep, Yengeç",
  },
];

export default horoscope;