import React from "react";
import Form from "../common/Form/Form";
import Joi from "joi-browser";
import PageHeader from "../common/pageHeader";
import { createCard } from "../../services/cardService";
import { toast } from 'react-toastify'
import { Navigate } from "react-router-dom";

class CreateCard extends Form {
  state = {
    data: {
      title: "",
      description: "",
      address: "",
      phone: "",
      url: "",
      alt: "",
    },
    isCardCreated: false,
    errors: {},
  };

  schema = {
    title: Joi.string().min(2).max(256).required().label("Title"),
    description: Joi.string().min(2).max(1024).required().label("Description"),
    address: Joi.string().min(2).required().max(256).label("Address"),
    phone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/)
      .label("Phone"),
    url: Joi.string().min(11).max(1024).uri().allow("").label("Image"),
    alt: Joi.string().min(2).max(256).allow("").label("Alt"),
  };

  doSubmit = async () => {
    try {
      const card = { ...this.state.data }
      if(!card.url) delete card.url
      if(!card.alt) delete card.alt
      createCard(card)
      toast.success('Card has been created successfully!')
      this.setState({isCardCreated: true})
    } catch (err) {
      if(err.response && err.response.status === 400){
        this.setState({
          errors: {alt: 'Something went wrong'}
        })
      }
    }
  }

  render() {
    const { isCardCreated } = this.state.data
    if(isCardCreated) return <Navigate replace to='/my-cards' />
    return (
      <div
        style={{ minHeight: "85vh" }}
        className="container-fluid bg-light pb-4">
        <div className="container">
          <PageHeader
            title="Create Card"
            subTitle="Hear you can create a business card"
          />
          <div className="center">
            <form
              onSubmit={this.handleSubmit}
              autoComplete="off"
              method="POST"
              className="col-12 col-md-10 col-xl-6 border p-2 bg-white">
              {this.renderInput("title", "Title")}
              {this.renderTextarea("description", "Description")}
              {this.renderInput("address", "Address")}
              {this.renderInput("phone", "Phone")}
              {this.renderInput("url", "Image")}
              {this.renderInput("alt", "Alt")}
              {this.renderButton("Create Card")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCard;
