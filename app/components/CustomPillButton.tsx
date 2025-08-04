

const CustomPillButton = ({title, subTitle, isBottom}:{title:string, subTitle:string, isBottom?:boolean}) => {
  return (
   <a
   className={` h-10 w-32 flex
    text-sm   items-center group relative
     justify-center font-medium tracking-[0.5px]
     transition-all duration-700 overflow-hidden
     ${isBottom? "text-black bg-white":"text-white bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 " }
      rounded-xl`}
      target="blank"
   href="https://cal.com/princely-kweks">
    <span className="absolute -translate-y-15
    group-hover:-translate-y-0
    rounded-b-4xl
    transition-transform duration-400
     bg-gradient-to-r from-violet-600 to-indigo-600 w-full h-[80px]">

    </span>
  <div className=" overflow-hidden relative
  flex flex-col h-[20px] justify-center items-center
  ">
   <span className=" inline-block translate-y-[10px]
   transition-transform group-hover:translate-y-9
   duration-400 
   ">{subTitle}</span> 

   <span className=" inline-block 
    transition-transform translate-y-[10px]
   duration-400  group-hover:-translate-y-[10px]
   ">{title}</span> 
    </div> 
   </a>
  )
}

export default CustomPillButton