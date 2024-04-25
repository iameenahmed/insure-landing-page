import features from "../data/features";

const Features = () => {
  return (
    <>
      <div>
        <h2>We’re different</h2>
        {features.map(({ id, icon, title, detail }) => {
          return (
            <div key={id}>
              <div>
                <img src={icon} alt="icon" />
              </div>
              <h3>{title}</h3>
              <p>{detail}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h4>Find out more about how we work</h4>
        <button>How we work</button>
      </div>
    </>
  );
};
export default Features;
