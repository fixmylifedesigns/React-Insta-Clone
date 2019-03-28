import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import styled from "styled-components";
import camera from '../../assets/camera-logo.svg';

const SearchBarWrapper = styled.div`
border-bottom: 1px solid #3333;
height: 80px;
line-height: 70px;
display: flex;
justify-content: space-between;
background: #ffffff;
width:100%;
`
const ImageWrapper = styled.div`
display:flex;
width:70px;
height: 50px;
align-content:center;
justify-content:flex-start;
margin-left:20px;
`
const LogoImage = styled.img`
height: 100%;
`

const SearchDiv = styled.div`
justify-content:center;
`
const SearchInput = styled.input`
display
text-align: center;
border-radius: 5px;
border: 1px solid rgb(218, 218, 218);

`
const SocialWrapper  = styled.div`
display: flex;
justify-content:flex-end;
margin-right:20px;
`

const Social  = styled.div`
width: 50px;
`
const Camera = styled.img`
width:100%;
margin-right:10px
border-right:1px solid black;
`


const SearchBar = props => {
  return (
    <SearchBarWrapper>
      <ImageWrapper>
        <Camera src={camera} />
        <LogoImage alt="instagram logo" src={IGLogo} />
      </ImageWrapper>
      <SearchDiv>
        <SearchInput type="search" 
        placeholder="Search" 
        onKeyDown={props.searchPosts}
        />
      </SearchDiv>
      <SocialWrapper>
        <Social>
          <i className="far fa-compass" />
        </Social>
        <Social>
          <i className="far fa-heart" />
        </Social>
        <Social>
          <i className="far fa-user-circle" />
        </Social>
      </SocialWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
