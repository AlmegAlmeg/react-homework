import PropTypes from "prop-types";

const Card = ({
  card: {
    _id,
    title,
    description,
    address,
    image: { url, alt },
    number,
    phone,
  },
  handleDelete,
}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-3">
      <div className="card px-0">
        <div className="card-head">
          <img className="img-fluid" src={url} alt={alt} />
          <div className="p-2">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <hr className="m-0" />
          </div>
        </div>
        <div className="card-body p-2">
          <div>
            <strong>Tel: </strong>
            {phone}
          </div>
          <div>
            <strong>Address: </strong>
            {address}
          </div>
          <div>
            <strong>Card Number: </strong>
            {number}
          </div>

          <div>
            <span className="cursor" onClick={() => handleDelete(_id)}>
              Delete |{" "}
            </span>
            <span className="cursor">Edit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Card;
