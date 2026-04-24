const Engine = {
    questions: [],
    score: 0,
    currentIdx: 0,
    mode: '',
    userClicked: false,
    synth: window.speechSynthesis,
    voice: null,

    init(mode) {
        this.mode = mode;
        this.questions = [...QUIZ_DATA[mode]].sort(() => 0.5 - Math.random());
        this.score = 0;
        this.currentIdx = 0;
        this.initVoices();
        this.renderGame();
        this.nextQuestion();
    },

    initVoices() {
        const v = this.synth.getVoices();
        this.voice = v.find(v => v.lang === 'en-IN') || v.find(v => v.lang.startsWith('en')) || v[0];
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
        document.getElementById('game-container').innerHTML = `
            <div class="home-btn" onclick="Engine.showModal()">
                <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            </div>
            <div id="score-shield">⭐ Score: 0 / ${this.questions.length}</div>
            <div id="wave-container">
                <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
            </div>
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
        const options = [q.capital];
        while (options.length < 4) {
            const rand = QUIZ_DATA[this.mode][Math.floor(Math.random() * QUIZ_DATA[this.mode].length)].capital;
            if (!options.includes(rand)) options.push(rand);
        }
        options.sort(() => 0.5 - Math.random());

        document.getElementById('quiz-area').innerHTML = `<h3>What is the capital of ${q.name}?</h3>` +
            options.map((opt, i) => `<button id="opt-${i}" onclick="Engine.check('${opt}', '${q.capital}', this)">${String.fromCharCode(65+i)}: ${opt}</button>`).join('');

        const sequence = [{ text: `What is the capital of ${q.phonetic}?` }, ...options.map((opt, i) => ({ text: `Option ${String.fromCharCode(65+i)}, ${opt}`, id: `opt-${i}` }))];

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

        if (choice === correct) {
            this.score++;
            document.getElementById('score-shield').innerText = `⭐ Score: ${this.score} / ${this.questions.length}`;
            btn.classList.add('correct');
            this.speak("Correct! Great job!", () => setTimeout(() => { this.currentIdx++; this.nextQuestion(); }, 2000));
        } else {
            btn.classList.add('wrong');
            document.querySelectorAll('button').forEach(b => { if(b.innerText.includes(correct)) b.classList.add('correct-reveal'); });
            this.speak(`Oops! The capital of ${this.questions[this.currentIdx].name} is ${correct}.`, () => setTimeout(() => { this.currentIdx++; this.nextQuestion(); }, 2000));
        }
    },

    showModal() { document.getElementById('modal-overlay').style.display = 'flex'; },
    confirmExit(exit) {
        document.getElementById('modal-overlay').style.display = 'none';
        if (exit) { this.synth.cancel(); location.reload(); }
    },

    showResults() {
        const highScore = localStorage.getItem('highScore_'+this.mode) || 0;
        if(this.score > highScore) localStorage.setItem('highScore_'+this.mode, this.score);
        document.getElementById('game-container').innerHTML = `<h2>Mission Complete!</h2><p>Score: ${this.score} / ${this.questions.length}</p><p>High Score: ${highScore}</p><button onclick="location.reload()">Main Menu</button>`;
    }
};
Engine.synth.onvoiceschanged = () => Engine.initVoices();
Engine.initVoices();