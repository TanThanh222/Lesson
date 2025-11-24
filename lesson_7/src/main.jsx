import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')).render(
  <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#27485e',
          borderRadius: 6,
          activeBorderColor: '#27485e'
        },
      }}
    >
      <App/>
    </ConfigProvider>
)
