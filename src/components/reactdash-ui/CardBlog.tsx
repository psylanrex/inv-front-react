import { Calendar } from "react-bootstrap-icons";
import { Card } from "@/components/reactdash-ui";

type CardBlogData = {
  img: string;
  title: string;
  date: string;
  description: string;
};

type CardBlogProps = {
  className?: string;
  data: CardBlogData;
};

export default function CardBlog(props: CardBlogProps) {
  // Props
  const data_blog = props.data;
  // Props className
  const addClass = props.className ? `${props.className}` : "";

  return (
    <Card
      className={`p-0 relative border border-gray-200 dark:border-gray-700 ${addClass}`}
    >
      <div className="overflow-hidden">
        <img
          className="max-w-full w-full h-auto"
          src={data_blog.img}
          alt={data_blog.title}
        />
      </div>
      <div className="p-5">
        <h3 className="heading-4 font-bold">{data_blog.title}</h3>
        <div className="text-sm text-gray-500 my-2">
          <Calendar className="inline-block mr-2" />
          {data_blog.date}
        </div>
        <p className="text-gray-500">{data_blog.description}</p>
      </div>
    </Card>
  );
}
