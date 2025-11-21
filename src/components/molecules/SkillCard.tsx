import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ListAtom } from "../atoms/List";

interface SkillCardProps {
  title: string;
  items: string[];
}

export const SkillCard = ({ title, items }: SkillCardProps) => {
  return (
    <Card className="h-full p-10 bg-white dark:bg-black">
      <CardHeader>
        <CardTitle className="font-bold text-lg md:text-xl lg:text-2xl text-center text-[#1da1f2]">
          {title}
        </CardTitle>
      </CardHeader>
      <div className="border-b-2 border-black dark:border-white w-full"></div>
      <CardContent className="text-left space-y-3">
        <ListAtom items={items} />
      </CardContent>
    </Card>
  );
};
