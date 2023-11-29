import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img
              src="https://imgs.search.brave.com/lcqFcNY2p8neQCn2gHQjvE1fMVZ9SUkfnwBED9swlUc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA0/MTE3MTg2L3Bob3Rv/L2RvY3Rvci1hbmQt/bnVyc2UtdGFsa2lu/Zy10by1wYXRpZW50/LWluLWhvc3BpdGFs/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz03bkc1UGJiZXNS/U2FnMUp2WW1tZDdp/TnQxMHQ1d1lPVk1z/RUFpakhkVGNNPQ"
              alt="loginImage"
            />
          </div>
          <div className="col-md-4 form-container login">
            <Form formTitle={"Login"} submitBtn={"Login"} formType={"login"} />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
