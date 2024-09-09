import styled from 'styled-components'
import useToast from '../../hooks/useToast'

const Div_Toast = styled.div`
    position: fixed;
    top: 90vh;
    left: 3vw;
    width: 94vw;
    height: 5vh;
    border-radius: 10px;
    text-align: center;
    justify-content: center;
    display: flex;
    color: black;
    background-color: aliceblue;
    font-size: 1em;
`



export const DemoToast = () => {
    const {toastState}=useToast()
    return (
        <Div_Toast>
            <p>{toastState?.message}</p>
        </Div_Toast>
    )
}

