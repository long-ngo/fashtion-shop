function Button({ text }) {
  return (
    <a
      className="flex justify-center items-center w-40 h-10 uppercase bg-[#717fe0] text-white font-medium rounded-3xl"
      href="/#"
    >
      {text}
    </a>
  );
}

export default Button;
