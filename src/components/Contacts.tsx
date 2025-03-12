import { useState, FormEvent, ChangeEvent } from "react";
import DecorationTop from "./DecorationTop";
import SecondaryBtn from "./SecondaryBtn";
import SubHeader from "./SubHeader";

export default function Contacts() {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setSubmitted(true);
    console.log(email);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  return (
    <section id="contacts">
      <DecorationTop />
      <div className="container mx-auto text-center py-6 mb-12">
        <SubHeader title="Contacts" color="white" underline="bg-white" />
        {submitted ? (
          <h3 className="my-4 text-3xl leading-tight">
            We will contact you soon!
          </h3>
        ) : (
          <>
            <h3 className="my-4 text-3xl leading-tight">
              Leave your e-mail to contact you!
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={handleChange}
                className="w-full md:w-1/2 p-3 text-black rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2242aa] mb-4"
              />
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <SecondaryBtn title="Contact Us" />
            </form>
          </>
        )}
      </div>
    </section>
  );
}
