import "./Home.css"; // Import your Home component's CSS here
import ThreeDImage from "./IndianMap";
import Square from "./Sqaure";
import Footer from "./Footer";
import ImageGallery from "./ImageGallery";
import Box from "./Box";
import Header from "./Header";
import JoinUs from "./JoinUs";
import ImageDisplay from "./ImageDisplay";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div className="home">
      <NavBar></NavBar>

      <br />
      <Header></Header>

      <div
        className="container mt-5"
        style={{
          display: "flex",
          alignItems: "flex-start",
          backgroundImage: 'url("/background.jpg")', // Replace "your-image.jpg" with the actual image file name
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "2000px", // You can adjust this property based on your preference
        }}
      >
        <div
          className="container mt-5"
          style={{ display: "flex", alignItems: "flex-start" }}
        >
          {/* First section of squares (before image) */}
          <div className="mr-3">
            <section className="container">
              <div className="row">
                {/* First square */}
                <div className="col">
                  <Square
                    color="#4ef28f"
                    border="2px solid #4ef28f"
                    text="62.5M Indians consume Alcohol."
                    top="-20px"
                    left="390px"
                    width="200px"
                    height="200px"
                    textColor="white"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>
                {/* Second square */}
                <div className="col">
                  <Square
                    color="#4ef28f"
                    border="3px solid #4ef28f"
                    text="8.75 millions Indian use Cannabis."
                    width="200px"
                    height="200px"
                    top="-180px"
                    left="160px"
                    textColor="white"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>
                {/* Third square */}
                <div className="col">
                  <Square
                    color="#CCDEDC"
                    border="4px solid #CCDEDC"
                    text="2 millions Indians use Opiates."
                    width="190px"
                    height="190px"
                    top="-177px"
                    left="100px"
                    textColor="black"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>

                {/* fourth */}
                <div className="col">
                  <Square
                    color="#CCDEDC"
                    border="4px solid #CCDEDC"
                    text="2 millions Indians use Opiates."
                    width="170px"
                    height="170px"
                    top="-150px"
                    left="200px"
                    textColor="black"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>

                {/* fifth */}
                <div className="col">
                  <Square
                    color="#8CC8D2"
                    border="4px solid #8CCD2"
                    text="2 millions Indians use Opiates."
                    width="150px"
                    height="150px"
                    top="-180px"
                    left="380px"
                    textColor="white"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>

                {/* fifth */}
                <div className="col">
                  <Square
                    color="#8CC8D2"
                    border="4px solid #8CCD2"
                    text="2 millions Indians use Opiates."
                    width="130px"
                    height="130px"
                    top="-110px"
                    left="400px"
                    textColor="white"
                    fontSize="22px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Second section with ThreeDImage component */}
          {/* <div className="mr-3">
          <section className="image-section">
            <div className="image-container">
              <ThreeDImage />
            </div>
          </section>
        </div> */}

          <ImageDisplay
            src={"map.png"}
            alt={"map"}
            width="600px"
            height="600px"
            top="150px"
            left="0"
          ></ImageDisplay>

          {/* Third section of squares (after image) */}
          <div>
            <section className="container">
              <div className="row">
                {/* Fourth square */}
                <div className="col">
                  <Square
                    color="#048785"
                    border="2px solid #048785"
                    text="Fourth Square"
                    top="-20px"
                    left="-210px"
                    width="200px"
                    height="200px"
                    opacity={0.8}
                    textColor="white"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>
                {/* Fifth square */}
                <div className="col">
                  <Square
                    color="#048785"
                    border="3px solid #048785"
                    text="Fifth Square"
                    height="200px"
                    width="200px"
                    top="-70px"
                    left="10px"
                    opacity={0.8}
                    textColor="white"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>
                {/* Sixth square */}
                <div className="col">
                  <Square
                    color="#005271"
                    border="4px solid #005271"
                    text="Sixth Square"
                    height="200px"
                    width="200px"
                    left="20px"
                    top="-40px"
                    textColor="white"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>

                <div className="col">
                  <Square
                    color="#005271"
                    border="4px solid #005271"
                    text="Sixth Square"
                    height="200px"
                    width="200px"
                    top="-10px"
                    left="-90px"
                    textColor="white"
                    fontSize="25px"
                    fontFamily="Roboto Bold"
                    fontWeight="Bold"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* Rest of your code */}
      </div>

      {/* <ImageDisplay
        src={"addict1.png"}
        alt={"addict2"}
        width="600px"
        height="250px"
        top="-380px"
        left="-250px"
      ></ImageDisplay> */}

      <div className="box-container">
        <Box
          image="man.jpg"
          text="Are you a concerned family member/Friend? Find treatment and facilities here."
          link={undefined}
        />
        <Box
          image="guy.jpg"
          text="Are you a De-Addiction Facility/Nasha Mukti Kendra? Join us in our mission to make India Drug Free"
          link={undefined}
        />
        <Box
          image="MoSJE.png"
          text="Leverage our Huge Dataset to analyzie the nasha mukti progess nation wide."
          link={undefined}
        />
      </div>

      <br />

      <br />
      {/* <ShowFacilities></ShowFacilities> */}

      <br />

      <JoinUs></JoinUs>
      <br />
      <br />
      <ImageGallery></ImageGallery>

      <br />
      <Footer></Footer>
    </div>
  );
};

export default Home;
