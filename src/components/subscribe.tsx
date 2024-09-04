"use client";

import { useCallback, useRef, useState } from "react";
import { Button } from "./button";
import jsonp from "jsonp";

type CreateURLParams = {
  list_id: string;
  email: string;
  tags: string;
};

const BELLA_LIST_ID = "e268c38a54";

const createUrl = ({ email, list_id, tags }: Partial<CreateURLParams>) => {
  const url = new URL(
    `https://bella.us2.list-manage.com/subscribe/post-json?u=bab50301f5148ef7c637afcb4`
  );

  if (email === undefined) {
    throw Error("email is required.");
  }

  url.searchParams.set("id", list_id ?? BELLA_LIST_ID);
  url.searchParams.set("EMAIL", email);

  return url.href;
};

const subscribe = (
  email: string,
  others?: Partial<CreateURLParams>
): Promise<boolean> =>
  new Promise((resolve, reject) => {
    jsonp(createUrl({ email, ...others }), { param: "c" }, (err, data) => {
      if (err) reject(err);
      else {
        resolve(data.result === "success");
      }
    });
  });

const isEmail = (email: string) => {
  const pattern =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  return pattern.test(email);
};

export const Subscribe = () => {
  const input = useRef<HTMLInputElement>(null);
  const [{ subscribing, subscribed }, setSubscribing] = useState({
    subscribed: false,
    subscribing: false,
  });
  const subscribed_timeout = useRef<number>(-1);
  const handleSub = useCallback(async () => {
    setSubscribing((prev) => ({ ...prev, subscribing: true }));
    const email = input.current?.value ?? "";
    if (!isEmail(email)) {
      console.error("email is invalid");
      setSubscribing((prev) => ({ ...prev, subscribing: false }));
      return;
    }
    try {
      const ret = await subscribe(email);
    } catch (e) {
      console.error(e);
    } finally {
      setSubscribing({ subscribed: true, subscribing: false });
      subscribed_timeout.current = window.setTimeout(() => {
        setSubscribing((prev) => ({ ...prev, subscribed: false }));
      }, 2500);
    }
  }, []);
  return (
    <div>
      <div className="flex items-center border border-gray-200 w-full sm:w-fit px-4 py-2 mt-2">
        <input
          disabled={subscribing || subscribed}
          className="appearance-none outline-0 bg-transparent pr-1 w-full sm:w-[320px]"
          type="email"
          placeholder="Enter Email Address"
          ref={input}
        />
        <button disabled={subscribing || subscribed} onClick={handleSub}>
          {subscribing ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 animate-spin"
            >
              <path
                fill="white"
                d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"
              ></path>
            </svg>
          ) : subscribed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                className="fill-green-600"
                d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fill="white"
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
