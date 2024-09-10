const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

function hideOverlay() {
    overlay.style.display = 'none'; // Скрыть overlay после загрузки
    lottieContainer.style.display = 'block'; // Показать контейнер для Lottie

    // Инициализация Lottie анимации
    lottie.loadAnimation({
        container: lottieContainer, // Элемент для рендеринга анимации
        renderer: 'svg', // Тип рендерера, используем 'svg'
        loop: true, // Анимация будет цикличной
        autoplay: true, // Анимация начнет автоматически
        path: 'https://jedijnp.github.io/preloaderJSLottie/ladyanddog.json', // URL файла Lottie JSON
    });
}

// Запуск анимации после загрузки контента страницы
document.addEventListener('DOMContentLoaded', () => {
    hideOverlay();
});
