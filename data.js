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
        { name: "Sanchi Stupa", capital: "Sanchi", phonetic: "Sanchi Stupa", image: "assets/monument-images/20_Sanchi_Stupa.jpg" }
    ]
};