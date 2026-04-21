// Função para formatar o horário
function updateTime() {
    const now = new Date();
    document.getElementById('lastUpdated').innerText = now.toLocaleTimeString('pt-BR');
}

// Anima o enchimento dos silos no carregamento
window.addEventListener('load', () => {
    const fills = document.querySelectorAll('.liquid-fill');
    setTimeout(() => {
        fills.forEach(fill => {
            const target = fill.getAttribute('data-target');
            fill.style.height = `${target}%`;
        });
    }, 100);
    updateTime();
});

// Simula atualização de dados em tempo real
function updateSensors() {
    const icon = document.getElementById('refreshIcon');
    icon.classList.add('animate-spin');
    
    setTimeout(() => {
        const temps = document.querySelectorAll('.sensor-temp');
        const hums = document.querySelectorAll('.sensor-hum');

        temps.forEach(temp => {
            // Simula uma pequena variação térmica
            const current = parseFloat(temp.innerText);
            const variation = (Math.random() * 0.4 - 0.2); 
            temp.innerText = (current + variation).toFixed(1) + ' °C';
        });

        hums.forEach(hum => {
            // Simula uma pequena variação na umidade
            const current = parseFloat(hum.innerText);
            const variation = (Math.random() * 0.2 - 0.1); 
            hum.innerText = (current + variation).toFixed(1) + ' %';
        });

        updateTime();
        icon.classList.remove('animate-spin');
    }, 800); // delay simulado da requisição API
}

// Auto-atualização a cada 10 segundos para demonstrar funcionamento
setInterval(updateSensors, 10000);