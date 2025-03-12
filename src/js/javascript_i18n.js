function switchLanguage(lang) {

    const translations = {
        en: {
            welcome: "Welcome to my portfolio",
            contact: "Contact",
            languageSwitch: "FR",
            epitaStudent: "Epita student",
            about_me_title_1: "About Me",
            about_me_1: "Currently a 4th-year student at EPITA, specializing in the SIGL major (Système d’Information et Génie Logiciel). Passionate about technology and problem-solving, I am acquiring the tools to transform innovative ideas into reliable and scalable IT solutions.",
            about_me_title_2: "What Is SIGL?",
            about_me_2: "SIGL is a major at EPITA that <i>prepares to assist businesses in transitioning to a new, scalable IT framework aligned with business needs. The topics covered include leadership and management, cloud and architecture, mobility and applications, as well as digitalization and transformation.</i>",
            about_me_title_3: "Why This Portfolio?",
            about_me_3: "I spend my time working on various personal projects, hence this portfolio. I have always had a keen interest in designing and developing websites since I started studying computer science, and this portfolio reflects my journey in honing that skill.",
            status: "Status:",
            status_done: "Done",
            status_wip: "In progress",
            _42sh: "42SH is a shell project that I made during my third year at EPITA. It is a reproduction of a UNIX shell that can execute commands, manage environment variables, and handle signals all while conforming to the POSIX standard.",
            gymrat: "Development of a fitness mobile application in Flutter and Dart, it allows to keep track of fitness objectives and performances. Chatgpt 4.0 queries also allow the detection of macros by taking a picture of the dish for macros monitoring. The backend part is integrated in SQL and hosted with Firebase. I plan to deploy it on App and Play store once finished.",
            ping: "Reproduction of the front-end & back-end of an IDE including client constraints to emulate client collaboration. Supports multiple languages auto-completion and syntax highlighting as well as all maven & git functionnalities. Deployed using electron.",
            ocr: "Optical character recognition software capable of detecting a sudoku grid as well as the numbers it contains to automatically solve it. The project was programmed from scratch in C without using any library.",
            tiger: "Implementation of a C++ compiler for the Tiger language, using tools such as Bison and Flex.",
            portfolio: "This portfolio was created using HTML, CSS, and JavaScript. It is hosted on GitHub Pages and the source code is available on my GitHub repository. It has been redone many times as my skills improved, until its latest iteration that you see now.",
            bpce: "6-month internship at BPCE-IT's FabLab, an innovation team responsible for studying the feasibility of innovative projects, developing them, and deploying them. The work is done following the Agile methodology and DevOps culture. During these 6 months, I was able to participate in the development and deployment of 4 internal projects.",
            csumb: "I had the opportunity to study abroad at the California State University - Monterey Bay. It was during this semester that I started web development. Besides the academic aspect, I was able to discover the American culture and travel throughout the country.",
            footer_text: "Sincerely,",
            footer_text_2: "Lucas.",
            mobile_message: "This website is not optimized for mobile, please view it from a computer."
        },
        fr: {
            welcome: "Bienvenue sur mon portfolio",
            contact: "Contact",
            languageSwitch: "EN",
            epitaStudent: "Etudiant à epita",
            about_me_title_1: "Présentation",
            about_me_1: "Actuellement étudiant en 4ème année à l'EPITA, me spécialisant dans la majeure SIGL (Système d’Information et Génie Logiciel). Passionné par la technologie et la résolution de problèmes, je construis une carrière à l'intersection des Systèmes d'Information et du Génie Logiciel. Grâce à ce programme, j'acquiers les outils pour transformer des idées innovantes en solutions informatiques fiables et évolutives.",
            about_me_title_2: "Qu'est-ce que SIGL?",
            about_me_2: "SIGL est une majeure à l'EPITA qui \"<i>prépare à aider les entreprises à passer à un nouveau cadre informatique évolutif aligné sur les besoins de l'entreprise. Les sujets abordés incluent le leadership et la gestion, le cloud et l'architecture, la mobilité et les applications, ainsi que la numérisation et la transformation</i>\".",
            about_me_title_3: "Pourquoi ce portfolio?",
            about_me_3: "Lorsque je ne suis pas en train d'étudier à l'EPITA, je consacre mon temps à travailler sur divers projets personnels, d'où ce portfolio. J'ai toujours eu un certain intérêt pour la conception et le développement de sites web depuis que j'ai commencé à programmer, ce portfolio reflète mon parcours concernant cette compétence.",
            status: "Statut:",
            status_done: "Terminé",
            status_wip: "En cours",
            _42sh: "42SH est un projet de shell que j'ai réalisé lors de ma troisième année à l'EPITA. C'est une reproduction d'un shell UNIX qui peut exécuter des commandes, gérer des variables d'environnement et gérer des signaux tout en respectant la norme POSIX.",
            gymrat: "Développement d'une application mobile de fitness en Flutter et Dart, elle permet de suivre les objectifs et performances de fitness. Les requêtes Chatgpt 4.0 permettent également la détection des macros en prenant une photo du plat pour le suivi des macros. La partie backend est intégrée en SQL et hébergée avec Firebase. Je prévois de le déployer sur App et Play store une fois terminé.",
            ping: "Reproduction du front-end & back-end d'un IDE incluant des contraintes pour émuler la collaboration client. Permet la complétion automatique en plusieurs langages et la coloration syntaxique ainsi que les fonctionnalités maven & git. Déployé avec electron.",
            ocr: "Logiciel de reconnaissance optique de caractères capable de détecter une grille de sudoku ainsi que les chiffres qu'elle contient pour la résoudre automatiquement. Codé à partir de zéro en C sans utiliser de librairies.",
            tiger: "Implémentation d'un compilateur C++ pour le langage Tiger, en utilisant des outils tels que Bison et Flex.",
            portfolio: "Ce portfolio a été créé en utilisant HTML, CSS, et JavaScript. Il est hébergé sur GitHub Pages et le code source est disponible sur mon dépôt. Il a été refait de nombreuses fois au fur et à mesure que mes compétences s'amélioraient, jusqu'à sa dernière itération que vous voyez maintenant.",
            bpce: "Stage de 6 mois au sein du FabLab de BPCE-IT, une équipe d'innovation chargée d'étudier la faisabilité de projets innovants, de les développer puis de les déployer. Le travail s'effectue en suivant la méthodologie Agile et la culture DevOps. Durant ces 6 mois, j'ai pu participer au dévelopement et déploiement de 4 projets internes.",
            csumb:"J'ai eu la chance d'effectuer un semestre à l'international au sein de la California State University - Monterey Bay. C'est lors de ce semestre que j'ai commencé le développement web. Hormis l'aspect académique, j'ai surtout pu découvrir la culture américaine et voyager à travers le pays.",
            geneva: "GENÈVE",
            geneva_description: "J'ai développé durant 3 mois un jeu vidéo à but éducatif pour le compte d'un cabinet orthophonique genevois. Le dévelopement s'est fait en C# et se basait sur Unity pour le rendu. Le jeu permettait aux enfants de travailler leur orthographe en explorant un environnement 2D.",
            footer_text: "Cordialement,",
            footer_text_2: "Lucas.",
            mobile_message: "Ce site n'est pas optimisé pour mobile, veuillez le consulter depuis un ordinateur."
        }
    };

    // -------- Variables and constants --------
    const fadeInElements = document.querySelectorAll('.fade-in');
   
    // --------Screen update wave animation--------
    const wave1 = document.createElement('div');
    wave1.classList.add('wave', 'wave1');
    const wave2 = document.createElement('div');
    wave2.classList.add('wave', 'wave2');
    const wave3 = document.createElement('div');
    wave3.classList.add('wave', 'wave3');

    document.body.appendChild(wave1);
    document.body.appendChild(wave2);
    document.body.appendChild(wave3);

    setTimeout(() => {
        wave1.remove();
        wave2.remove();
        wave3.remove();
    }, 1000);

    // --------Language switch while waves play--------
    setTimeout(() => {
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            element.innerHTML = translations[lang][element.getAttribute('data-i18n')];
        });
        // --------Fade in animation--------
        fadeInElements.forEach(element => {
            element.classList.add('fade-in-up');
        });
    }, 200);

    // --------Fade-in element stays visible after animation is done--------
    setTimeout(() => {
        fadeInElements.forEach(element => {
            element.style.opacity = 1;
        });
    }, 1200);

}

// --------Main function--------
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('fr');
    let currentLanguage = 'FR';
    const languageSwitch = document.getElementById('language-switch');
    languageSwitch.addEventListener('click', () => {
        const fadeInElements = document.querySelectorAll('.fade-in');
        setTimeout(() => {
            fadeInElements.forEach(element => {
                element.style.opacity = 1;
            });
        }, 1200);
        if (currentLanguage === 'FR') {
            currentLanguage = 'EN';
            switchLanguage('en');
        } else {
            currentLanguage = 'FR';
            switchLanguage('fr');
        }
    });
});