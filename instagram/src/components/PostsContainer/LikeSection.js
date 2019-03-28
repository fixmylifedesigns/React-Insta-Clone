import React from 'react';
import styled from "styled-components";

const LikesSection = styled.div`
display: flex;
`
const LikeSectionWrapper = styled.div `
  height: 10px;
  width: 10px;
  margin: 10px;
`



const Strong = styled.strong``

const LikeSection = props => {
  return [
    <LikesSection
      key="likes-icons-container"
      onClick={props.incrementLike}
    >
      <LikeSectionWrapper>
        <i className="far fa-heart" />
      </LikeSectionWrapper>

      <LikeSectionWrapper>
        <i className="far fa-comment" />
      </LikeSectionWrapper>
    </LikesSection>,

    <LikesSection key="likes-container">
      <LikeSectionWrapper>
        <Strong>{props.likes}</Strong>
        </LikeSectionWrapper>
    </LikesSection>
  ];
};

export default LikeSection;
