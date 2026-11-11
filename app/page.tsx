import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, Logo } from "@/components/icons";
import { ScrollShadow } from "@heroui/react";
import { Card } from "@heroui/react";

export default function Home() {
  return (
    <section
      className="flex flex-grow items-center items-stretch items-grow  gap-4 md:py-10 max-h-[90vh]"
      id="container"
    >
      <section className="flex flex-col" id="display-left">
        <div className="w-full p-0 sm:max-w-sm">
          <ScrollShadow className="max-h-[90vh] p-4">
            <div className="space-y-4">
              <Card key={`start-selections`} className="min-w-[35vh] p-4">
                <Card className="border">Race</Card>
                <Card className="border">Class</Card>
                <Card className="border">Background</Card>
              </Card>
              {/* all levels */}
              {Array.from({ length: 10 }).map((_, idx) => (
                <Card
                  key={`scroll-shadow-lorem-content-${idx}`}
                  className="min-w-[35vh] p-4"
                >
                  <p>Level {idx}</p>
                </Card>
              ))}
            </div>
          </ScrollShadow>
        </div>
      </section>
      <section
        className="flex flex-col gap-4 py-8 md:py-10 flex-stretch flex-grow"
        id="display-right"
      >
        {/* <section
        className="grid grid-cols-3 grid-rows-3 gap-4 py-8 md:py-10"
        id="display-right"
      > */}
        <div
          className="flex text-center justify-center  flex-stretch"
          id="row-1"
        >
          <Card className="mx-4 my-4">
            {/* <span className={title({ color: "blue" })}>beautiful&nbsp;</span> */}
            <br />
            <span className={title()}>Character box 1</span>
            <div className={subtitle({ class: "mt-4" })}>Subtitle</div>
          </Card>
          <Card className="mx-4 my-4 flex-grow">
            <br />
            <span className={title()}>Character box 2</span>
            <div className={subtitle({ class: "mt-4" })}>Subtitle</div>
          </Card>
        </div>

        <div className="flex gap-3" id="row-2">
          <a
            className="button button--primary button--md rounded-full"
            href={"http://localhost:3000/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            Button1
          </a>
          <a
            className="button button--tertiary button--md rounded-full"
            href={"http://localhost:3000/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Logo />
            Button2
          </a>
        </div>
      </section>
    </section>
  );
}
