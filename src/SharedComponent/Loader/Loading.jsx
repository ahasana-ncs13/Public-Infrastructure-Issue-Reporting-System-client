import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <StyledWrapper>
      <div className="loader" role="status" aria-label="Loading"></div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9fafb; /* light neutral background */

  .loader {
    width: 50px;
    height: 50px;
    position: relative;
  }

  .loader::before {
    content: "";
    width: 50px;
    height: 6px;
    background: rgba(37, 99, 235, 0.3); /* blue shadow */
    position: absolute;
    top: 62px;
    left: 0;
    border-radius: 50%;
    animation: shadow 0.6s linear infinite;
  }

  .loader::after {
    content: "";
    width: 100%;
    height: 100%;
    background: #2563eb; /* primary blue */
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 6px;
    animation: jump 0.6s linear infinite;
  }

  @keyframes jump {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    25% {
      transform: translateY(10px) rotate(22deg);
    }
    50% {
      transform: translateY(20px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 30px;
    }
    75% {
      transform: translateY(10px) rotate(68deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }

  @keyframes shadow {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
  }
`;

export default Loading;
