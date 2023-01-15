import boxshot from '../assets/images/boxshot.png';
import download_icon from '../assets/images/download-icon.gif';

function SmallStoryCard(props) {
  return (
    <section className="text-white absolute bottom-4 sm:bottom-6 p-2 border-2 rounded-xl border-stone-700 bg-black w-5/6 sm:w-4/6 md:w-8/12 transform left-[50%] -translate-x-[50%]">
      <div className="flex">
        <div className="">
          <img src={boxshot} alt="" className="h-[3.5rem] md:h-[4rem] lg:h-[4.5rem] " />
        </div>
        <div className="pl-4 grow flex flex-col justify-center">
            <div className="text-sm sm:text-base font-bold">Stranger Things</div>
            <div className="text-xs sm:text-sm text-blue-500 font-semibold">Downloading...</div>
        </div>
        <div className="text-right flex flex-col justify-center">
            <img src={download_icon} className="h-10 sm:h-10 lg:h-12" alt="" />
        </div>
      </div>
    </section>
  );
}

export default SmallStoryCard;
