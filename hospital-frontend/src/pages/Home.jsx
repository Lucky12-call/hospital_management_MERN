import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";

const Home = () => {
  return (
    <div>
      <Hero
        title={
          "Welcome to ZeeCare Medical Institue | Your Trusted HealthCare provider"
        }
        imageUrl={'/doctor-img.webp'}
      />
      <Biography imageUrl={'/about.png'} />
      <Departments />
      <MessageForm />
    </div>
  );
};

export default Home;
