const styles = {
  memberCard: {
    wrapper:
      "group relative left-0 top-0 min-h-[412px] w-full max-w-[295px] rounded-[0px_3.1134px_3.1134px_3.1134px] bg-white pb-2 shadow-md duration-700 hover:left-[-10px] hover:top-[-10px] hover:shadow-[12px_12px_0px_0px_#33cccc]",
    onHoverDesignation:
      "absolute top-[-32px] hidden rounded-t-[3.1134px] bg-[#f5f5f5] px-3 py-2 text-xs font-semibold shadow-[0px_-1px_5px_-2px_#c0c0c0] group-hover:block",
    imageWrapper:
      "mx-3 mt-3 duration-700 cursor-pointer group-hover:bg-[#33cccc]",
    image: "mx-auto h-[206px] duration-700 group-hover:pt-3",
    caption:
      "bg-[#06142308] px-3 py-1 text-xs text-[#06142366] duration-700 group-hover:mt-3",
    title:
      "mb-1 mt-6 flex items-center font-bold duration-700 group-hover:mt-2",
    linkedIn:
      "ml-auto hidden cursor-pointer text-xl text-blue-500 duration-700 group-hover:block",
    designation: "text-xs text-[#06142399] group-hover:hidden",
    border: "absolute left-0 top-[4.5rem] w-full group-hover:hidden",
    subtitle: "mt-9 text-sm font-medium group-hover:hidden line-clamp-2",
    description:
      "mt-9 hidden text-sm font-medium duration-700 group-hover:mt-3 group-hover:block group-hover:text-xs group-hover:!line-clamp-6",
    modal: {
      wrapper: (background?: string) =>
        `relative m-5 w-full !max-w-[808px] !p-0 ${background}`,
      contentWrapper: "max-w-[404px] ml-14 mb-20 col-span-3",
      description: "text-[#464646] text-xl max-h-[300px] overflow-scroll",
      footerMobileTitle:
        "absolute bottom-0 left-0 text-5xl text-[#464646] opacity-10 left-1/3 block text-center !text-3xl md:hidden",
      footerTitle:
        "absolute bottom-0 left-0 text-5xl text-[#464646] opacity-10",
      image: "absolute right-0 bottom-0",
      heading:
        "max-w-[530px] py-9 text-3xl font-bold leading-[49.6px] text-[#464646] sm:pl-14",
      mobileWrapper: "-mt-9 flex flex-col items-center px-5 sm:mt-2 md:hidden",
      mobileTitle:
        "py-6 text-center break-words text-xl font-bold text-[#464646]",
      linkedInMobile: "m-3 ml-auto block text-blue-500 md:hidden",
      descriptionMobile: "max-h-[200px] overflow-scroll text-center text-base",
    },
  },
};
export default styles;
