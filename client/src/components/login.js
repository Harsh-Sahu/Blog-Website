import React, { useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

const FormPage = () => {
  const [acc, setAcc] = useState({
    id: "",
    pass: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setAcc((prevValue) => {
      if (name === "username")
        return {
          id: value,
          pass: prevValue.pass,
        };
      else if (name === "password")
        return {
          id: prevValue.id,
          pass: value,
        };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:7000/login", acc)
      .then((res) => {
        if (res.data.result === "true") {
          window.location = "/home";
        } else {
          alert(
            "You Have Entered Wrong Username Or Password !!\nPlease Try Again........"
          );
          window.location = "/";
        }
      })
      .catch((err) => console.log(err));
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
              <h3>Sign In</h3>
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
                    placeholder="username"
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
                <div class="row align-items-center remember">
                  <input type="checkbox" />
                  Remember Me
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Login"
                    class="btn float-right login_btn"
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-center links">
                Don't have an account?<a href="/register">Sign Up</a>
              </div>
              <div class="d-flex justify-content-center">
                <a href="/login">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
