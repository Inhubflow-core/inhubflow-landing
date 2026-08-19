type PropsType = {
  text: string;
};

export function Subheading({ text }: PropsType) {
  return (
    <div className="rounded-full mb-6 max-w-fit mx-auto bg-gradient-to-r from-[#FF58D5] via-[#7a5af8] to-[#4E6EFF] p-[1.5px] shadow-sm">
      <div className="bg-white/95 dark:bg-dark-primary py-2 text-xs sm:text-sm font-semibold items-center gap-2 px-5 inline-flex text-gray-800 dark:text-white/90 rounded-full">
        <span>{text}</span>
      </div>
    </div>
  );
}
