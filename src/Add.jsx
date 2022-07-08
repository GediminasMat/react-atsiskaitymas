import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = ({ token }) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const submitForm = () => {
    setLoading(true);
    axios({
      method: "post",
      url: "https://autumn-delicate-wilderness.glitch.me/v1/content/skills",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        title: title,
        description: description,
      },
    })
      .then(function (response) {
        console.log(response);

        alert("Successfuly added");
        // navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
    setLoading(false);
  };

  return (
    <>
      {token ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "15px" }}>
          <h1>Add new +</h1>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
          <textarea name="" id="" cols="30" rows="10" onChange={(e) => setDescription(e.target.value)}></textarea>
          <button type="button" onClick={() => submitForm()}>
            Send
          </button>
        </div>
      ) : (
        <p>You are not authorized to view this page</p>
      )}
    </>
  );
};

export default Add;
