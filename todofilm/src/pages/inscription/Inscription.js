import React, { Component } from "react";
import InputComponent from "../../components/InputComponent";
import Logo from "../../components/Logo";
import "../../styles/general.css";
import { datasUser } from "../../datas/datasUser";

class Inscription extends Component {
  state = {
    conditionPrenom: false,
    conditionNom: false,
    conditionEmail: false,
    conditionPasswordInit: false,
    conditionPasswordVerif: false,
  };

  recupData = (id, condition) => {
    // switch case
    switch (id) {
      case "prenom" :
        this.setState({
          conditionPrenom: condition,
        });
        break;
      case "nom" :
        this.setState({
          conditionNom: condition,
        });
        break;
      case "email" :
        this.setState({
          conditionEmail: condition,
        });
        break;
      case "passwordInit" :
        this.setState({
          conditionPasswordInit: condition,
        });
        break;
      case "passwordVerif" :
        this.setState({
          conditionPasswordVerif: condition,
        });
        break;
    }

    // IF ELSE
    // if (id === "prenom") {
    //   this.setState({
    //     conditionPrenom: condition,
    //   });
    // } else if (id === "nom") {
    //   this.setState({
    //     conditionNom: condition,
    //   });
    // } else if (id === "email") {
    //   this.setState({
    //     conditionEmail: condition,
    //   });
    // } else if (id === "passwordInit") {
    //   this.setState({
    //     conditionPasswordInit: condition,
    //   });
    // } else if (id === "passwordVerif") {
    //   this.setState({
    //     conditionPasswordVerif: condition,
    //   });
    // }
  };

  showData = () => {
    console.log(
      "Prénom : ",
      datasUser.prenom,
      "- Nom : ",
      datasUser.nom,
      "- Adresse mail : ",
      datasUser.email,
      "- Mot de passe : ",
      datasUser.password
    );
  };

  render() {
    const {
      conditionPrenom,
      conditionNom,
      conditionEmail,
      conditionPasswordInit,
      conditionPasswordVerif,
    } = this.state;

    const verifDisabled =
      conditionPrenom === true &&
      conditionNom === true &&
      conditionEmail === true &&
      conditionPasswordInit === true &&
      conditionPasswordVerif === true
        ? false
        : true;
    return (
      <div className="bloc-identify background-yellow">
        <div className="full-logo">
          <Logo />
        </div>

        <div className="bloc-identify-input">
          <h1>Inscription</h1>

          <InputComponent
            id="prenom-input"
            placeholder="Prénom"
            type="text"
            recupData={this.recupData}
          />
          <InputComponent
            id="nom-input"
            placeholder="Nom"
            type="text"
            recupData={this.recupData}
          />
          <InputComponent
            id="email-input"
            placeholder="Adresse mail"
            type="email"
            recupData={this.recupData}
          />
          <InputComponent
            id="passwordInit-input"
            placeholder="Mot de passe"
            type="password"
            recupData={this.recupData}
          />
          <InputComponent
            id="passwordVerif-input"
            placeholder="Vérification mot de passe"
            type="password"
            recupData={this.recupData}
          />

          <div className="bloc-identify-button">
            <button onClick={this.showData} disabled={verifDisabled}>
              Valider
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Inscription;
