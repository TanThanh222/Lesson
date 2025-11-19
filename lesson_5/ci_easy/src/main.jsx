import { createRoot } from 'react-dom/client'
import 'antd/dist/reset.css'
import './index.css'
import App from './App.jsx'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#7A5CFA',
        borderRadius: 6,
        activeBorderColor: '#7A5CFA'
      },
    }}
  >
    <App/>
  </ConfigProvider>
)
