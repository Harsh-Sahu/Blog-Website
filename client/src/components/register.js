import React, { useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

const FormPage = () => {
  const [acc, setAcc] = useState({
    name: "",
    id: "",
    pass: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setAcc((prevValue) => {
      if (name === "name")
        return {
          name: value,
          id: prevValue.id,
          pass: prevValue.pass,
        };
      else if (name === "username")
        return {
          name: prevValue.name,
          id: value,
          pass: prevValue.pass,
        };
      else if (name === "password")
        return {
          name: prevValue.name,
          id: prevValue.id,
          pass: value,
        };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newAcc = {
      name: acc.name,
      id: acc.id,
      pass: acc.pass,
    };

    axios
      .post("http://localhost:7000/register", newAcc)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = "/login";
  }

  return (
    <div class="container centered">
      <Helmet>
        <link rel="stylesheet" href="login.css" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossorigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossorigin="anonymous"
        />

        <link rel="stylesheet" type="text/css" href="styles.css" />
      </Helmet>
      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-header">
              <h3>Sign Up</h3>
              <div class="d-flex justify-content-end social_icon">
                <span>
                  <i class="fab fa-facebook-square"></i>
                </span>
                <span>
                  <i class="fab fa-google-plus-square"></i>
                </span>
                <span>
                  <i class="fab fa-twitter-square"></i>
                </span>
              </div>
            </div>
            <div class="card-body">
              <form>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your name"
                    name="name"
                    onChange={handleChange}
                    value={acc.name}
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="username/email"
                    name="username"
                    onChange={handleChange}
                    value={acc.id}
                  />
                </div>

                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="password"
                    onChange={handleChange}
                    name="password"
                    value={acc.pass}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Register"
                    class="btn float-right login_btn"
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
