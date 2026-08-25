import ExclusiveDeals from "@/components/home/ExclusiveDeals";
import FeatureBar from "@/components/home/FeatureBar";
import FlashDeals from "@/components/home/FlashDeals";
import Herosection from "@/components/home/herosection";
import JustForYou from "@/components/home/JustForYou";
import NewArrivals from "@/components/home/NewArrivals";
import ShopbyCategory from "@/components/home/ShopbyCategory";
const Page = () => {
 return (
 <div className="">
   <Herosection />
   <FeatureBar />
   <FlashDeals />
   <ShopbyCategory />
   <NewArrivals />
   <ExclusiveDeals />
   <JustForYou />
 </div>
 );
};
export default Page;