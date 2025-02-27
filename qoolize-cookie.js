import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {},
        analytics: {},
        marketing: {}
    },
    language: {
        default: "en",
        autoDetect: "browser",
        rtl: ["ar"],
        translations: {
            en: {
                consentModal: {
                    title: "We use cookies!",
                    description:
                        "We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can accept all cookies or customize your preferences.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Only necessary",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"https://qoolize.com/privacy-policy\">Privacy Policy</a>\n<a href=\"https://qoolize.com/terms-and-conditions\">Terms & Conditions</a>"
                },
                preferencesModal: {
                    title: "Manage Cookie Preferences",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Only necessary",
                    savePreferencesBtn: "Save preferences",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "Cookies help us ensure website functionality, analyze visitor interactions, and provide personalized content."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "These cookies are essential for the website to function properly and cannot be disabled.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Functionality Cookies",
                            description: "These cookies help us remember your settings and preferences.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "These cookies help us understand how users interact with our website.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Marketing Cookies",
                            description: "These cookies track users across websites to display relevant advertisements.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "More Information",
                            description: "For more details, visit our <a class=\"cc__link\" href=\"https://qoolize.com/privacy-policy\">Privacy Policy</a>."
                        }
                    ]
                }
            },
            tr: {
                consentModal: {
                    title: "Çerezleri Kullanıyoruz!",
                    description:
                        "Web sitemizin işlevselliğini sağlamak, kullanıcı deneyimini iyileştirmek ve içerikleri kişiselleştirmek için çerezleri kullanıyoruz.",
                    acceptAllBtn: "Tümünü kabul et",
                    acceptNecessaryBtn: "Sadece gerekli olanlar",
                    showPreferencesBtn: "Tercihleri yönet",
                    footer: "<a href=\"https://qoolize.com/privacy-policy\">Gizlilik Politikası</a>\n<a href=\"https://qoolize.com/terms-and-conditions\">Şartlar ve Koşullar</a>"
                },
                preferencesModal: {
                    title: "Çerez Tercihlerini Yönet",
                    acceptAllBtn: "Tümünü kabul et",
                    acceptNecessaryBtn: "Sadece gerekli olanlar",
                    savePreferencesBtn: "Tercihleri kaydet",
                    sections: [
                        {
                            title: "Çerez Kullanımı",
                            description: "Çerezler, web sitemizin düzgün çalışmasını sağlamak ve kullanıcı deneyimini geliştirmek için kullanılır."
                        },
                        {
                            title: "Zorunlu Çerezler <span class=\"pm__badge\">Her Zaman Etkin</span>",
                            description: "Bu çerezler, web sitemizin temel işlevlerini yerine getirmesi için gereklidir ve devre dışı bırakılamaz.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "İşlevsellik Çerezleri",
                            description: "Bu çerezler, tercihlerinizi hatırlamamıza ve size daha iyi bir deneyim sunmamıza yardımcı olur.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Analitik Çerezler",
                            description: "Bu çerezler, web sitemizi nasıl kullandığınızı anlamamıza yardımcı olur.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Pazarlama Çerezleri",
                            description: "Bu çerezler, daha alakalı reklamlar göstermek için kullanıcıları web siteleri arasında izler.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "Daha Fazla Bilgi",
                            description: "Daha fazla bilgi için <a class=\"cc__link\" href=\"https://qoolize.com/privacy-policy\">Gizlilik Politikası</a> sayfamızı ziyaret edebilirsiniz."
                        }
                    ]
                }
            },
            ar: {
                consentModal: {
                    title: "نحن نستخدم ملفات تعريف الارتباط!",
                    description:
                        "نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح الخاصة بك، وتحليل حركة المرور، وتخصيص المحتوى.",
                    acceptAllBtn: "قبول الكل",
                    acceptNecessaryBtn: "الضرورية فقط",
                    showPreferencesBtn: "إدارة التفضيلات",
                    footer: "<a href=\"https://qoolize.com/privacy-policy\">سياسة الخصوصية</a>\n<a href=\"https://qoolize.com/terms-and-conditions\">الشروط والأحكام</a>"
                },
                preferencesModal: {
                    title: "إدارة تفضيلات ملفات تعريف الارتباط",
                    acceptAllBtn: "قبول الكل",
                    acceptNecessaryBtn: "الضرورية فقط",
                    savePreferencesBtn: "حفظ التفضيلات",
                    sections: [
                        {
                            title: "استخدام ملفات تعريف الارتباط",
                            description:
                                "تساعدنا ملفات تعريف الارتباط على ضمان وظائف الموقع وتحليل تفاعلات الزوار وتوفير محتوى مخصص."
                        },
                        {
                            title: "ملفات تعريف الارتباط الضرورية للغاية <span class=\"pm__badge\">مُمكنة دائماً</span>",
                            description:
                                "هذه الملفات ضرورية لكي يعمل الموقع بشكل صحيح ولا يمكن تعطيلها.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "ملفات تعريف الارتباط الوظيفية",
                            description:
                                "تساعدنا هذه الملفات في تذكّر إعداداتك وتفضيلاتك.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "ملفات تعريف الارتباط التحليلية",
                            description:
                                "تساعدنا هذه الملفات في فهم كيفية تفاعل المستخدمين مع موقعنا.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "ملفات تعريف الارتباط التسويقية",
                            description:
                                "تتعقب هذه الملفات المستخدمين عبر مواقع الويب لعرض الإعلانات الملائمة.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "معلومات أكثر",
                            description:
                                "لمزيد من التفاصيل، يُرجى زيارة <a class=\"cc__link\" href=\"https://qoolize.com/privacy-policy\">سياسة الخصوصية</a>."
                        }
                    ]
                }
            },
            de: {
                consentModal: {
                    title: "Wir verwenden Cookies!",
                    description:
                        "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern, den Verkehr zu analysieren und personalisierte Inhalte bereitzustellen.",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Nur notwendige",
                    showPreferencesBtn: "Einstellungen verwalten",
                    footer: "<a href=\"https://qoolize.com/privacy-policy\">Datenschutzrichtlinie</a>\n<a href=\"https://qoolize.com/terms-and-conditions\">Allgemeine Geschäftsbedingungen</a>"
                },
                preferencesModal: {
                    title: "Cookie-Einstellungen verwalten",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Nur notwendige",
                    savePreferencesBtn: "Einstellungen speichern",
                    sections: [
                        {
                            title: "Cookie-Nutzung",
                            description:
                                "Cookies helfen uns, die Funktionalität der Website zu gewährleisten, Besucherinteraktionen zu analysieren und personalisierte Inhalte bereitzustellen."
                        },
                        {
                            title: "Unbedingt erforderliche Cookies <span class=\"pm__badge\">Immer aktiviert</span>",
                            description:
                                "Diese Cookies sind für das einwandfreie Funktionieren der Website unerlässlich und können nicht deaktiviert werden.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Funktions-Cookies",
                            description:
                                "Diese Cookies helfen uns, Ihre Einstellungen und Präferenzen zu speichern.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Analyse-Cookies",
                            description:
                                "Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Marketing-Cookies",
                            description:
                                "Diese Cookies verfolgen Benutzer über Websites hinweg, um relevante Werbung anzuzeigen.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "Weitere Informationen",
                            description:
                                "Weitere Informationen finden Sie in unserer <a class=\"cc__link\" href=\"https://qoolize.com/privacy-policy\">Datenschutzerklärung</a>."
                        }
                    ]
                }
            },
            es: {
                consentModal: {
                    title: "¡Usamos cookies!",
                    description:
                        "Utilizamos cookies para mejorar su experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido.",
                    acceptAllBtn: "Aceptar todas",
                    acceptNecessaryBtn: "Solo necesarias",
                    showPreferencesBtn: "Gestionar preferencias",
                    footer: "<a href=\"https://qoolize.com/privacy-policy\">Política de privacidad</a>\n<a href=\"https://qoolize.com/terms-and-conditions\">Términos y condiciones</a>"
                },
                preferencesModal: {
                    title: "Gestionar preferencias de cookies",
                    acceptAllBtn: "Aceptar todas",
                    acceptNecessaryBtn: "Solo necesarias",
                    savePreferencesBtn: "Guardar preferencias",
                    sections: [
                        {
                            title: "Uso de cookies",
                            description:
                                "Las cookies nos ayudan a garantizar la funcionalidad del sitio web, analizar las interacciones de los visitantes y ofrecer contenido personalizado."
                        },
                        {
                            title: "Cookies estrictamente necesarias <span class=\"pm__badge\">Siempre habilitadas</span>",
                            description:
                                "Estas cookies son esenciales para que el sitio web funcione correctamente y no se pueden desactivar.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Cookies de funcionalidad",
                            description:
                                "Estas cookies nos ayudan a recordar tus ajustes y preferencias.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Cookies analíticas",
                            description:
                                "Estas cookies nos ayudan a comprender cómo interactúan los usuarios con nuestro sitio web.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Cookies de marketing",
                            description:
                                "Estas cookies rastrean a los usuarios a través de los sitios web para mostrar anuncios relevantes.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "Más información",
                            description:
                                "Para más detalles, visita nuestra <a class=\"cc__link\" href=\"https://qoolize.com/privacy-policy\">Política de Privacidad</a>."
                        }
                    ]
                }
            },
            fr: {
                consentModal: {
                    title: "Nous utilisons des cookies !",
                    description:
                        "Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et personnaliser le contenu.",
                    acceptAllBtn: "Tout accepter",
                    acceptNecessaryBtn: "Seulement nécessaires",
                    showPreferencesBtn: "Gérer les préférences",
                    footer: "<a href=\"https://qoolize.com/privacy-policy\">Politique de confidentialité</a>\n<a href=\"https://qoolize.com/terms-and-conditions\">Conditions générales</a>"
                },
                preferencesModal: {
                    title: "Gérer les préférences en matière de cookies",
                    acceptAllBtn: "Tout accepter",
                    acceptNecessaryBtn: "Seulement nécessaires",
                    savePreferencesBtn: "Enregistrer les préférences",
                    sections: [
                        {
                            title: "Utilisation des cookies",
                            description:
                                "Les cookies nous aident à assurer le bon fonctionnement du site, analyser l'interaction des visiteurs et proposer un contenu personnalisé."
                        },
                        {
                            title: "Cookies strictement nécessaires <span class=\"pm__badge\">Toujours activés</span>",
                            description:
                                "Ces cookies sont essentiels au bon fonctionnement du site et ne peuvent pas être désactivés.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Cookies de fonctionnalité",
                            description:
                                "Ces cookies nous aident à nous souvenir de vos paramètres et préférences.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Cookies d'analyse",
                            description:
                                "Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Cookies marketing",
                            description:
                                "Ces cookies suivent les utilisateurs sur différents sites Web afin d'afficher des publicités pertinentes.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "Plus d'informations",
                            description:
                                "Pour plus de détails, veuillez consulter notre <a class=\"cc__link\" href=\"https://qoolize.com/privacy-policy\">Politique de confidentialité</a>."
                        }
                    ]
                }
            },
            it: {
                consentModal: {
                    title: "Utilizziamo i cookie!",
                    description:
                        "Utilizziamo i cookie per migliorare la tua esperienza di navigazione, analizzare il traffico del sito e personalizzare i contenuti.",
                    acceptAllBtn: "Accetta tutti",
                    acceptNecessaryBtn: "Solo necessari",
                    showPreferencesBtn: "Gestisci preferenze",
                    footer: "<a href=\"https://qoolize.com/privacy-policy\">Informativa sulla privacy</a>\n<a href=\"https://qoolize.com/terms-and-conditions\">Termini e condizioni</a>"
                },
                preferencesModal: {
                    title: "Gestisci le preferenze sui cookie",
                    acceptAllBtn: "Accetta tutti",
                    acceptNecessaryBtn: "Solo necessari",
                    savePreferencesBtn: "Salva preferenze",
                    sections: [
                        {
                            title: "Utilizzo dei cookie",
                            description:
                                "I cookie ci aiutano a garantire la funzionalità del sito, analizzare l'interazione dei visitatori e fornire contenuti personalizzati."
                        },
                        {
                            title: "Cookie strettamente necessari <span class=\"pm__badge\">Sempre abilitati</span>",
                            description:
                                "Questi cookie sono essenziali per il corretto funzionamento del sito e non possono essere disabilitati.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Cookie di funzionalità",
                            description:
                                "Questi cookie ci aiutano a ricordare le tue impostazioni e preferenze.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Cookie analitici",
                            description:
                                "Questi cookie ci aiutano a capire come gli utenti interagiscono con il nostro sito.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Cookie di marketing",
                            description:
                                "Questi cookie tracciano gli utenti attraverso i siti Web per mostrare annunci pertinenti.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "Ulteriori informazioni",
                            description:
                                "Per ulteriori dettagli, visita la nostra <a class=\"cc__link\" href=\"https://qoolize.com/privacy-policy\">Informativa sulla privacy</a>."
                        }
                    ]
                }
            }
        }
    }
});
