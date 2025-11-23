import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ListAtom } from "../atoms/List";

interface SkillCardProps {
  title: string;
  items: string[];
}

export const SkillCard = ({ title, items }: SkillCardProps) => {
  return (
    <Card className="w-auto h-auto md:h-auto py-4 px-2 sm:py-8 lg:py-10 sm:px-8 lg:px-10 bg-white dark:bg-black">
      <CardHeader>
        <CardTitle className="font-bold text-sm sm:text-lg lg:text-2xl text-center text-[#1da1f2]">
          {title}
        </CardTitle>
      </CardHeader>
      <div className="border-b-2 border-black dark:border-white w-full mb-1 md:mb-4"></div>
      <CardContent className="text-left space-y-3 text-sm sm:text-base lg:text-lg">
        <ListAtom items={items} />
      </CardContent>
    </Card>
  );
};
