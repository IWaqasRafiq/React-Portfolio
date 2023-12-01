import "./parallax.scss";

const Parallax = ({ type }) => {
  return (
    <div
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <h1> {type === "services" ? "What we Do?" : "What we Did?"} </h1>
      <div className="mountains"></div>
      <planets className="div"></planets>
      <stars className="div"></stars>
    </div>
  );
};
export default Parallax;
