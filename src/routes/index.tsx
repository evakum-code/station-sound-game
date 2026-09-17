import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "버스 타기 국어 게임 | 정류장 이름 읽기" },
      {
        name: "description",
        content: "버스 창밖 정류장을 보고 자음과 모음 카드로 이름을 만드는 어린이 국어 게임입니다.",
      },
      { property: "og:title", content: "버스 타기 국어 게임" },
      {
        property: "og:description",
        content: "자음과 모음 카드를 차례로 눌러 정류장 이름을 만드는 쉬운 국어 게임",
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