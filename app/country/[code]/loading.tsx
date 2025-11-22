import { Header } from "@/app/components/Header";
import { CountryDetailSkeleton } from "@/app/components/CountryDetailSkeleton";

export default function Loading() {
  return (
    <>
      <Header />
      <CountryDetailSkeleton />
    </>
  );
}

