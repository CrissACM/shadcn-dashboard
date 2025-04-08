import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  const data = "1234567890".split("");

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {data.map((item) => (
        <Card key={item as string}>
          <CardHeader className="flex">
            <Skeleton className="rounded-full mr-2 w-10 h-10" />

            <div className="flex-grow flex-col">
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-3 w-full" />
            </div>
          </CardHeader>

          <CardFooter className="flex justify-end">
            <Skeleton className="h-8 w-20" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
