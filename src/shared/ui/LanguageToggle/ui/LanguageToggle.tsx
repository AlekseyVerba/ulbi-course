import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemeEnum } from 'shared/ui/Button';

interface LanguageToggleProps {
    className?: string
}

export const LanguageToggle: FC<LanguageToggleProps> = ({ className }) => {
    const { t, i18n } = useTranslation()

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames(className)}
            onClick={changeLanguage}
            theme={ButtonThemeEnum.INVERTED_BACKGROUND}
        >
            {t('Язык')}
        </Button>
    )
}
