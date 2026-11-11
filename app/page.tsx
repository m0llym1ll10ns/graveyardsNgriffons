//import { siteConfig } from "@/config/site";

import { ScrollShadow } from "@heroui/react";
import { Card } from "@heroui/react";
import { Table } from "@heroui/react";

import { title, subtitle } from "@/components/primitives";
import { Logo } from "@/components/icons";

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
        <div
          className="flex text-center justify-center  flex-stretch"
          id="row-1"
        >
          <Card className="mx-4 my-4 flex flex-row">
            <div className="flex flex-col">
              <Card className="border flex flex-row">
                <span className="text-gray-700 dark:text-gray-400">
                  {" "}
                  Level{" "}
                </span>
                <p>1</p>
              </Card>
              <Card className="border flex flex-row">
                <span className="text-gray-700 dark:text-gray-400"> XP </span>
                <p>0</p>
              </Card>
            </div>

            <div className="flex flex-col">
              <Card className="border flex flex-row">
                <p className="text-gray-700 dark:text-gray-400">Name</p>{" "}
                <p>Examplo</p>
              </Card>
              <Card className="border flex flex-row">
                <span className="text-gray-700 dark:text-gray-400">
                  Background{" "}
                </span>
                <p>Acolyte</p>
              </Card>
            </div>
            <div className="flex flex-col">
              <Card className="border flex flex-row">
                <span className="text-gray-700 dark:text-gray-400"> Race </span>
                <p>Human</p>
              </Card>
              <Card className="border flex flex-row">
                <span className="text-gray-700 dark:text-gray-400">
                  {" "}
                  Class{" "}
                </span>
                <p>Fighter</p>
              </Card>
            </div>
          </Card>
          <Card className="mx-4 my-4 flex-row flex-grow">
            <div className="flex flex-col">
              <Card className="border flex flex-row  text-lg">
                <div className="text-gray-700 dark:text-gray-400">HP</div>
                <p>10</p>
                <p>/</p>
                <p>10</p>
              </Card>
              <Card className="border flex flex-row  text-lg">
                <div className="text-gray-700 dark:text-gray-400">AC</div>
                <p>10</p>
              </Card>
            </div>
            {/* <div className="flex flex-col flex-grow ">
              <p>Str Dex Con Int Wis Cha</p>
              <Card className="border flex flex-row   text-lg">
                <div className="text-gray-700 dark:text-gray-400">
                  Ability Scores
                </div>
              </Card>
              <Card className="border flex flex-row   text-lg">
                <div className="text-gray-700 dark:text-gray-400">
                  Saving Throws
                </div>
              </Card>
            </div> */}
            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label="Example static collection table">
                  <Table.Header className="text-center">
                    <Table.Column isRowHeader> </Table.Column>
                    <Table.Column className="text-center">Str</Table.Column>
                    <Table.Column className="text-center">Dex</Table.Column>
                    <Table.Column className="text-center">Con</Table.Column>
                    <Table.Column className="text-center">Int</Table.Column>
                    <Table.Column className="text-center">Wis</Table.Column>
                    <Table.Column className="text-center">Cha</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row key="abilities">
                      <Table.Cell className="text-gray-700 dark:text-gray-400">
                        Ability Scores
                      </Table.Cell>
                      <Table.Cell>10</Table.Cell>
                      <Table.Cell>10</Table.Cell>
                      <Table.Cell>10</Table.Cell>
                      <Table.Cell>10</Table.Cell>
                      <Table.Cell>10</Table.Cell>
                      <Table.Cell>10</Table.Cell>
                    </Table.Row>
                    <Table.Row key="saves">
                      <Table.Cell className="text-gray-700 dark:text-gray-400">
                        Saving Throws
                      </Table.Cell>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>1</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
              <Table.Footer>{/* Optional footer content */}</Table.Footer>
            </Table>
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
            <Logo size={15} />
            Button2
          </a>
        </div>
      </section>
    </section>
  );
}
