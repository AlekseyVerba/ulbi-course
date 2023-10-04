import { Button, ButtonThemeEnum } from 'shared/ui/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import './PageError.scss'
import { useTranslation } from 'react-i18next'

export const PageError = () => {
    const { t } = useTranslation()

    const updatePage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    return (
        <div className={classNames('PageError')}>
            {t('Произошла неожиданная ошибка')}
            <br />
            <div>
                <Button onClick={updatePage} theme={ButtonThemeEnum.FULL}>
                    {t('Обновить страницу')}
                </Button>
            </div>
        </div>
    )
}
