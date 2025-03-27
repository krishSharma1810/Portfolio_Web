import styled from "styled-components"

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
  )
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    max-width: 20rem;
    height: 254px;
    background: transparent;
    transition: all 0.4s;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.705);
    font-size: 30px;
    font-weight: 900;
    padding: 2rem;
    color: white;
  }

  @media (max-width: 768px) {
    .card {
      width: 100%;
      height: 220px;
      font-size: 24px;
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .card {
      height: 200px;
      font-size: 20px;
      padding: 1rem;
    }
  }

  .card:hover {
    border-radius: 15px;
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.705);
    background: rgb(0, 0, 0);
  }

  @media (max-width: 768px) {
    .card:hover {
      transform: scale(1.05);
    }
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
  }

  @media (max-width: 480px) {
    .card:hover .second-content {
      font-size: 0.875rem;
    }
  }`

export default Card

