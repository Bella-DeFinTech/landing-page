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
    <div className="bg-[#292A32] py-[32.5px] px-10 flex flex-col 1100:flex-row gap-x-5 h-fit rounded-lg">
      <input
        disabled={subscribing || subscribed}
        className="outline-0 border-white border h-[52px] 1100:h-auto bg-transparent px-2 rounded-lg"
        type="email"
        placeholder="Enter Email Address"
        ref={input}
      />
      <Button
        disabled={subscribing || subscribed}
        fill
        accent
        onClick={handleSub}
        className="mt-5 1100:mt-0 h-[52px] 1100:h-auto"
      >
        {subscribed
          ? "subscribed"
          : subscribing
          ? `subscribing..`
          : "Subscribe to news"}
      </Button>
    </div>
  );
};
