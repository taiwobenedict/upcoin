import React, { useState, useEffect } from "react";
import { stripeApi } from "../services/stripe";
import { useNavigate } from "react-router-dom";

function extractValuesFromUrl(url) {
  // Extract the query string from the URL
  const queryString = url.split('?')[1];

  // Check if the query string exists
  if (!queryString) {
    return { success: null, session_id: null };
  }

  // Split the query string into key-value pairs
  const queryParams = queryString.split('&');

  // Object to hold the extracted values
  let result = { success: null, session_id: null };

  // Iterate through each key-value pair
  queryParams.forEach(param => {
    const [key, value] = param.split('=');

    // Check for 'success' and 'session_id' and assign them to the result object
    if (key === 'success') {
      result.success = value;
    } else if (key === 'session_id') {
      result.session_id = value;
    }
  });

  return result;
}


export const StripeResult = () => {

  const navigate = useNavigate();
  const [sessionId, setSessionId] = useState('');
  const [success, setSuccess] = useState(false);
  const [verification, setVerification] = useState(-1);

  useEffect(() => {
    setSessionId(extractValuesFromUrl(window.location.href)?.session_id);
    setSuccess(extractValuesFromUrl(window.location.href)?.success);
  }, [])

  useEffect(() => {
    console.log(success, sessionId);
    if (success !== null && sessionId !== null) {
      stripeApi.portal({
        session_id: sessionId
      })
        .then(res => {
          if (res.success) {
            setVerification(1);
            return;
          }
          setVerification(0);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [sessionId, success])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "1.5rem",
        minHeight: "100vh",
        color: "black",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {
        verification === -1 ? (
          <div>
            Waiting...
          </div>
        ) : (
          verification === 1 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "blue"
              }}
            >
              Payment succeed.
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "blue"
              }}
            >
              Session ID is not correct.
            </div>
          )
        )
      }

      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}>
        <button
          style={{
            margin: "1rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "black",
            border: "1px #000 solid !important",
            borderRadius: "5px"
          }}
          onClick={e => navigate('/')}>Return
        </button>
      </div>
    </div>
  )
}
