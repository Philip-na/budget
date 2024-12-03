import { Data } from "../prom-home-list";
import PromoSlideCard from "./promo-slide-card";

type SlidesProps = {
    data: Data[];
}

const Slides = (
    { data }: SlidesProps
) => {
  return (
    <div className="w-fit max-w-full flex gap-4 md:ml-auto  overflow-x-clip">
      {data.map((item) => (
       <PromoSlideCard key={item.title + 'promo-card' + item.category} data={item} />
      ))}
    </div>
  )
}

export default Slides