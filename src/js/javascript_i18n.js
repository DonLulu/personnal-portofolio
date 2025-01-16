function switchLanguage(lang) {
    console.log('Switching to language:', lang);
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        element.textContent = translations[lang][element.getAttribute('data-i18n')];
    });
}

const translations = {
    en: {
        welcome: "Welcome to my portfolio",
        about: "About Me",
        contact: "Contact",
        languageSwitch: "FR",
        epitaStudent: "Epita student",
    },
    fr: {
        welcome: "Bienvenue sur mon portfolio",
        about: "À propos de moi",
        contact: "Contact",
        languageSwitch: "EN",
        epitaStudent: "Etudiant à epita",
    }
};

document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('fr'); // Default language
    let currentLanguage = 'FR';
    const languageSwitch = document.getElementById('language-switch');
    languageSwitch.addEventListener('click', () => {
        if (currentLanguage === 'FR') {
            currentLanguage = 'EN';
            switchLanguage('en');
        } else {
            currentLanguage = 'FR';
            switchLanguage('fr');
        }
    });
});