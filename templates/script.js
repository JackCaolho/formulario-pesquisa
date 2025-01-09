document.getElementById('tipoPesquisa').addEventListener('change', function () {
    const perguntasContainer = document.getElementById('perguntas');
    perguntasContainer.innerHTML = ''; // Limpa as perguntas anteriores

    if (this.value === 'NPS/CSAT') {
        perguntasContainer.innerHTML = `
            <div class="pergunta">
                <label>Qual a probabilidade de recomendar o Grupo Labormesp? (1 a 10)</label>
                <input type="number" min="1" max="10" required>
            </div>
            <div class="pergunta">
                <label>Qualidade do atendimento médico (1 a 7)</label>
                <input type="number" min="1" max="7" required>
            </div>
            <div class="pergunta">
                <label>Qualidade do atendimento técnico (segurança do trabalho) (1 a 7)</label>
                <input type="number" min="1" max="7" required>
            </div>
            <div class="pergunta">
                <label>Agilidade e eficiência nos serviços (1 a 7)</label>
                <input type="number" min="1" max="7" required>
            </div>
            <div class="pergunta">
                <label>Atendimento ao cliente (suporte e esclarecimento de dúvidas) (1 a 7)</label>
                <input type="number" min="1" max="7" required>
            </div>
            <div class="pergunta">
                <label>Facilidade para agendar serviços e exames (1 a 7)</label>
                <input type="number" min="1" max="7" required>
            </div>
            <div class="pergunta">
                <label>O que mais te agradou nos nossos serviços?</label>
                <textarea rows="3" required></textarea>
            </div>
            <div class="pergunta">
                <label>O que podemos melhorar para atendê-lo?</label>
                <textarea rows="3" required></textarea>
            </div>
        `;
    } else if (this.value === 'CES') {
        perguntasContainer.innerHTML = `
            <div class="pergunta">
                <label>Foi fácil para você agendar e receber a visita técnica? (1 a 5)</label>
                <input type="number" min="1" max="5" required>
            </div>
            <div class="pergunta">
                <label>A visita técnica atendeu às suas necessidades com facilidade? (1 a 5)</label>
                <input type="number" min="1" max="5" required>
            </div>
            <div class="pergunta">
                <label>A comunicação com o técnico durante a visita foi clara e eficiente? (1 a 5)</label>
                <input type="number" min="1" max="5" required>
            </div>
            <div class="pergunta">
                <label>Como você avaliaria o tempo de resposta para agendar a visita técnica? (1 a 5)</label>
                <input type="number" min="1" max="5" required>
            </div>
            <div class="pergunta">
                <label>O que podemos fazer para tornar o processo de agendamento e a visita técnica mais fáceis para você?</label>
                <textarea rows="3" required></textarea>
            </div>
            <div class="pergunta">
                <label>Outras sugestões ou comentários sobre a visita técnica</label>
                <textarea rows="3" required></textarea>
            </div>
        `;
    }
});
