import api from "../Util/api";
import Toasty from "../Util/toast";
import { baseURL, imageURL } from "../Util/api";
import axios from "axios";
import Swal from "sweetalert2";

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_FORGOTPASSWORD_REQUEST,
  USER_FORGOTPASSWORD_SUCCESS,
  USER_FORGOTPASSWORD_FAIL,
  NOTIFICATION_FAIL,
  NOTIFICATION_REQUEST,
  NOTIFICATION_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstants";
export const userSignUpAction = (body, history) => async (dispatch) => {
  try {
    // dispatch({
    //   type: ADMIN_LOGIN_REQUEST,
    // })
    console.log("userLoginAction");

    const res = await axios.post(`${baseURL}/user/register`, body);

    console.log("userLoginActionres", res);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res?.data,
    });

    localStorage.setItem("userInfo", JSON.stringify(res?.data));
    history?.replace("/SubscriptionPlan");
  } catch (error) {
    console.log("error", error);
    Toasty("error", error?.response?.data?.message);

    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error,
    });
  }
};
export const employeeSignUpAction = (body, history) => async (dispatch) => {
  try {
    // dispatch({
    //   type: ADMIN_LOGIN_REQUEST,
    // })
    console.log("employeeSignUpAction");

    const res = await axios.post(`${baseURL}/user/registerEmployee`, body);

    console.log("userLoginActionres", res);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res?.data,
    });

    localStorage.setItem("userInfo", JSON.stringify(res?.data));
    history?.replace("/");
  } catch (error) {
    console.log("error", error);
    Toasty("error", error?.response?.data?.message);

    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error,
    });
  }
};


export const userLoginAction =
  (email, password, history) => async (dispatch) => {
    try {
      console.log("userLoginAction");

      const body = { email, password };

      const res = await api.post("/user/authUser", body);

      console.log("res", res);
      if (res?.status == 200) {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: res?.data,
        });

        localStorage.setItem("userInfo", JSON.stringify(res?.data));
        history?.replace("/");
      } else if (res?.status == 201) {
        Toasty("error", res?.data?.message);
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: res?.data?.message,
        });
      }
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error,
      });
    }
  };

  export const userBuySubscription =
  (body,history) => async (dispatch) => {
    try {
      console.log("userLoginAction");


      const res = await api.post("/user/userbuysubscription", body);

      console.log("res", res);
      if (res?.status == 201) {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: res?.data,
        });

        localStorage.setItem("userInfo", JSON.stringify(res?.data));
        Swal.fire({
          icon: "success",
          title: "",
          background: "#45b6fe",
          color: "white",
      
          text: "Congratulations! You have successfully subscribed to our package",
          showConfirmButton: false,
          timer: 1500
        });
        history?.replace("/");

      }
    
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error,
      });
    }
  };

export const userverfyadnresetpasword =
  (existingpassword, newpassword, confirm_password, email, history) =>
  async (dispatch, getState) => {
    console.log(
      "existingpassword,newpassword, confirm_password, email",
      existingpassword,
      newpassword,
      confirm_password,
      email
    );
    try {
      console.log("userverfyadnresetpasword");
      // dispatch({
      //   type: user_LOGIN_REQUEST,
      // })
      const {
        userLogin: { userInfo },
      } = getState();

      console.log("userLoginAction");
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      // const body = { email, password };

      const res = await axios.post(
        `${baseURL}/user/verifyAndREsetPassword`,
        { existingpassword, newpassword, confirm_password, email },
        config
      );
      history?.replace("/");

      console.log("res", res);
      if (res?.status == 201) {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: res?.data,
        });

        localStorage.setItem("userInfo", JSON.stringify(res?.data));
        Swal.fire({
          icon: "success",
          title: "",
          text: "Password updated successfully",
          showConfirmButton: false,
          background: "#45b6fe",
          color: "white",
      
          timer: 1500,
        });
      }
    } catch (error) {
      console.log("error");
      Toasty("error", error?.response?.data?.message);
      // history?.replace("/dashboard");

      // dispatch({
      //   type: ADMIN_LOGIN_FAIL,
      //   payload: error,
      // });
    }
  };

export const userResetPasswordAction =
  (password, confirm_password, code, email) => async (dispatch) => {
    try {
      // dispatch({
      //   type: ADMIN_LOGIN_REQUEST,
      // })
      console.log("userLoginAction");

      const body = { password, confirm_password, code, email };

      const res = await api.post("/user/userresetPassword", body);

      console.log("res", res);
      if (res?.status == 201) {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: res?.data,
        });

        localStorage.setItem("userInfo", JSON.stringify(res?.data));
        await Swal.fire({
          icon: "success",
          title: "",
          text: "Password reset successfully",
          background: "#45b6fe",
          color: "white",
      
          showConfirmButton: false,
          timer: 1500
        });
        document.location.href = "/";
      }
    } catch (error) {
      console.log("reseterror", error?.response?.data?.message);
      Toasty("error", error?.response?.data?.message);

      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error,
      });
    }
  };
export const updateUserInfoAction = (body) => async (dispatch, getState) => {
  try {
    // dispatch({
    //   type: ADMIN_LOGIN_REQUEST,
    // })
    console.log("updateUserInfoActiondsdsfdsfdf", body);
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await axios.post(`${baseURL}/user/editProfile`, body, config);

    console.log("res", res);
    if (res?.status == 201) {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res?.data,
      });

      localStorage.setItem("userInfo", JSON.stringify(res?.data));
      Swal.fire({
        icon: "success",
        title: "",
        text: "Profile updated successfully",
        background: "#45b6fe",
        color: "white",
    
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error,
    });
  }
};


export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });

  window.location.reload();
};
