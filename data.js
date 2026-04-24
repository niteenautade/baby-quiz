const QUIZ_DATA = {
    states: [
      { name: "Andhra Pradesh", capital: "Amaravati", phonetic: "Andhra Pradesh" },
      { name: "Arunachal Pradesh", capital: "Itanagar", phonetic: "Arunachal Pradesh" },
      { name: "Assam", capital: "Dispur", phonetic: "Assam" },
      { name: "Bihar", capital: "Patna", phonetic: "Bihar" },
      { name: "Chhattisgarh", capital: "Raipur", phonetic: "Chhattisgarh" },
      { name: "Goa", capital: "Panaji", phonetic: "Goa" },
      { name: "Gujarat", capital: "Gandhinagar", phonetic: "Gujarat" },
      { name: "Haryana", capital: "Chandigarh", phonetic: "Haryana" },
      { name: "Himachal Pradesh", capital: "Shimla", phonetic: "Himachal Pradesh" },
      { name: "Jharkhand", capital: "Ranchi", phonetic: "Jharkhand" },
      { name: "Karnataka", capital: "Bengaluru", phonetic: "Karnataka" },
      { name: "Kerala", capital: "Thiruvananthapuram", phonetic: "Kerala" },
      { name: "Madhya Pradesh", capital: "Bhopal", phonetic: "Madhya Pradesh" },
      { name: "Maharashtra", capital: "Mumbai", phonetic: "Maharashtra" },
      { name: "Manipur", capital: "Imphal", phonetic: "Manipur" },
      { name: "Meghalaya", capital: "Shillong", phonetic: "Meghalaya" },
      { name: "Mizoram", capital: "Aizawl", phonetic: "Mizoram" },
      { name: "Nagaland", capital: "Kohima", phonetic: "Nagaland" },
      { name: "Odisha", capital: "Bhubaneswar", phonetic: "Odisha" },
      { name: "Punjab", capital: "Chandigarh", phonetic: "Punjab" },
      { name: "Rajasthan", capital: "Jaipur", phonetic: "Rajasthan" },
      { name: "Sikkim", capital: "Gangtok", phonetic: "Sikkim" },
      { name: "Tamil Nadu", capital: "Chennai", phonetic: "Tamil Nadu" },
      { name: "Telangana", capital: "Hyderabad", phonetic: "Telangana" },
      { name: "Tripura", capital: "Agartala", phonetic: "Tripura" },
      { name: "Uttarakhand", capital: "Dehradun", phonetic: "Uttarakhand" },
      { name: "Uttar Pradesh", capital: "Lucknow", phonetic: "Uttar Pradesh" },
      { name: "West Bengal", capital: "Kolkata", phonetic: "West Bengal" }
    ],

    uts: [
      { name: "Andaman and Nicobar Islands", capital: "Port Blair", phonetic: "Andaman and Nicobar Islands" },
      { name: "Chandigarh", capital: "Chandigarh", phonetic: "Chandigarh" },
      { name: "Dadra and Nagar Haveli and Daman and Diu", capital: "Daman", phonetic: "Dadra and Nagar Haveli and Daman and Diu" },
      { name: "Delhi", capital: "New Delhi", phonetic: "Delhi" },
      { name: "Jammu and Kashmir", capital: "Srinagar", phonetic: "Jammu and Kashmir" },
      { name: "Ladakh", capital: "Leh", phonetic: "Ladakh" },
      { name: "Lakshadweep", capital: "Kavaratti", phonetic: "Lakshadweep" },
      { name: "Puducherry", capital: "Puducherry", phonetic: "Puducherry" }
    ],
    math: Array.from({ length: 20 }, (_, i) => {
        const a = Math.floor(Math.random() * 9) + 1;
        const b = Math.floor(Math.random() * 9) + 1;
        const fruits = ['🍎', '🍊', '🍌', '🍇', '🍓', '🥭'];
        const fruit = fruits[Math.floor(Math.random() * fruits.length)];
        return {
            num1: a,
            num2: b,
            capital: (a + b).toString(),
            name: `${a} + ${b}`,
            fruit: fruit
        };
    }),
    subtraction: Array.from({ length: 20 }, (_, i) => {
        const a = Math.floor(Math.random() * 9) + 1;
        const b = Math.floor(Math.random() * a) + 1;
        const fruits = ['🍎', '🍊', '🍌', '🍇', '🍓', '🥭'];
        const fruit = fruits[Math.floor(Math.random() * fruits.length)];
        return {
            num1: a,
            num2: b,
            capital: (a - b).toString(),
            name: `${a} - ${b}`,
            fruit: fruit
        };
    }),
    monuments: [
        { name: "Taj Mahal", capital: "Agra", phonetic: "Taj Mahal", image: "assets/monument-images/01_Taj_Mahal.jpg" },
        { name: "Hawa Mahal", capital: "Jaipur", phonetic: "Hawa Mahal", image: "assets/monument-images/02_Hawa_Mahal.jpg" },
        { name: "Gateway of India", capital: "Mumbai", phonetic: "Gateway of India", image: "assets/monument-images/03_Gateway_of_India.jpg" },
        { name: "Golden Temple", capital: "Amritsar", phonetic: "Golden Temple", image: "assets/monument-images/04_Golden_Temple.jpg" },
        { name: "Qutub Minar", capital: "Delhi", phonetic: "Qutub Minar", image: "assets/monument-images/05_Qutub_Minar.jpg" },
        { name: "Charminar", capital: "Hyderabad", phonetic: "Charminar", image: "assets/monument-images/06_Charminar.jpg" },
        { name: "Victoria Memorial", capital: "Kolkata", phonetic: "Victoria Memorial", image: "assets/monument-images/07_Victoria_Memorial.jpg" },
        { name: "Amer Fort", capital: "Jaipur", phonetic: "Amer Fort", image: "assets/monument-images/08_Amer_Fort.jpg" },
        { name: "Lotus Temple", capital: "Delhi", phonetic: "Lotus Temple", image: "assets/monument-images/09_Lotus_Temple.jpg" },
        { name: "Red Fort", capital: "Delhi", phonetic: "Red Fort", image: "assets/monument-images/10_Red_Fort.jpg" },
        { name: "India Gate", capital: "Delhi", phonetic: "India Gate", image: "assets/monument-images/11_India_Gate.jpg" },
        { name: "Mysore Palace", capital: "Mysuru", phonetic: "Mysore Palace", image: "assets/monument-images/12_Mysore_Palace.jpg" },
        { name: "Konark Sun Temple", capital: "Konark", phonetic: "Konark Sun Temple", image: "assets/monument-images/13_Konark_Sun_Temple.jpg" },
        { name: "Ajanta Caves", capital: "Aurangabad", phonetic: "Ajanta Caves", image: "assets/monument-images/14_Ajanta_Caves.jpg" },
        { name: "Meenakshi Temple", capital: "Madurai", phonetic: "Meenakshi Temple", image: "assets/monument-images/15_Meenakshi_Temple.jpg" },
        { name: "Vivekananda Rock", capital: "Kanyakumari", phonetic: "Vivekananda Rock", image: "assets/monument-images/16_Vivekananda_Rock.jpg" },
        { name: "Gol Gumbaz", capital: "Vijayapura", phonetic: "Gol Gumbaz", image: "assets/monument-images/17_Gol_Gumbaz.jpg" },
        { name: "Jantar Mantar", capital: "Jaipur", phonetic: "Jantar Mantar", image: "assets/monument-images/18_Jantar_Mantar.jpg" },
        { name: "Chhatrapati Shivaji Terminus", capital: "Mumbai", phonetic: "Chhatrapati Shivaji Terminus", image: "assets/monument-images/19_CST_Mumbai.jpg" },
        { name: "Sanchi Stupa", capital: "Sanchi", phonetic: "Sanchi Stupa", image: "assets/monument-images/20_Sanchi_Stupa.jpg" },

        { name: "Ellora Caves", capital: "Aurangabad", phonetic: "Ellora Caves", image: "assets/monument-images/21_Ellora_Caves.png" },
        { name: "Brihadeeswara Temple", capital: "Thanjavur", phonetic: "Brihadeeswara Temple", image: "assets/monument-images/22_Brihadeeswara_Temple.png" },
        { name: "Khajuraho Temples", capital: "Khajuraho", phonetic: "Khajuraho Temples", image: "assets/monument-images/23_Khajuraho_Temples.png" },
        { name: "Rani ki Vav", capital: "Patan", phonetic: "Rani ki Vav", image: "assets/monument-images/24_Rani_ki_Vav.png" },
        { name: "Fatehpur Sikri", capital: "Fatehpur Sikri", phonetic: "Fatehpur Sikri", image: "assets/monument-images/25_Fatehpur_Sikri.png" },
        { name: "Humayun's Tomb", capital: "Delhi", phonetic: "Humayun's Tomb", image: "assets/monument-images/26_Humayuns_Tomb.png" },
        { name: "Akshardham Temple", capital: "Delhi", phonetic: "Akshardham Temple", image: "assets/monument-images/27_Akshardham_Temple.png" },
        { name: "Somnath Temple", capital: "Somnath", phonetic: "Somnath Temple", image: "assets/monument-images/28_Somnath_Temple.png" },
        { name: "Mahabodhi Temple", capital: "Bodh Gaya", phonetic: "Mahabodhi Temple", image: "assets/monument-images/29_Mahabodhi_Temple.png" },
        { name: "Hampi Ruins", capital: "Hampi", phonetic: "Hampi Ruins", image: "assets/monument-images/30_Hampi_Ruins.png" },
        { name: "Gwalior Fort", capital: "Gwalior", phonetic: "Gwalior Fort", image: "assets/monument-images/31_Gwalior_Fort.png" },
        { name: "Mehrangarh Fort", capital: "Jodhpur", phonetic: "Mehrangarh Fort", image: "assets/monument-images/32_Mehrangarh_Fort.png" },
        { name: "City Palace Udaipur", capital: "Udaipur", phonetic: "City Palace Udaipur", image: "assets/monument-images/33_City_Palace_Udaipur.png" },
        { name: "Lake Palace", capital: "Udaipur", phonetic: "Lake Palace", image: "assets/monument-images/34_Lake_Palace.png" },
        { name: "Nalanda University Ruins", capital: "Nalanda", phonetic: "Nalanda University Ruins", image: "assets/monument-images/35_Nalanda_Ruins.png" },
        { name: "Elephanta Caves", capital: "Mumbai", phonetic: "Elephanta Caves", image: "assets/monument-images/36_Elephanta_Caves.png" },
        { name: "Shaniwar Wada", capital: "Pune", phonetic: "Shaniwar Wada", image: "assets/monument-images/37_Shaniwar_Wada.png" },
        { name: "Agra Fort", capital: "Agra", phonetic: "Agra Fort", image: "assets/monument-images/38_Agra_Fort.png" },
        { name: "Safdarjung Tomb", capital: "Delhi", phonetic: "Safdarjung Tomb", image: "assets/monument-images/39_Safdarjung_Tomb.png" },
        { name: "Purana Qila", capital: "Delhi", phonetic: "Purana Qila", image: "assets/monument-images/40_Purana_Qila.png" },
        { name: "Lingaraj Temple", capital: "Bhubaneswar", phonetic: "Lingaraj Temple", image: "assets/monument-images/41_Lingaraj_Temple.png" },
        { name: "Jagannath Temple", capital: "Puri", phonetic: "Jagannath Temple", image: "assets/monument-images/42_Jagannath_Temple.png" },
        { name: "Padmanabhaswamy Temple", capital: "Thiruvananthapuram", phonetic: "Padmanabhaswamy Temple", image: "assets/monument-images/43_Padmanabhaswamy_Temple.png" },
        { name: "Bekal Fort", capital: "Kasaragod", phonetic: "Bekal Fort", image: "assets/monument-images/44_Bekal_Fort.png" },
        { name: "Chittorgarh Fort", capital: "Chittorgarh", phonetic: "Chittorgarh Fort", image: "assets/monument-images/45_Chittorgarh_Fort.png" },
        { name: "Ranthambore Fort", capital: "Sawai Madhopur", phonetic: "Ranthambore Fort", image: "assets/monument-images/46_Ranthambore_Fort.png" },
        { name: "Tawang Monastery", capital: "Tawang", phonetic: "Tawang Monastery", image: "assets/monument-images/47_Tawang_Monastery.png" },
        { name: "Rumtek Monastery", capital: "Gangtok", phonetic: "Rumtek Monastery", image: "assets/monument-images/48_Rumtek_Monastery.png" },
        { name: "Udayagiri Caves", capital: "Vidisha", phonetic: "Udayagiri Caves", image: "assets/monument-images/49_Udayagiri_Caves.png" },
        { name: "Barabar Caves", capital: "Jehanabad", phonetic: "Barabar Caves", image: "assets/monument-images/50_Barabar_Caves.png" }

    ],
    symbols: [
      { name: "National Animal", capital: "Tiger", category: "animal", emoji: "🐅" },
      { name: "National Bird", capital: "Peacock", category: "bird", emoji: "🦚" },
      { name: "National Fruit", capital: "Mango", category: "fruit", emoji: "🥭" },
      { name: "National Flower", capital: "Lotus", category: "flower", emoji: "🪷" },
      { name: "National Tree", capital: "Banyan Tree", category: "tree", emoji: "🌳" },
      { name: "National River", capital: "Ganga", category: "river", emoji: "🌊" },
      { name: "National Aquatic Animal", capital: "Dolphin", category: "aquatic animal", emoji: "🐬" },
      { name: "National Heritage Animal", capital: "Elephant", category: "heritage animal", emoji: "🐘" },
      { name: "National Game", capital: "Hockey", category: "game", emoji: "🏑" },
      { name: "National Motto", capital: "Satyameva Jayate", category: "motto", emoji: "🇮🇳" },
      { name: "National Reptile", capital: "King Cobra", category: "reptile", emoji: "🐍" },
      { name: "National Microbe", capital: "Lactobacillus", category: "microbe", emoji: "🥛" },
      { name: "National Vegetable", capital: "Pumpkin", category: "vegetable", emoji: "🎃" },
      { name: "National Song", capital: "Vande Mataram", category: "song", emoji: "🎶" },
      { name: "National Anthem", capital: "Jana Gana Mana", category: "anthem", emoji: "🎵" }
    ]

};