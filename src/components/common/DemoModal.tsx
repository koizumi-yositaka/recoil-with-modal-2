import { ReactNode } from 'react'
import styled from 'styled-components'

const Div_Container = styled.div`
    
`
const Div_Contents=styled.div`
    padding: 8px 24px;
`
const Section_Inner=styled.section `
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 462px;
    border: 1px solid black;
    border-radius: 10px;
`
const H_Header=styled.h2`
    font-size: 20px;
    padding: 16px 24px;
`
const Button_Base=styled.button`
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    border: none;
`

const Button_IconClose = styled(Button_Base)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    font-size: 30px;
    height: 30px;
    width: 30px;
    border-radius: 10px;
    cursor: pointer;
    :hover{
        background-color: #e2e8f0;
    }
`

const Overlay = styled.div`
	background-color: rgba(0, 0, 0, .5);
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2000;
`;


export interface ModalProps{
    headerTitle:string,
  children: ReactNode,
  closeModal:()=>void
}



const DemoModal = ({children,headerTitle,closeModal}:ModalProps) => {


  return (

    <Overlay onClick={closeModal}>
    <Div_Container>
        <Section_Inner onClick={(e) => e.stopPropagation()}>
            <H_Header>{headerTitle}</H_Header>
            <Button_IconClose onClick={closeModal}>✖️</Button_IconClose>
            <Div_Contents>
                {children}
            </Div_Contents>
        </Section_Inner>
    </Div_Container>
    </Overlay>
  )
}

export default DemoModal