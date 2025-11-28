import styled from "styled-components";

const MovieCard = ({ movie, isActive, handleSelectMovie }) => {
  return (
    <Card active={isActive} onClick={() => handleSelectMovie(movie.id)}>
      <PosterWrapper>
        <img src={movie.image} alt={movie.movieName} className="thumb" />
        <p className="episode">Episode {movie.episode}</p>
      </PosterWrapper>

      <p className="name">{movie.movieName}</p>
    </Card>
  );
};

export default MovieCard;

const Card = styled.button`
  width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;

  &:hover {
    transform: translateY(-4px);
    transition: 0.2s;
  }

  .name {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
  }
`;

const PosterWrapper = styled.div`
  position: relative;
  width: 170px;
  height: 284px;
  border-radius: 12px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 40%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0)
    );
    pointer-events: none;
    z-index: 1;
  }

  .episode {
    position: absolute;
    left: 40px;
    bottom: 0px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    z-index: 2; 
  }
`;
