if (!window.visalizerLoaded) { // Vérifie si le script a déjà été chargé pour éviter les doublons  
    window.visalizerLoaded = true;

    // Function to generate temp questions dynamically
    function generateQuestionsTemp(count) {
        return Array.from({ length: count }, (_, i) => `Ask ${String(i + 1).padStart(2, "0")}`);
    }


    const supabase = window.supabaseClient || window.supabase.createClient(
        "https://cpktnkjahurhvhabwnsf.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwa3Rua2phaHVyaHZoYWJ3bnNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NTAxMjIsImV4cCI6MjA2MTAyNjEyMn0.YRYNYYTa4OGSG2a1tnNPGtp4KPf-tp9ooY4l0ZV3CDU"
    );

    if (!window.supabaseClient) {
        window.supabaseClient = supabase;
    }

    // Initialize
    async function init() {
        try {
            await loadSurveys();
            if (surveys.length > 0) {
                currentIndex = 0;
                displaySurvey();
                updateNavButtons();
            }
        } catch (error) {
            showError(error.message);
        }
    }

    // Fetch surveys from Supabase
    async function loadSurveys() {
        const { data, error } = await supabase
            .from("sondages")
            .select("*")
            .order("id", { ascending: false });

        if (error) throw error;

        surveys = data.map((survey, idx) => ({
            ...survey,
            display_index: idx + 1
        }));

        renderSidebarList();
        document.getElementById("total-surveys").textContent = surveys.length;
    }

    ////////// Render sidebar list of surveys ///////////////////

    // Display survey details
    function displaySurvey() {
        if (currentIndex < 0 || currentIndex >= surveys.length) return;

        const survey = surveys[currentIndex];
        document.getElementById("current-index").textContent = survey.display_index;

        const content = document.getElementById("survey-display");

        const meta = `
                <div class="survey-meta">
                    <div class="meta-item">
                        <span class="meta-label">ID</span>
                        <span class="meta-value">${survey.id}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Type de formulaire</span>
                        <span class="meta-value">${survey.s_type || "N/A"}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Date</span>
                        <span class="meta-value">${new Date(survey.timestamp).toLocaleString("fr-FR")}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Langue</span>
                        <span class="meta-value">${survey.language || "N/A"}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Fuseau horaire</span>
                        <span class="meta-value">${survey.timezone || "N/A"}</span>
                    </div>
                </div>
            `;

        // Generate questions dynamically based on actual response count
        const responseKeys = Object.keys(survey.responses);
        const questionCount = responseKeys.length;
        const QUESTIONS_TEMP = generateQuestionsTemp(questionCount);

        const questionsHtml = QUESTIONS_TEMP.map((question, idx) => {
            const answer = survey.responses[responseKeys[idx]];
            const answerHtml = Array.isArray(answer)
                ? `<div class="answer-array">${answer.map(a => `<div class="answer-badge">${a}</div>`).join("")}</div>`
                : `<div class="answer-text">${answer || "N/A"}</div>`;

            return `
                    <div class="question-block">
                        <div class="question-text">${question}</div>
                        ${answerHtml}
                    </div>
                `;
        }).join("");

        content.innerHTML = meta + `<div class="survey-questions">${questionsHtml}</div>`;
    }
    ////////// Navigation buttons //////////////////////

    // Format date to JJ/MM/AA
    function formatDate(isoDate) {
        const date = new Date(isoDate);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = String(date.getFullYear()).slice(-2);
        return `${day}/${month}/${year}`;
    }

    // Error handling
    function showError(message) {
        document.getElementById("survey-display").innerHTML = `
                <div class="error">
                    <strong>Erreur:</strong> ${message}
                </div>
            `;
    }

    // Start
    init();
}
