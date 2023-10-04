import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

export const ButtonBug = () => {
    const { t } = useTranslation()

    const [isError, setError] = useState(false)

    const onThrow = () => {
        setError(true)
    }

    useEffect(() => {

        if (isError) {
            throw new Error('')
        }

    }, [isError])

    return (
        <Button onClick={onThrow}>
            {t('Вызвать баг')}
        </Button>
    )

}
