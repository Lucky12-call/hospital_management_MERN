/* eslint-disable react/prop-types */
const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="about-img" />
      </div>

      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          delectus exercitationem. Quidem enim fugit sunt nostrum et
          repellendus, corrupti saepe molestias, ipsam exercitationem eum
          voluptatibus quis suscipit recusandae nesciunt dolor accusamus esse
          omnis animi impedit? Pariatur quia harum sit excepturi dolorem iusto
          error laborum dignissimos aspernatur alias officiis, qui obcaecati.
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
          perspiciatis aliquam adipisci error praesentium dolorum voluptatum eos
          accusantium rerum, totam blanditiis voluptates quibusdam quam ipsum
          laborum consectetur, hic esse repellat aperiam ipsam dolorem alias
          odio!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae,
          perferendis?
        </p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};

export default Biography;
