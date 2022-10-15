import React from 'react'
import styled from "styled-components"
export default function NavBar() {

    const Container = styled.div`
        width:100%;
    `
    const Wrapper = styled.div`  
        font-size:18px;
        display:flex;
        justify-content:space-between;
        align-items:center;
    `

    const NavItem = styled.div`
        flex:1;
        padding:20px 30px;
    `
    const Input = styled.input`
        padding:2px;
    `

    const Announcement = styled.section`
        padding:10px;
        color:white;
        text-align:center;
        background-color:#3498db;
    `

    return (
        <Container>
            <Announcement>
                50% off on all products
            </Announcement>
            <Wrapper>
                <NavItem>
                    <Input placeholder='Search...' />
                </NavItem>
                <NavItem style={{
                    fontWeight: "bold",
                    fontSize: 30,
                    textAlign: 'center'
                }}>WsCube Tech</NavItem>
                <NavItem style={{ textAlign: "right" }}>
                    Cart
                </NavItem>
            </Wrapper>
        </Container>
    )
}
