import { useState, useCallback } from "react";
import { SERVER_URL, POST_HEADERS } from "./constants";
import { LoadingComponent } from "../components/commons/LoadingComponent";
import axios from "axios";

export const useFetch = (path = SERVER_URL) => {
  const [serverResponse, setServerResponse] = useState(null);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const get = useCallback(
    async function (getPath) {
      setIsError(false);
      setServerResponse(null);
      setLoading(LoadingComponent);
      axios(path.concat(getPath)).then(
        (res) => {
          setLoading(false);
          setServerResponse(res.data);
          console.log(res.data);
          return res.data;
        },
        (err) => {
          setIsError(true);
          setServerResponse(null);
          console.error(err);
        }
      );
    },
    [path]
  );

  const post = useCallback(
    async function (postPath, body) {
      if (!body) throw new Error("Body must be provided for POST requests");

      setIsError(false);
      setServerResponse(null);
      setLoading(LoadingComponent);
      axios({
        method: "post",
        url: path.concat(postPath),
        data: body,
      }).then(
        (res) => {
          setLoading(false);
          setServerResponse(res.data);
          return res.data;
        },
        (err) => {
          setIsError(true);
          setServerResponse(null);
          console.error(err);
        }
      );
    },
    [path]
  );

  return [{ get, post }, serverResponse, loading, isError];
};
