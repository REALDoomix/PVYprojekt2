import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UPDATE_LIKES } from "./../../utils/mutations";

export const ClickLikes = (props) => {
  const { icon, initial, id } = props;
  const [value, setValue] = useState(initial);
  const [changeLikes, { loading, error }] = useMutation(UPDATE_LIKES, {
    variables: {
      likes: value,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <button
      onClick={() => {
        setValue(initial + 1);
        changeLikes({ variables: { id: id, like: initial + 1 } });
      }}
    >
      <FontAwesomeIcon icon={icon} /> {value}
    </button>
  );
};
