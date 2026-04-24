const Engine = {
    questions: [],
    score: 0,
    currentIdx: 0,
    mode: '',
    userClicked: false,
    synth: window.speechSynthesis,
    voice: null,
    historyPushed: false,

    init(mode) {
        this.mode = mode;
        this.questions = [...QUIZ_DATA[mode]].sort(() => 0.5 - Math.random());
        this.score = 0;
        this.currentIdx = 0;
        this.initVoices();
        this.renderGame();
        this.nextQuestion();
        this.setupBackButtonHandler();
    },

    initVoices() {
        const v = this.synth.getVoices();
        this.voice = v.find(v => v.lang === 'en-IN') || v.find(v => v.lang.startsWith('en')) || v[0];
    },

    setupBackButtonHandler() {
        if (this.historyPushed) return;
        this.historyPushed = true;

        history.pushState({ screen: 'quiz' }, '', '');
        window.onpopstate = () => {
            location.reload();
        };
    },

    speak(text, callback) {
        document.getElementById('wave-container')?.classList.add('speaking');
        this.synth.cancel();
        setTimeout(() => {
            const utter = new SpeechSynthesisUtterance(text);
            utter.voice = this.voice;
            utter.rate = 0.85;
            utter.onend = () => { document.getElementById('wave-container')?.classList.remove('speaking'); if(callback) callback(); };
            this.synth.speak(utter);
        }, 50);
    },

    renderGame() {
        const modeMap = {
            'math': '🧮 Addition',
            'subtraction': '➖ Subtraction',
            'states': '🗺️ Indian States',
            'uts': '📍 Union Territories',
            'monuments': '🏰 Indian Monuments',
            'symbols': '🚩 National Symbols',
            'families': '🦁 Animal Families'
        };
        const modeTitle = modeMap[this.mode] || '';
        document.getElementById('game-container').innerHTML = `
            <div class="home-btn" onclick="location.reload()">
                🏠
            </div>
            <div id="score-shield">⭐ Score: 0 / ${this.questions.length}</div>
            <div id="wave-container">
                <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
            </div>
            <div id="math-equation-area" class="${this.mode === 'math' ? '' : 'hidden'}"></div>
            <div id="counting-zone" class="${this.mode === 'math' ? '' : 'hidden'}"></div>
            <div id="monument-image-area" class="${this.mode === 'monuments' ? '' : 'hidden'}"></div>
            <div id="quiz-area"></div>
        `;
    },

     async nextQuestion() {
        if (this.currentIdx >= this.questions.length) {
            this.showResults();
            return;
        }

        this.userClicked = false;
        const q = this.questions[this.currentIdx];
        const isMath = this.mode === 'math';
        const isSub = this.mode === 'subtraction';
        const isMon = this.mode === 'monuments';
        const isSymbols = this.mode === 'symbols';
        const isFamilies = this.mode === 'families';

        const fruitMap = { '🍎': 'apple', '🍌': 'banana', '🍓': 'strawberry', '🍊': 'orange', '🍇': 'grape', '🥭': 'mango' };
        const fruitName = fruitMap[q.fruit] || 'fruit';
        const pluralFruit = fruitName + 's';

        // Generate options with smart distractor logic
        let options;
        if (isSymbols) {
            const category = q.category;
            const sameCategoryItems = QUIZ_DATA.symbols.filter(item =>
                item.capital !== q.capital && item.category === category
            );
            
            const fallbackDistractors = {
                flower: ["Rose", "Jasmine", "Marigold", "Sunflower"],
                animal: ["Lion", "Leopard", "Rhino", "Cheetah"],
                bird: ["Sparrow", "Eagle", "Parrot", "Swan"],
                fruit: ["Apple", "Banana", "Orange", "Grapes"],
                tree: ["Neem", "Peepal", "Sandalwood", "Sal"],
                river: ["Yamuna", "Godavari", "Brahmaputra", "Krishna"],
                'aquatic animal': ["Whale", "Shark", "Octopus", "Whale Shark"],
                'heritage animal': ["Lion", "Leopard", "Rhino", "Cheetah"],
                game: ["Cricket", "Football", "Kabaddi", "Badminton"],
                motto: ["Truth Alone Triumphs", "Liberty, Equality, Fraternity", "Satyam Shivam Sundaram"],
                reptile: ["Crocodile", "Lizard", "Tortoise", "Chameleon"],
                microbe: ["Bacteria", "Virus", "Fungus", "Amoeba"],
                vegetable: ["Carrot", "Potato", "Tomato", "Spinach"],
                song: ["Mile Sur Mera Tumhara", "Saare Jahan Se Achcha", "Vande Mataram"],
                anthem: ["Mile Sur Mera Tumhara", "Saare Jahan Se Achcha", "Vande Mataram"]
            };
            
            let distractors = [];
            if (sameCategoryItems.length > 0) {
                const shuffled = sameCategoryItems.sort(() => 0.5 - Math.random());
                distractors = shuffled.slice(0, Math.min(3, sameCategoryItems.length)).map(item => item.capital);
            }
            
            if (distractors.length < 3) {
                const fallbackList = fallbackDistractors[category] || [];
                const filteredFallback = fallbackList
                    .filter(item => !distractors.includes(item) && item !== q.capital)
                    .sort(() => 0.5 - Math.random());
                distractors = distractors.concat(filteredFallback.slice(0, 3 - distractors.length));
            }
            
            let attempts = 0;
            while (distractors.length < 3 && attempts < 10) {
                const generic = ["India", "Bharat", "Hindustan", "Bharat Mata"];
                const randomGen = generic[Math.floor(Math.random() * generic.length)];
                if (!distractors.includes(randomGen) && randomGen !== q.capital) {
                    distractors.push(randomGen);
                }
                attempts++;
            }
            
            options = [q.capital, ...distractors.slice(0, 3)].sort(() => 0.5 - Math.random());
        } else if (isFamilies) {
            // Smart distractor: all options are baby animal names from the families array
            const babyNames = QUIZ_DATA.families.map(item => item.capital);
            const otherBabies = babyNames.filter(name => name !== q.capital);
            const shuffledOthers = otherBabies.sort(() => 0.5 - Math.random());
            const distractors = shuffledOthers.slice(0, 3);
            options = [q.capital, ...distractors].sort(() => 0.5 - Math.random());
        } else {
            // Standard option generation for other modes
            options = [q.capital];
            while (options.length < 4) {
                const rand = QUIZ_DATA[this.mode][Math.floor(Math.random() * QUIZ_DATA[this.mode].length)].capital;
                if (!options.includes(rand)) options.push(rand);
            }
            options.sort(() => 0.5 - Math.random());
        }

        // Render UI
        document.getElementById('monument-image-area').innerHTML = '';
        if (isMon) {
            document.getElementById('monument-image-area').innerHTML = `
                <h3>${q.name}</h3>
                <img src="${q.image}" class="monument-display" alt="${q.name}">
            `;
        }

        if (isMath || isSub) {
            document.getElementById('quiz-area').innerHTML = '';
            document.getElementById('math-equation-area').classList.remove('hidden');
            document.getElementById('counting-zone').classList.remove('hidden');
            document.getElementById('math-equation-area').innerHTML = `<h3>${q.name} = ?</h3>`;

            if (isMath) {
                const group1 = Array(q.num1).fill(q.fruit).join('');
                const group2 = Array(q.num2).fill(q.fruit).join('');
                document.getElementById('counting-zone').innerHTML = `
                    <div class="emoji-group">${group1}</div>
                    <div class="math-symbol">+</div>
                    <div class="emoji-group">${group2}</div>
                `;
            } else {
                const group1 = Array(q.num1).fill(q.fruit).join('');
                const group2 = Array(q.num2).fill(q.fruit).join('');
                const resultEmojis = Array(q.num1).fill(q.fruit).map((e, idx) =>
                    `<span class="${idx >= (q.num1 - q.num2) ? 'strikethrough' : ''}">${e}</span>`
                ).join('');

                document.getElementById('counting-zone').innerHTML = `
                    <div class="emoji-group">${group1}</div>
                    <div class="math-symbol">-</div>
                    <div class="emoji-group">${group2}</div>
                    <div class="math-symbol">=</div>
                    <div class="emoji-group">${resultEmojis}</div>
                `;
            }
            document.getElementById('quiz-area').innerHTML = options.map((opt, i) => `<button id="opt-${i}" onclick="Engine.check('${opt}', '${q.capital}', this)">${opt}</button>`).join('');
        } else if (isSymbols) {
            document.getElementById('math-equation-area').classList.add('hidden');
            document.getElementById('counting-zone').classList.add('hidden');
            document.getElementById('quiz-area').innerHTML = `<h3>${q.emoji} ${q.name}</h3>` +
                options.map((opt, i) => `<button id="opt-${i}" onclick="Engine.check('${opt}', '${q.capital}', this)">${String.fromCharCode(65+i)+': '+opt}</button>`).join('');
        } else if (isFamilies) {
            document.getElementById('math-equation-area').classList.add('hidden');
            document.getElementById('counting-zone').classList.add('hidden');
            document.getElementById('monument-image-area').classList.add('hidden');
            document.getElementById('quiz-area').innerHTML = `<h3>${q.emoji} What is a baby ${q.name} called?</h3>` +
                options.map((opt, i) => `<button id="opt-${i}" onclick="Engine.check('${opt}', '${q.capital}', this)">${String.fromCharCode(65+i)+': '+opt}</button>`).join('');
        } else {
            document.getElementById('math-equation-area').classList.add('hidden');
            document.getElementById('counting-zone').classList.add('hidden');
            const questionText = isMon ? `In which city is ${q.name} located?` : `What is the capital of ${q.name}?`;
            document.getElementById('quiz-area').innerHTML = `<h3>${questionText}</h3>` +
                options.map((opt, i) => `<button id="opt-${i}" onclick="Engine.check('${opt}', '${q.capital}', this)">${isMon ? opt : String.fromCharCode(65+i)+': '+opt}</button>`).join('');
        }

        // Build speech sequence
        const sequence = isMath
            ? [
                { text: `If you have ${q.num1} ${q.num1 === 1 ? fruitName : pluralFruit}.` },
                { text: `And daddy gives you ${q.num2} more ${q.num2 === 1 ? fruitName : pluralFruit}.` },
                { text: `What is ${q.name}?` },
                ...options.map((opt, i) => ({ text: `${opt}`, id: `opt-${i}` }))
            ]
            : isSub
            ? [
                { text: `${q.num1} minus ${q.num2}.` },
                { text: `If you have ${q.num1} ${q.num1 === 1 ? fruitName : pluralFruit}, and you give ${q.num2} to your friend, how many are left? What is ${q.num1} minus ${q.num2}?` },
                ...options.map((opt, i) => ({ text: `${opt}`, id: `opt-${i}` }))
            ]
            : isMon
            ? [
                { text: `In which city is the ${q.phonetic} located?` },
                ...options.map((opt, i) => ({ text: `${opt}`, id: `opt-${i}` }))
            ]
            : isSymbols
            ? [
                { text: `What is the ${q.name} of India?` },
                ...options.map((opt, i) => ({ text: `Option ${String.fromCharCode(65+i)}, ${opt}`, id: `opt-${i}` }))
            ]
            : isFamilies
            ? [
                { text: `What is a baby ${q.name} called?` },
                ...options.map((opt, i) => ({ text: `Option ${String.fromCharCode(65+i)}, ${opt}`, id: `opt-${i}` }))
            ]
            : [{ text: `What is the capital of ${q.phonetic}?` }, ...options.map((opt, i) => ({ text: `Option ${String.fromCharCode(65+i)}, ${opt}`, id: `opt-${i}` }))];

        for (const step of sequence) {
            if (this.userClicked) break;
            if (step.id) document.getElementById(step.id).classList.add('highlight-active');
            await new Promise(r => this.speak(step.text, r));
            if (step.id) document.getElementById(step.id).classList.remove('highlight-active');
        }
    },

    check(choice, correct, btn) {
        if (this.userClicked) return;
        this.userClicked = true;
        this.synth.cancel();

        const isMath = this.mode === 'math';
        const isSub = this.mode === 'subtraction';
        const isMon = this.mode === 'monuments';
        const isSymbols = this.mode === 'symbols';
        const isFamilies = this.mode === 'families';

        if (choice === correct) {
            this.score++;
            const modeMap = { 
                'math': '🧮 Addition', 
                'subtraction': '➖ Subtraction', 
                'states': '🗺️ Indian States', 
                'uts': '📍 Union Territories', 
                'monuments': '🏰 Indian Monuments',
                'symbols': '🚩 National Symbols',
                'families': '🦁 Animal Families'
            };
            const modeTitle = modeMap[this.mode] || '';
            document.getElementById('score-shield').innerText = `⭐ Score: ${this.score} / ${this.questions.length}`;
            btn.classList.add('correct');
            this.speak(isMath || isSub ? "That's right!" : "Correct! Great job!", () => setTimeout(() => { this.currentIdx++; this.nextQuestion(); }, 2000));
        } else {
            btn.classList.add('wrong');
            document.querySelectorAll('button').forEach(b => { if(b.innerText.includes(correct)) b.classList.add('correct-reveal'); });
            const msg = isMath
                ? `Not quite! ${this.questions[this.currentIdx].name} is ${correct}.`
                : isSub
                ? `Not quite! ${this.questions[this.currentIdx].num1} minus ${this.questions[this.currentIdx].num2} is ${correct}.`
                : isMon
                ? `Oops! The ${this.questions[this.currentIdx].name} is actually in ${correct}.`
                : isSymbols
                ? `Not quite! The ${this.questions[this.currentIdx].name} of India is ${correct}.`
                : isFamilies
                ? `Not quite! A baby ${this.questions[this.currentIdx].name} is called ${correct}.`
                : `Oops! The capital of ${this.questions[this.currentIdx].name} is ${correct}.`;
            this.speak(msg, () => setTimeout(() => { this.currentIdx++; this.nextQuestion(); }, 2000));
        }
    },




    showResults() {
        const highScore = localStorage.getItem('highScore_'+this.mode) || 0;
        if(this.score > highScore) localStorage.setItem('highScore_'+this.mode, this.score);
        document.getElementById('game-container').innerHTML = `<h2>Mission Complete!</h2><p>Score: ${this.score} / ${this.questions.length}</p><p>High Score: ${highScore}</p><button onclick="location.reload()">Main Menu</button>`;
        this.setupBackButtonHandler();
    }
};
Engine.synth.onvoiceschanged = () => Engine.initVoices();
Engine.initVoices();