import React, { useState } from 'react'
import styled from "styled-components"
import sliders from '../Data/sliders'
export default function Slider() {
    const [current, setCurrnet] = useState(0)
    const Container = styled.div`
        width:100%;
        height:100vh;
        position:relative;
        overflow:hidden;
    `
    const Wrapper = styled.div`  
        font-size:18px;
        height:100vh;
        display:flex;
        justify-content:space-between;
        align-items:center;
        transition: 1s;
        flex: 1;
        transform:  translateY(${(props) => props.current * -100 + "vh"});
        &:hover .title{
            color:red;
        }
        
    `
    const Arrow = styled.span`
        background: #95a5a6;
        border-radius:50%;
        width:40px;
        height:40px;
        font-size:30px;
        display:flex;
        justify-content:center;
        align-items:center;
        color:white;
        cursor: pointer;
        position:absolute;
        top:0;
        bottom:0;
        left:${props => props.direction == "1" && "15px"};
        right:${props => props.direction == "0" && "15px"};
        margin:auto;
        z-index: 9999;
        &:hover{
            background: #224245; 
        }
    `

    const ImgBox = styled.div`
        flex: 1;
        height:100%;
    `
    const ContentBox = styled.div`
        flex: 1;
        height:100%;
        padding:15px;
        box-sizing:border-box;
        display:flex;
        flex-direction:column;
    `
    const Img = styled.img`
        padding:15px;
        box-sizing:border-box;
        width:100%;
        height:100%
    `

    const contentCss = {
        marginTop: 15
    }
    // 1: left 0: right

    const changeHandler = (dir) => {
        let newCurrent;
        if (dir === "left") {
            newCurrent = current === sliders.length - 1 ? 0 : current + 1
        } else {
            newCurrent = current === 0 ? sliders.length - 1 : current - 1
        }
        setCurrnet(newCurrent)
    }
    const Sliders = sliders.map(
        (data) => {
            return (<Wrapper current={current}>
                <ImgBox>
                    {/* <img src="https://picsum.photos/200/300" alt="" /> */}
                    <Img src={data.src} alt='Missing Image' />
                </ImgBox>
                <ContentBox>
                    <h2 style={contentCss} className="title">
                        {data.title}
                    </h2>
                    <p style={contentCss}>
                        {data.desc}
                    </p>
                    <button style={contentCss}>Show Now!</button>
                </ContentBox>
            </Wrapper>)
        }
    )
    return (
        <Container>
            <Arrow direction="1" onClick={() => changeHandler("left")}> {"^"} </Arrow>
            {
                Sliders
            }
            <Arrow direction="0" onClick={() => changeHandler("right")}> {">"} </Arrow>
        </Container>
    )
}
