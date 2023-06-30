import React from 'react';
import { UserProfile } from '../UserProfile';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const StyledDiv = styled.div`
    display:flex;
    gap: 20px;
    margin: 20px;
`

export const Navbar = ()=>{
    const navigate = useNavigate();
    const goToExplore=()=>{
        navigate("/explore");
    }
    return(
        <div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <StyledDiv>
            <div onClick={goToExplore}>Explore</div>
            <div>Practice</div>
            <div>Compete</div>
            <div>Chats</div>
            <div>Connect</div>
            </StyledDiv>
            <UserProfile name={'Yaswanth'} email={'yaswanth.perumalla@go-yubi.com'}/>
        </div>
            <hr/>
        </div>
    )
}