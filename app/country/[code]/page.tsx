import Image from "next/image";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { BackButton } from "@/app/components/BackButton";
import countriesData from "@/app/data/data.json";

interface Country {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: Array<{
    name: string;
  }>;
  languages: Array<{
    name: string;
  }>;
  borders?: string[];
  flags: {
    png: string;
    svg: string;
  };
  alpha3Code: string;
}

interface PageProps {
  params: Promise<{
    code: string;
  }>;
}

export default async function CountryDetailPage({ params }: PageProps) {
  const { code } = await params;
  const country = (countriesData as Country[]).find(
    (c) => c.alpha3Code.toLowerCase() === code.toLowerCase()
  );

  if (!country) {
    return (
      <div className="min-h-screen bg-[var(--bg)]">
        <Header />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-12 sm:pt-16">
          <BackButton />
          <p className="text-[var(--text)] text-center py-12">
            Country not found
          </p>
        </div>
      </div>
    );
  }

  const formatPopulation = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  const formatCurrencies = (currencies: Array<{ name: string }>) => {
    return currencies.map((c) => c.name).join(", ");
  };

  const formatLanguages = (languages: Array<{ name: string }>) => {
    return languages.map((l) => l.name).join(", ");
  };

  const formatTopLevelDomain = (domains: string[]) => {
    return domains.join(", ");
  };

  // Get border country names
  const borderCountries = country.borders
    ? country.borders
      .map((borderCode) => {
        const borderCountry = (countriesData as Country[]).find(
          (c) => c.alpha3Code === borderCode
        );
        return borderCountry
          ? { code: borderCode, name: borderCountry.name }
          : null;
      })
      .filter((bc): bc is { code: string; name: string } => bc !== null)
    : [];

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Header />
      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-12 sm:pt-16 pb-12 sm:pb-16">
        <BackButton />
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Flag Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={country.flags.svg}
                alt={`${country.name} flag`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Country Details */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text)] mb-6 sm:mb-8">
              {country.name}
            </h1>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mb-8 sm:mb-12">
              {/* Left Column */}
              <div className="flex-1 space-y-2 text-sm sm:text-base">
                <p className="font-light text-[var(--text)]">
                  <span className="font-semibold">Native Name: </span>
                  {country.nativeName}
                </p>
                <p className="font-light text-[var(--text)]">
                  <span className="font-semibold">Population: </span>
                  {formatPopulation(country.population)}
                </p>
                <p className="font-light text-[var(--text)]">
                  <span className="font-semibold">Region: </span>
                  {country.region}
                </p>
                <p className="font-light text-[var(--text)]">
                  <span className="font-semibold">Sub Region: </span>
                  {country.subregion || "N/A"}
                </p>
                <p className="font-light text-[var(--text)]">
                  <span className="font-semibold">Capital: </span>
                  {country.capital || "N/A"}
                </p>
              </div>

              {/* Right Column */}
              <div className="flex-1 space-y-2 text-sm sm:text-base">
                <p className="font-light text-[var(--text)]">
                  <span className="font-semibold">Top Level Domain: </span>
                  {formatTopLevelDomain(country.topLevelDomain)}
                </p>
                <p className="font-light text-[var(--text)]">
                  <span className="font-semibold">Currencies: </span>
                  {formatCurrencies(country.currencies)}
                </p>
                <p className="font-light text-[var(--text)]">
                  <span className="font-semibold">Languages: </span>
                  {formatLanguages(country.languages)}
                </p>
              </div>
            </div>

            {/* Border Countries */}
            {borderCountries.length > 0 && (
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="text-sm sm:text-base font-semibold text-[var(--text)] whitespace-nowrap">
                  Border Countries:
                </span>
                <div className="flex flex-wrap gap-2">
                  {borderCountries.map((border) => (
                    <Link
                      key={border.code}
                      href={`/country/${border.code}`}
                      className="px-4 py-2 bg-[var(--elements)] text-[var(--text)]  shadow-md hover:opacity-80 transition-opacity text-sm sm:text-base font-light"
                    >
                      {border.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

