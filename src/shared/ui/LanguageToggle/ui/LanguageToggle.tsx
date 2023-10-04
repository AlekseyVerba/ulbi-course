import { useTranslation } from 'react-i18next';
import { Button, ButtonThemeEnum } from 'shared/ui/Button';

export const LanguageToggle = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button onClick={changeLanguage} theme={ButtonThemeEnum.CLEAR}>
            {t('Язык')}
        </Button>
    )
}
