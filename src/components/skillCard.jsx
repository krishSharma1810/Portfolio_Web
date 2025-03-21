import React from 'react';
import styled from 'styled-components';

const Card = ({ Skills }) => {
    return (
      <>
        {Skills.map((Skill, index) => (
          <StyledWrapper key={index}>
            <div className="card">
              <div className="first-content">
                <span>{Skill.name}</span>
              </div>
              <div className="second-content">
                <span>{Skill.content}</span>
              </div>
            </div>
          </StyledWrapper>
        ))}
      </>
    );
  };
  

const StyledWrapper = styled.div`
  .card {
    width: 20rem;
    height: 254px;
    background: transparent;
    transition: all 0.4s;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px  rgba(0, 0, 0, 0.705);
    font-size: 30px;
    font-weight: 900;
    padding: 2rem ;
  }

  .card:hover {
    border-radius: 15px;
    cursor: pointer;
    transform: scale(1.2);
    box-shadow: 0px 0px 10px 5px  rgba(0, 0, 0, 0.705);
    background: rgb(0, 0, 0);
  }

  .first-content {
    height: 100%;
    width: 100%;
    transition: all 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    border-radius: 15px;
  }

  .card:hover .first-content {
    height: 0px;
    opacity: 0;
  }

  .second-content {
    height: 0%;
    width: 100%;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    transition: all 0.4s;
    font-size: 0px;
    transform: rotate(90deg) scale(-1);
  }

  .card:hover .second-content {
    opacity: 1;
    height: 100%;
    font-size: 1rem;
    transform: rotate(0deg);
  }`;

export default Card;
