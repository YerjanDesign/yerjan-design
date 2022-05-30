import '../styles/globals.css'
import Layout from '../components/Layout'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#151515',
    },
    secondary: {
      main: '#cccccc',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          borderRadius: '5px',
        }
      }
    },
  }
})

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
}

export default MyApp
