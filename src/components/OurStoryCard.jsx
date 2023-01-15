import SmallStoryCard from "../components/SmallStoryCard";
import FAQs from "../components/FAQs";

function OurStoryCard(props) {

  var centerText;
  var headingPadding;
  var columnSpan;
  var order1;
  var order2;
  props.section == 'FAQs' ? centerText = "text-center" : centerText = '';
  props.padding ? headingPadding = props.padding : headingPadding = '';
  props.columns && props.columns == 2 ? columnSpan = 'lg:col-span-1' : columnSpan = 'lg:col-span-2';
  props.order1 == 1 ? order1 = 'lg:order-1' : (props.order1 == 2) ? order1 = 'lg:order-2' : order1 = '';
  props.order2 == 1 ? order2 = 'lg:order-1' : (props.order2 == 2) ? order2 = 'lg:order-2' : order2 = '';

  return (
    <section className="py-8 sm:py-12 lg:px-12 border-b-8 border-stone-700">
      <div className={"grid grid-cols-" + props.columns + " mx-auto w-full md:w-10/12"}>
        <div className={columnSpan + " col-span-2 px-4 md:px-0 text-white flex flex-col justify-center order-1 " + order1}>
          <div className={headingPadding + " px-0 " + centerText}>
            {
              props.heading && props.section != 'FAQs' ?
                <h2 className="font-bold text-center lg:text-left text-4xl md:text-5xl">{props.heading}</h2>
                : <></>
            }
            {
              props.heading && props.section == 'FAQs' ?
                <h2 className="font-bold text-center text-4xl md:text-5xl">{props.heading}</h2>
                : <></>
            }
            {
              props.para ?
                <p className="mt-5 text-center lg:text-left text-xl md:text-2xl">{props.para}</p>
                : <></>
            }
          </div>
        </div>
        <div className={columnSpan + " col-span-2 order-2 " + order2}>
          <div className="relative">
            {
              props.image ?
                <img src={props.image} className="z-10 mx-auto lg:mx-0 " alt="" />
                : <></>
            }
            {
              props.section == 'tv' && props.video ?
                  <video autoPlay muted playsInline loop className="absolute top-[48%] left-[50%] w-full h-full max-h-[54%] max-w-[72%] transform -translate-x-[50%] -translate-y-[50%] -z-10">
                    <source src={props.video} type="video/mp4" />
                  </video>
                : <></>
            }
            {
              props.section == 'download' ?
                <SmallStoryCard /> : <></>
            }
            {
              props.section == 'FAQs' ?
                <FAQs />
                : <></>
            }

          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStoryCard;
