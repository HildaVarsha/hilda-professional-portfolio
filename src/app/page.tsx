import {
  HomeBanner,
  HomeCompanyHistory,
  HomeOurServices,
} from "@/components/home";

export default function Home() {
  return (
    <div className="h-full">
      <HomeBanner />
      <HomeCompanyHistory />
      <HomeOurServices />
    </div>
  );
}
