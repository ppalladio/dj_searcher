import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface SearchItem {
  id: string;
  query: string;
}

interface Props {
  recentSearches: SearchItem[];
  topSearches: SearchItem[];
}

const RecentAndTopSearches = ({ recentSearches, topSearches }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <Card>
        <CardHeader>
          <CardTitle>Recent Searches</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {recentSearches.map((search) => (
              <li key={search.id}>
                <Link href={`/search?q=${encodeURIComponent(search.query)}`}>
                  {search.query}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Top Searches</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {topSearches.map((search) => (
              <li key={search.id}>
                <Link href={`/search?q=${encodeURIComponent(search.query)}`}>
                  {search.query}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentAndTopSearches;