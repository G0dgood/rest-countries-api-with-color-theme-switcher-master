import Image from "next/image";
import Link from "next/link";

interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
  alpha3Code: string;
}

interface CountryCardProps {
  country: Country;
}

export function CountryCard({ country }: CountryCardProps) {
  const formatPopulation = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  return (
    <Link href={`/country/${country.alpha3Code}`}>
      <div className="bg-[var(--elements)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
        <div className="relative w-full h-48 sm:h-40">
          <Image
            src={country.flags.svg}
            alt={`${country.name} flag`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h2 className="text-lg font-extrabold text-[var(--text)] mb-4">
            {country.name}
          </h2>
          <div className="space-y-1 text-sm text-[var(--text)]">
            <p className="font-light">
              <span className="font-semibold">Population: </span>
              {formatPopulation(country.population)}
            </p>
            <p className="font-light">
              <span className="font-semibold">Region: </span>
              {country.region}
            </p>
            <p className="font-light">
              <span className="font-semibold">Capital: </span>
              {country.capital || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

