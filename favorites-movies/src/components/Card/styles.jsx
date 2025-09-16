import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`;

export const Card = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1a1a1a;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;

  &.hover {
    transform: translateY(-5px);
    opacity: 1;
  }
`;

export const MoviePoster = styled.div`
  position: relative;
  aspect-ratio: 2/3;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: white;
  font-size: 1.2rem;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  cursor: pointer;

  &.hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &.active {
    color: #ff4757;
  }
`;

export const MovieOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.8)
  );
  opacity: 0;
  transition: opacity 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  opacity: 1;
`;

export const MovieInfo = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-size: 1rem;
    margin: 0;
  }

  p {
    color: #999;
    font-size: 0.9rem;
  }
`;
