import snakeImg from "../img/Snake Arcade Game.png";
import dashboardImg from "../img/Dashboard.png";
import mapprototype from "../img/mapprototype.png";
import error from "../img/204 Error.png";

export const projects = [
    {
        title: "Snake Arcade Game",
        role: "토스 게임 공모전 참가 및 출시작",
        period: "2025",
        description:
            "8bit 스타일 스네이크 게임을 HUD 느낌으로 구현한 미니 게임. 점수/배경음/포커스 제어 등 UX 디테일에 집중.(토스 앱 내에서 (스네이크 게임)을 검색후 즐겨보세요)",
        tech: ["React", "Custom Canvas", "Audio", "HUD UI"],
        links: {
            demo: "https://tosssnakegame.netlify.app/",
            github: "https://github.com/wellwellgood/snakegame",
        },
        background: `url(${snakeImg}) center/cover no-repeat`,
        textColor: "#ffffff",

    },
    {
        title: "Map Prototype",
        role: "개인 프로젝트",
        period: "2025 ~ (미완성)",
        description:
            "지도 + HUD 오버레이를 조합한 내비게이션 컨셉. 속도, 경로, 남은 거리 등 핵심 정보만 전면에 노출.",
        tech: ["React", "Map API", "Geolocation"],
        links: {
            demo: "https://hudnavigation.netlify.app/",
            github: "https://github.com/wellwellgood/HUD",
        },
        background: `url(${mapprototype}) center/cover no-repeat`,
        textColor: "#ffffff",
    },
    {
        title: "Dashboard",
        role: "개인 프로젝트",
        period: "2025",
        description:
            "네온 스타일의 미니 대시보드. 위젯 단위로 정보 카드를 구성하고, 상태 및 테마를 관리.",
        tech: ["React", "Tailwind CSS", "LocalStorage"],
        links: {
            demo: "https://kkywebapp.netlify.app/",
            github: "https://github.com/wellwellgood/FrontReact",
        },
        background: `url(${dashboardImg}) center/cover no-repeat`,
        bgClass: "bg-black-900/100",
        textColor: "#ffffff",
    },
    {
        title: "Publishing Site",
        role: "개인 프로젝트",
        period: "2023 ~ 2025",
        description:
            "각종 사이트들을 클론 코딩한 프로젝트 모음.",
        tech: ["Html", "CSS", "javascript"],
        links: {
            // demo: alert("깃 허브를 확인해 주세요"),
            github: "https://github.com/wellwellgood/K-popol/tree/main/sitelink",
        },
        background: `url(${error}) center/cover no-repeat`,
        textColor: "#ffffff",
    },
];
