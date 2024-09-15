document.addEventListener('DOMContentLoaded', function () {
    const app = Vue.createApp({
        data() {
            return {
                profiles: ['Matemática', 'Português', 'Ciências', 'Geografia', 'História', 'Atualidades'],
                difficulties: [
                    { label: 'Fácil', time: 10 },
                    { label: 'Médio', time: 20 },
                    { label: 'Difícil', time: 30 }
                ],
                password: Math.random().toString(36).slice(-8),
                currentStep: 1,
                selectedProfile: '',
                selectedDifficulty: '',
                questionText: '',
                answer: '',
                resultMessage: '',
                newQuestion: {
                    profile: '',
                    difficulty: '',
                    question: '',
                    answer: ''
                },
                questions: []
            };
        },
        mounted() {
            this.loadQuestions();
            this.checkAdminParameter();
        },
        methods: {
            goToStep(step) {
                if (step === 2) {
                    localStorage.setItem("profile", this.selectedProfile);
                } else if (step === 3) {
                    localStorage.setItem("difficulty", JSON.stringify(this.selectedDifficulty));
                    this.setQuestion();
                }
                this.currentStep = step;
            },
            setQuestion() {
                const profile = localStorage.getItem("profile");
                const difficulty = JSON.parse(localStorage.getItem("difficulty")).label;

                console.log(profile);
                console.log(difficulty);

                console.log(this.questions);
                const filteredQuestions = this.questions.filter(q => q.profile === profile && q.difficulty.label === difficulty);
                if (filteredQuestions.length > 0) {
                    this.questionText = filteredQuestions[0].question;
                } else {
                    this.questionText = 'Pergunta não encontrada';
                }
            },
            submitAnswer() {
                const profile = localStorage.getItem("profile");
                const difficulty = JSON.parse(localStorage.getItem("difficulty")).label;

                const filteredQuestions = this.questions.filter(q => q.profile === profile && q.difficulty.label === difficulty);
                if (filteredQuestions.length > 0 && this.answer.toLowerCase() === filteredQuestions[0].answer.toLowerCase()) {
                    const time = JSON.parse(localStorage.getItem("difficulty")).time;
                    this.resultMessage = `Resposta correta! Você ganhou ${time} minutos de conexão.`;
                    this.resultMessage += ' Utilize a seguinte senha: <b style="font-size: 1.5rem; color: red">' + this.password + '</b>';
                    this.resultMessage += ' para se conectar à internet. Após esse tempo realize um novo teste.';
                } else {
                    this.resultMessage = "Resposta incorreta. Tente novamente.";
                }
            },
            loadQuestions() {
                const storedQuestions = localStorage.getItem('questions');
                this.questions = storedQuestions ? JSON.parse(storedQuestions) : [];
            },
            addQuestion() {
                this.questions.push({ ...this.newQuestion });
                localStorage.setItem('questions', JSON.stringify(this.questions));
                this.newQuestion = { profile: '', difficulty: '', question: '', answer: '' };
            },
            removeQuestion(index) {
                this.questions.splice(index, 1);
                localStorage.setItem('questions', JSON.stringify(this.questions));
            },
            checkAdminParameter() {
                if (window.location.hash === '#admin') {
                    const adminModal = new bootstrap.Modal(document.getElementById('adminModal'));
                    adminModal.show();
                }
            }
        }
    });

    app.mount('#app');
});