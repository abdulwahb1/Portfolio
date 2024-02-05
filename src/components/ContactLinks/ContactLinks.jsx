const ContactLinks = ({ title, text }) => {
  return (
    <>
      <div className="flex flex-col">
        <p className="text-[15px] text-[#21243D] font-normal mt-5">
          {title} {text}
        </p>
      </div>
    </>
  );
};

export default ContactLinks;
