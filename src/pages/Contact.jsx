import { ContactLinks } from "@/components";
import { contact } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="flex flex-col items-start md:w-[1152px] sm:w-[400px] justify-start">
      <div className="flex flex-col w-[681px] justify-center ml-[100px]">
        <h1 className="font-bold text-[44px]">Contact</h1>
        <div>
          {contact.map((contact) => (
            <ContactLinks key={contact.id} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
