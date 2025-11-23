import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../ui/card";
import { ImageProject } from "../atoms/ImageProject";
import { TextAtom } from "../atoms/Text";
import { BadgeAtom } from "../atoms/Badge";
import { ButtonProject } from "../atoms/ButtonProject";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageSrc?: string;
  imageHint?: string;
  githubUrl: string;
  liveUrl?: string | null;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  imageSrc,
  imageHint,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <Card className="flex flex-col bg-white dark:bg-black w-auto pt-0 gap-2 md:gap-4 lg:gap-6">
      {imageSrc && (
        <div className="relative w-full aspect-video">
          <ImageProject
            src={imageSrc}
            alt={title}
            hint={imageHint}
            className="object-cover w-full h-full transition-transform duration-300 lg:hover:scale-105"
          />
        </div>
      )}

      <CardHeader>
        <CardTitle className="font-bold text-xl sm:text-2xl md:text-3xl">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <TextAtom className="text-sm sm:text-base md:text-lg text-black dark:text-white mb-4">{description}</TextAtom>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <BadgeAtom key={tag}>{tag}</BadgeAtom>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-2 flex-wrap">
        <ButtonProject href={githubUrl} variant="outline" size="sm">
          <Github className="mr-2 h-4 w-4" /> GitHub
        </ButtonProject>
        {liveUrl && (
          <ButtonProject href={liveUrl} size="sm">
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </ButtonProject>
        )}
      </CardFooter>
    </Card>
  );
};