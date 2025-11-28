import styled from "styled-components";

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
    line-height: 40px;
    color: #868686;
  }

  .banner {
    margin-top: 24px;
    position: relative;
    width: 100%;
    border-radius: 12px;
  }

  .banner-img {
    width: 100%;
    height: auto;       
    display: block;
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
    margin-top: 200px;   
  }

  .banner-title {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .banner-desc {
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    color: #ffffff;
  }
`;

export default function ExploreBanner({ movie }) {
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
                        <p className="banner-desc">
                            Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis.
                        </p>

                    </div>
                </div>
            </div>
        </ExploreWrapper>
    );
}