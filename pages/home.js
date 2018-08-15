import Layout from '../components/Layout';

const Home = () => {
  const homeLayout = (
    <div className="content">
      <div className="home-main">
        <div className="nigda-text-box">
          <p className="p-you">
            <span className="primary-color-words">니</span>
            가
          </p>
          <p className="p-draw">
            <span className="primary-color-words">그</span>
            리고
          </p>
          <p className="p-wanna">싶은거</p>
          <p className="p-everything">
            <span className="primary-color-words">다</span>
            그려
          </p>
        </div>
      </div>
      <div className="home-sub">
        <p>
          <span className="bold-words">니그다</span>
          는 정기적으로 랜덤한 주제로 자유롭게 그림을 그리고 이를 서로 공유하는 모임입니다.
        </p>
      </div>
      <div className="home-gallery" />
    </div>
  );
  return (
    <Layout content={homeLayout} />
  );
};

export default Home;
