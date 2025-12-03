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
            "8bit 스타일 스네이크 게임. 키보드 입력 처리, 점수/속도 상태 관리, BGM·효과음 컨트롤, HUD 오버레이 UI까지 직접 설계해 모바일·웹 환경 모두에서 부드럽게 동작하도록 최적화했습니다. (토스 앱에서 '스네이크 게임' 검색 후 플레이 가능)",
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
            "브라우저 Geolocation과 Map API를 조합해 실시간 위치 기반 HUD 내비게이션을 프로토타이핑. 속도·경로·남은 거리 등 핵심 데이터를 API 응답에서 파싱해 최소 정보만 전면에 노출하는 오버레이 UI 구조를 React 상태 관리로 구성했습니다.",
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
            "Tailwind CSS 유틸리티를 활용해 네온 스타일 위젯 카드들을 설계하고, React 상태 관리와 LocalStorage를 통해 위젯 구성·테마·간단한 설정값을 클라이언트에서 지속 저장하는 미니 대시보드입니다.",
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
            "다양한 레이아웃을 HTML·CSS·JavaScript만으로 클론 코딩하며 반응형 그리드, 플렉스 레이아웃, 스크롤 인터랙션, 기본 접근성 구조 등을 실습한 퍼블리싱 아카이브입니다.",
        tech: ["Html", "CSS", "javascript"],
        links: {
            // demo: alert("깃 허브를 확인해 주세요"),
            github: "https://github.com/wellwellgood/K-popol/tree/main/sitelink",
        },
        background: `url(${error}) center/cover no-repeat`,
        textColor: "#ffffff",
    },
];
