import i18n from "i18next"
import { initReactI18next } from "react-i18next"


i18n.use(initReactI18next).init({
    resources: {
        kg:{
            translation: {
                logo: "Эксклюзив"
            }
        },
        en:{
            translation: {
                logo: "Excluzive"
            }
        },
        rus:{
            translation: {
                logo: "Эксклюсив"
            }
        },
    }
})