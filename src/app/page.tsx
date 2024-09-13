import {
  HomeBanner,
  HomeCompanyHistory,
  HomeLatestWorks,
  HomeOurServices,
  HomeTestimonials,
  HomeWhyChooseUs,
} from "@/components/home";

export default function Home() {
  return (
    <div className="h-full">
      <HomeBanner />
      <HomeCompanyHistory />
      <HomeOurServices />
      <HomeWhyChooseUs />
      <HomeLatestWorks />
      <HomeTestimonials />
    </div>
  );
}
