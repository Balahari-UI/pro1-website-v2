// import { State, Country } from "country-state-city";
import { NextResponse } from "next/server";

export async function GET(req) {
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const limit = parseInt(url.searchParams.get("limit") || "50");
  const search = url.searchParams.get("search")?.toLowerCase() || "";

  const countries = Country.getAllCountries();
  const allStates = countries.flatMap((country) =>
    State.getStatesOfCountry(country.isoCode).map((s) => ({
      name: s.name,
      isoCode: s.isoCode,
      country: country.name,
    })),
  );

  // Filter by search term
  const filteredStates = search
    ? allStates.filter((s) => s.name.toLowerCase().includes(search))
    : allStates;

  const start = (page - 1) * limit;
  const paginatedStates = filteredStates.slice(start, start + limit);

  return NextResponse.json({
    states: paginatedStates,
    total: filteredStates.length,
    page,
    limit,
  });
}
