import styled from "styled-components";

export default function ExploreBanner({ movie, description }) {
  return (
    <ExploreWrapper>
      <h2 className="section-title">Explore</h2>
      <p className="section-subtitle">What are you gonna watch today ?</p>

      <div className="banner">
        <img
          src={movie.image}
          alt={movie.movieName}
          className="banner-img"
        />

        <div className="banner-overlay">
          <div className="banner-content">
            <h3 className="banner-title">{movie.movieName}</h3>
            <p className="banner-desc">{description}</p>
          </div>
        </div>
      </div>
    </ExploreWrapper>
  );
}

const ExploreWrapper = styled.section`
  margin-top: 40px;
  color: #fff;

  .section-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .section-subtitle {
    font-size: 22px;
    font-weight: 400;
    color: #868686;
  }

  .banner {
    margin-top: 24px;
    position: relative;
    width: 100%;
    border-radius: 12px;
    height: 400px;
    overflow: hidden;
  }

  .banner-img {
    width: 100%;     
    display: block;
    height: 100%;
    object-fit: cover;
  }

  .banner-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    display: flex;
    align-items: center;
  }

  .banner-content {
    position: relative;
    z-index: 2;
    max-width: 520px;
    padding-left: 50px;
    margin-top: 150px;   
  }

  .banner-title {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .banner-desc {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #ffffff;
    margin-top: -5px;
  }
`;

