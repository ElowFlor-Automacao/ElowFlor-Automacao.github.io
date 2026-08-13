/* Simulação de dados do painel (demonstração).
   Usado por dashboard.html e silo-details.html — por isso todo acesso ao DOM
   é defensivo: as duas páginas não têm exatamente os mesmos elementos. */

// Atualiza o carimbo de hora, se a página tiver um
function updateTime() {
    const el = document.getElementById('lastUpdated');
    if (!el) return;
    el.textContent = new Date().toLocaleTimeString('pt-BR');
}

// Anima o enchimento dos silos no carregamento
window.addEventListener('load', () => {
    const fills = document.querySelectorAll('.liquid-fill');
    setTimeout(() => {
        fills.forEach(fill => {
            fill.style.height = `${fill.getAttribute('data-target')}%`;
        });
    }, 100);
    updateTime();
});

// Simula atualização de dados em tempo real
function updateSensors() {
    const icon = document.getElementById('refreshIcon');
    if (icon) icon.classList.add('animate-spin');

    setTimeout(() => {
        // O spinner precisa parar mesmo se algo abaixo falhar
        try {
            // Pequena variação em torno do valor atual
            const jitter = (el, amplitude, sufixo) => {
                const atual = parseFloat(el.textContent);
                if (Number.isNaN(atual)) return; // sensor offline mostra "--"
                const variacao = Math.random() * amplitude - amplitude / 2;
                el.textContent = (atual + variacao).toFixed(1) + sufixo;
            };

            document.querySelectorAll('.sensor-temp').forEach(el => jitter(el, 0.4, ' °C'));
            document.querySelectorAll('.sensor-hum').forEach(el => jitter(el, 0.2, ' %'));

            updateTime();
        } finally {
            if (icon) icon.classList.remove('animate-spin');
        }
    }, 800); // delay simulado da requisição à API
}

// Auto-atualização a cada 10 segundos para demonstrar funcionamento.
// Pausa quando a aba está em segundo plano.
let autoRefresh = setInterval(updateSensors, 10000);

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearInterval(autoRefresh);
        autoRefresh = null;
    } else if (!autoRefresh) {
        autoRefresh = setInterval(updateSensors, 10000);
    }
});
