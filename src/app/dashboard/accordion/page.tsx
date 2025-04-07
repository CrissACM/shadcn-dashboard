import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "item-1",
    name: "Accordion Item 1",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: "item-2",
    name: "Accordion Item 2",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: "item-3",
    name: "Accordion Item 3",
    content: "Lorem ipsum dolor sit amet",
  },
];

export default function AccordionPage() {
  return (
    <>
      <Accordion type="multiple" className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger>{item.name}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
