import React, { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type ContactInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function Contact({}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInput>();
  const onSubmit: SubmitHandler<ContactInput> = async (data) => {
    fetch("/api/createMessage", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };
  return (
    <section id="contact" className="snap-start">
      <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>
        <div className="flex flex-col space-y-10">
          <h4 className="text-4xl font-semibold text-center">
            Intrigued by what you see?{" "}
            <span className="underline decoration-[#22f3ee]">
              Lets Connect.
            </span>
          </h4>
          <div className="space-y-10">
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#22f3ee] h-7 w-7 animate-pulse" />
              <p className="space-y-10">crporter171@gmail.com</p>
            </div>
          </div>

          {submitted ? (
            <div className="flex flex-col p-10 my-10 bg-[#22f3ee] text-black max-w-2xl mx-auto rounded-lg">
              <h3 className="text-3xl font-bold">
                Thank you for reaching out!
              </h3>
              <p>
                We will get back with you as soon as possible. Till then, have a
                wonderful day!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-2 w-fit mx-auto"
            >
              <div className="flex space-x-2">
                <div>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="contactInput"
                    type="text"
                  />
                  <div className="flex flex-col">
                    {errors.name && (
                      <span className="text-red-500">
                        - The name field is required
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="contactInput"
                    type="email"
                  />
                  <div className="flex flex-col">
                    {errors.email && (
                      <span className="text-red-500">
                        - The email field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <input
                {...register("subject", { required: true })}
                placeholder="Subject"
                className="contactInput"
                type="text"
              />
              <div className="flex flex-col">
                {errors.subject && (
                  <span className="text-red-500">
                    - The subject field is required
                  </span>
                )}
              </div>
              <textarea
                {...register("message", { required: true })}
                placeholder="Message"
                className="contactInput"
              />
              <div className="flex flex-col">
                {errors.message && (
                  <span className="text-red-500 pb-5">
                    - The message field is required
                  </span>
                )}
              </div>
              <button
                className="bg-[#22f3ee] py-5 px-10 rounded-md text-black font-bold"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
