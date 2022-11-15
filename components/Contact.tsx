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
      <div className="h-screen w-full flex relative flex-col text-center md:text-left md:flex-row max-w-5xl px-10 mx-auto items-center">
        <h3 className="uppercase tracking-[20px] pl-5 text-cyan-500 text-2xl mt-[4rem] mb-[2rem] animate-pulse">
          Contact
        </h3>
        <div className="flex flex-col w-full max-w-5xl mx-2 space-y-3">
          <h4 className="flex-wrap text-xl font-semibold text-center">
            Intrigued by what you see? <wbr />
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
            <div className="flex flex-col p-5 mt-[3rem] bg-[#22f3ee] text-black max-w-2xl mx-auto rounded-lg">
              <h3 className="text-2xl font-bold">
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
              className="flex flex-col space-y-2 w-full mx-auto"
            >
              <div className="space-y-2 md:space-y-0 md:flex-row md:space-x-2">
                <div>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="contactInput w-full"
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
                    className="contactInput w-full"
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
