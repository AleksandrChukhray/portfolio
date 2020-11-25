import App from 'next/app';
import { appWithTranslation } from '../i18n';
import '../styles/main.scss';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp);