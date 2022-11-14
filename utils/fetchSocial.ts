import { Social } from "../typings";
import { server } from "./server";

export const fetchSocial = async () => {
  const res = await fetch(`${server}/api/getSocial`);

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
