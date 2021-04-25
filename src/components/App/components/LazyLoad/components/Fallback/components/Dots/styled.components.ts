import styled, { keyframes } from "assets/themes";

export const bounce = keyframes`
  0% {
    transform: translateY(0px);
  }
  50%{
    transform: translateY(24px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Dot = styled.div<{ delay: number }>`
  width: 8px;
  height: 16px;
  border-radius: 32px;
  background: ${(props) => props.theme.colors.accent};
  animation: ${bounce} 0.75s ease-in-out infinite ${({ delay }) => delay}s
    alternate;
`;

export const DotsWrapper = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: row;
`;
