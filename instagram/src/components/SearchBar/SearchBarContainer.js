import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import styled from "styled-components";

const SearchBarWrapper = styled.div`
border-bottom: 1px solid #3333;
height: 80px;
line-height: 70px;
display: flex;
justify-content: space-between;
background: #ffffff;
`
const ImageWrapper = styled.div`
height: 50px;
`
const LogoImage = styled.img`
height: 100%;
`
const SearchInput = styled.input`
text-align: center;
border-radius: 5px;
border: 1px solid rgb(218, 218, 218);
`
const SocialWrapper  = styled.div`
display: flex;
`

const Social  = styled.div`
width: 50px;
`


const SearchBar = props => {
  return (
    <SearchBarWrapper>
      <ImageWrapper>
        <LogoImage alt="instagram logo" src={IGLogo} />
      </ImageWrapper>
      <div>
        <SearchInput type="search" 
        placeholder="Search" 
        onKeyDown={props.searchPosts}
        />
      </div>
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
