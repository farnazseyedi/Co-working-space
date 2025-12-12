import CoffeeIcon from "@/app/icons/home-page/coffee";
import WifiIcon from "@/app/icons/home-page/wifi";

function FeaturesSection() {
  return (
    <div className="bg-others-bg1 pt-6 px-15 pb-12">
      <div className="flex flex-col gap-7 mt-10">
        <div className="flex justify-center h-12 ">
          <p className="text-tertiary-800">
            چرا
            <span className="text-tertiary-500">مکین</span>؟
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col justify-center items-center gap-8">
            <WifiIcon className=" text-primary-500"/>
            <div className="text-neutral-900">اینترنت نامحدود</div>
            <div className="text-neutral-700">برای کار بدون وقفه</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-8">
            <div></div>
            <div className="text-neutral-900">کمد شخصی</div>
            <div className="text-neutral-700">برای نظم و امنیت بیشتر</div>
          </div>

          <div className="flex flex-col justify-center items-center gap-8">
            <CoffeeIcon className="text-primary-500" />
            <div className="text-neutral-900">کافه</div>
            <div className="text-neutral-700">برای استراحت های کوتاه</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-8">
            <div></div>
            <div className="text-neutral-900">قیمت مناسب</div>
            <div className="text-neutral-700">برای صرفه جویی</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
