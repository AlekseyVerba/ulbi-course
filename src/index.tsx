import { render } from 'react-dom';
import { App } from 'app/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { ThemeProvider } from './app/providers/ThemeProvider/ui/themeProvider'
import 'shared/config/i18n/i18n'

render(
    (
        <Router>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </Router>
    ), document.getElementById('root'),
)
