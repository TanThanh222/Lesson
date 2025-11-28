import styled from "styled-components";
import MovieCard from "./MovieCard";

const NewReleaseList = ({ movies, selectedId, handleSelectMovie }) => {
    return (
        <NewReleaseWrapper>
            <div className="title">New Release</div>
            <div className="list">
                {movies
                    .slice(1)
                    .map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            isActive={movie.id === selectedId}
                            handleSelectMovie={handleSelectMovie}
                        />
                    ))}
            </div>
        </NewReleaseWrapper>
    );
};

export default NewReleaseList;

const NewReleaseWrapper = styled.section`
  margin-top: 15px;

  .title {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    color: #ffffff;
    margin-bottom: 16px;
  }

  .list {
    display: flex;
    gap: 30px;
    overflow-x: auto;
    padding-bottom: 16px;
  }
`;
