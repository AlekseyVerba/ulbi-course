import { useTranslation } from 'react-i18next'
import './NotFoundPage.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export const NotFoundPage = () => {
    const { t } = useTranslation()

    return (
        <div className={classNames('Not-found')}>
            {t('Страница не найдена')}
        </div>
    )
}
