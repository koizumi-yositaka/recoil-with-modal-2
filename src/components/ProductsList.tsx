import { useIsFetching } from '@tanstack/react-query'
import { useProductIds, useProducts } from '../service/queries'
import styled from 'styled-components';

// カード全体を並べるコンテナのスタイル
const CardContainer = styled.div`
  display: flex;
  gap: 20px; /* カード間のスペース */
  padding: 20px;
  flex-wrap: wrap; /* 横幅が足りなくなった場合、次の行に折り返す */
`;

// 各カードのスタイル
const Card = styled.div`
  width: 200px;
  height: 300px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover{
    border: 1px solid #44b3e7;
    
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: #333;
`;

const CardContent = styled.div`
  font-size: 14px;
  color: #666;
  text-align: center;
  padding: 10px;
`;







export const ProductsList = () => {

    const useGetProductIds = useProductIds()
    const useGetProducts = useProducts(useGetProductIds.data)
    const isFetching=useIsFetching()
    if(isFetching>0) return <p>"読み込み中"</p>

  return (

 
        <CardContainer>
        {
            useGetProducts.map(({data})=>{
                return (
                    data && data.id && data.name &&
                    <Card key={data.name + data.id}>
                        <CardTitle>{data.name}</CardTitle>
                        <CardContent>
                            <p>{data.description}</p>
                            
                            <p>個数:{data.quantity}</p>
                            <p>値段:{data.price}円</p>
                            
                        </CardContent>
                    </Card>
                )
            })
        }

        </CardContainer>

    
  )
}
