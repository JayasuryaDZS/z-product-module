import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/4605319.jpg";
import "../../assets/scss/custom/pages/_loginPage.scss";
import logo from "../../assets/images/practiot-logo.png";

function LoginPage() {
const navigation = useNavigate();

const handleLogin = () => {
  navigation("/dashboard");
};

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          style={{ backgroundImage: `URL(${img})` }}
          className="image-div d-flex align-items-end col-lg-6"
        >
          <div className="img-text mb-4 p-5 ">
            <h1 className="text-light">
              One Integrated Solution <br /> For your Practice
            </h1>
            <p>
              <ul className="text-light d-flex justify-content-around ">
                <p>Revenue</p>
                <li>Appointments</li>
                <li>Treatment Plans</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="form-div col-lg-6  ">
          <div className="container col-lg-8 col-sm-12 ">
            <div>
              <img
                style={{ height: "90px", width: "170px" }}
                src={logo}
                alt=""
              />
              <h4 style={{ fontWeight: "500" }} className="mt-4 ">
                Connect, engage and grow with PractIOT
              </h4>
            </div>
            <div className="login-font mt-4">
              <h4>Login</h4>
              <p>Enter registered Mail-Id and password</p>
            </div>
            <Form className="w-100 mt-4" onSubmit={handleLogin}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email"
                  // type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Password"
                  // type="password"
                />
                <div className="d-flex justify-content-between ">
                  <FormGroup className="mt-3" check>
                    <Input style={{ borderColor: "black" }} type="checkbox" />
                    <Label check>Remember me</Label>
                  </FormGroup>
                  <Link style={{ color: "#3BA2ED" }} className="mt-3" to={"#"}>
                    Forgot Password?
                  </Link>
                </div>
              </FormGroup>
              <Button
                style={{ backgroundColor: "#3BA2ED", border: "none" }}
                className="w-100"
              >
                Login
              </Button>
              <div className="text-end mt-5 ">
                <Link
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                  to={"#"}
                >
                  Need Help?
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
