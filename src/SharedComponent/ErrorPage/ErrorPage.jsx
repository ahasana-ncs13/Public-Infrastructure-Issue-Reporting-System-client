import React from "react";
import { Link } from "react-router";
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const ErrorPage = () => {
  return (
    <Wrapper>
      <Card>
        {/* Illustration */}
        <Illustration>
          <svg 
            width="220"
            height="180"
            viewBox="0 0 220 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Buildings */}
            <rect x="20" y="70" width="40" height="80" rx="4" fill="#93C5FD" />
            <rect x="70" y="40" width="50" height="110" rx="4" fill="#60A5FA" />
            <rect x="130" y="60" width="45" height="90" rx="4" fill="#3B82F6" />

            {/* Windows */}
            <rect x="30" y="85" width="8" height="10" fill="#E0F2FE" />
            <rect x="45" y="85" width="8" height="10" fill="#E0F2FE" />
            <rect x="85" y="60" width="8" height="10" fill="#E0F2FE" />
            <rect x="100" y="60" width="8" height="10" fill="#E0F2FE" />

            {/* Road */}
            <rect x="0" y="150" width="220" height="10" fill="#CBD5E1" />

            {/* Warning Sign */}
            <polygon
              points="110,110 120,140 100,140"
              fill="#F59E0B"
            />
            <rect x="108" y="120" width="4" height="10" fill="#1F2937" />
          </svg>
        </Illustration>

        {/* Text */}
        <Title className="text-rose-800">404</Title>
        <Subtitle className="text-rose-600">Page Not Found</Subtitle>
        <Description>
          The page you are looking for doesn’t exist or may have been moved.
          Please return to the home page or explore reported issues.
        </Description>

        {/* Buttons */}
        <ButtonGroup>
          <StyledLink className="bg-primary" to="/">Go Home</StyledLink>
        </ButtonGroup>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9fafb;
  padding: 16px;
`;

const Card = styled.div`
  text-align: center;
  max-width: 480px;
  animation: ${fadeUp} 0.6s ease;
`;

const Illustration = styled.div`
  margin-bottom: 20px;
  animation: ${bounce} 2s ease-in-out infinite;
`;

const Title = styled.h1`
  font-size: 96px;
  font-weight: 800;
  margin-bottom: 8px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: #6b7280;
  margin-bottom: 24px;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  color: white;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
`;



export default ErrorPage;
