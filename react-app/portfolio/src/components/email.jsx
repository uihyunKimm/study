/* import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import HTMLFormElement from "./HTMLFormElement"

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("환경 변수가 설정되지 않았거나 올바르지 않습니다.");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.REACT_APP_SERVICE_ID as string,
        import.meta.env.REACT_APP_TEMPLATE_KEY as string,
        form.current,
        import.meta.env.REACT_APP_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>company</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}; */