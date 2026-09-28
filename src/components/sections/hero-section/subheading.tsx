type PropsType = {
  text: string;
};

export function Subheading({ text }: PropsType) {
  return (
    <div className="rounded-full mb-6 max-w-fit mx-auto bg-gradient-to-r from-[#0099ff] to-[#0022ff] p-[1.5px]">
      <div className="bg-white/95 dark:bg-dark-primary py-2 text-xs sm:text-sm font-semibold items-center gap-2 px-5 inline-flex text-gray-800 dark:text-white/90 rounded-full">
        <span>{text}</span>
      </div>
    </div>
  );
}
