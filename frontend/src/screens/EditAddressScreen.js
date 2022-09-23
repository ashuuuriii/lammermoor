import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import FormContainer from "../components/FormContainer";
import AddressForm from "../components/AddressForm";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {
  USER_UPDATE_ADDRESS_RESET,
  USER_REMOVE_ADDRESS_RESET,
} from "../constants/userConstants";
import { removeAddress } from "../actions/userActions";

const EditAddressScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = useParams().id;

  const userUpdateAddress = useSelector((state) => state.userUpdateAddress);
  const { loading, success, error } = userUpdateAddress;

  const userRemoveAddress = useSelector((state) => state.userRemoveAddress);
  const { loading: removeLoading, success: removeSuccess } = userRemoveAddress;

  const removeButtonHandler = (e) => {
    dispatch(removeAddress(id, false));
  };

  useEffect(() => {
    return () => {
      dispatch({ type: USER_UPDATE_ADDRESS_RESET });
      dispatch({ type: USER_REMOVE_ADDRESS_RESET });
    };
  }, [dispatch]);

  useEffect(() => {
    if (removeSuccess) {
      navigate("/accounts/manage/");
    }
  }, [removeSuccess, navigate]);

  return (
    <>
      <Link to="/accounts/manage/">
        <Button className="my-3 d-none d-lg-block">Go back</Button>
      </Link>
      <FormContainer>
        <h1>Edit</h1>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        {success && (
          <Message variant="success">Your address has been updated.</Message>
        )}
        <AddressForm variant="update" />
        <Button variant="danger" className="my-3" onClick={removeButtonHandler}>
          Remove from address book
        </Button>
      </FormContainer>
    </>
  );
};

export default EditAddressScreen;
