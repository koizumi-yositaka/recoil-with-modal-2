

import { RecoilRoot } from 'recoil'
import './App.css'
import { DisplayInfo } from './components/DisplayInfo'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from './components/layout/Layout'


function App() {

  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 5, retryDelay: 1000 } }
  })


  
  
  return (
    <QueryClientProvider client={queryClient}>

    <RecoilRoot>
      <Layout header={<h1>商品管理画面</h1>} body={<DisplayInfo/>}/>

    </RecoilRoot>

    </QueryClientProvider>
    

  )
}

export default App
