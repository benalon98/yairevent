import Data from "@data/sections/hero-1.json";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "@/src/components/sections/firebase";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./Loading.json";
import successAnimation from "./success.json";

const HeroOne = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    numberOfPeople: 1,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.fullName.length < 2) {
      setErrorMessage("אנא הכנס שם מלא");
      return;
    }
    setIsLoading(true); // Start the loading process
    setTimeout(async () => {
      try {
        await addDoc(collection(db, "registrations"), formData);
        // Handle success here (e.g., set a success message)
        setSuccessMessage("מעולה :) האישור שלך התקבל בהצלחה, ניפגש באירוע");
      } catch (error) {
        alert("Error submitting data: " + error);
        // Optionally handle errors more specifically here
      } finally {
        setIsLoading(false); // Stop loading after Firestore operation and delay
      }
    }, 3000); // Delay of 3 seconds
  };

  return (
    <>
      {/* banner */}
      <section className="mil-side-banner mil-center">
        <div className="mil-banner-top mil-up"></div>

        <div className="mil-banner-title">
          <div className="mil-upper mil-dark mil-up mil-mb-30">
            {Data.subtitle}
          </div>
          <div className="mil-upper mil-dark mil-up mil-mb-30">
            אנא אשרו הגעתכם
          </div>
          <h1
            className="mil-up mil-mb-30"
            dangerouslySetInnerHTML={{ __html: Data.title }}
          />
          <p className="mil-upper mil-dark mil-up">{Data.description}</p>
        </div>

        {isLoading ? (
          <Lottie animationData={groovyWalkAnimation} loop={true} />
        ) : !isLoading && successMessage ? (
          <section
            style={{ marginTop: "3rem" }}
            className="mil-side-banner mil-center"
          >
            <div
              style={{
                color: "#1DB954",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
              className="mil-upper mil-dark mil-up mil-mb-30"
            >
              {successMessage}
            </div>
            <Lottie
              style={{ position: "absolute", top: 0, zIndex: 5 }}
              animationData={successAnimation}
              loop={true}
            />
          </section>
        ) : (
          <div style={{ marginBottom: 100 }}>
            <div
              style={{
                color: "red",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
              className="mil-upper mil-dark mil-up mil-mb-30"
            >
              {errorMessage}
            </div>
            <form onSubmit={handleSubmit} style={{ direction: "rtl" }}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="שם מלא"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>כמות אנשים</span>
                <span>{formData.numberOfPeople}</span>
              </div>
              <input
                type="range"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
                min={1}
                style={{ direction: "ltr" }}
                placeholder="כמות אנשים"
              />

              <button
                type="submit"
                style={{
                  background: "black",
                  padding: "10px 20px",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  marginBottom: 20,
                  cursor: "pointer",
                }}
              >
                אישור
              </button>
            </form>
          </div>
        )}
      </section>
    </>
  );
};
export default HeroOne;
