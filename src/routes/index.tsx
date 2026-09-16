import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "버스 타기 국어 게임 | 정류장 이름 읽기" },
      {
        name: "description",
        content: "초등학교 1학년을 위한 정류장 이름 읽기 버스 국어 게임입니다.",
      },
      { property: "og:title", content: "버스 타기 국어 게임" },
      {
        property: "og:description",
        content: "방송을 듣고 알맞은 정류장 이름을 찾는 쉬운 읽기 게임",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BusGame,
});

function BusGame() {
  return (
    <iframe
      className="block h-dvh w-full border-0"
      src="/bus-game.html"
      title="버스 타기 국어 게임"
    />
  );
}