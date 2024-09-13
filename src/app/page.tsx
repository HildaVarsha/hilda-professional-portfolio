import {
  HomeBanner,
  HomeCompanyHistory,
  HomeLatestWorks,
  HomeOurServices,
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
    </div>
  );
}
