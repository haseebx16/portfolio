import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  pluton,
  decryptedlabs,
  jobit,
  tripguide,
  threejs,
  upwork_2,
  youtube,
  escrow,
  crowd,
  machine,
  nft,
  chain,
  live,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Smart Contract Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web3 Developer",
    company_name: "Decrypted Labs",
    icon: decryptedlabs,
    iconBg: "#383E56",
    date: "June 2023 - Sep 2023",
    points: [
      "Developed a Full-Stack Decentralized NFT Marketplace as a final project.",
      "Developed Gas-Optimized smart contracts on the Ethereum Network.",
      "Learnt to use PinkSale Protocol.",
      "Focused on developing full-stack Web3 Projects.",
      "Focused on developing backends.",
      "Contributed in open-source projects.",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "Pluton",
    icon: pluton,
    iconBg: "#383E56",
    date: "Feb 2023 - Mar 2023",
    points: [
      "Developing and maintaining smart contract applications using Solidity and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing gas-optimised contracts and ensuring great security.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Blockchain & Web Developer",
    company_name: "Upwork",
    icon: upwork_2,
    iconBg: "#383E56",
    date: "June 2022 - Present",
    points: [
      "Developing and maintaining Web applications using React.js and other related technologies.",
      "Offering services as a Blockchain Developer and working on the Ethereum Blockchain.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implementing gas-optimised smart contracts for clients and providing services in smart contract security.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Decentralized CrowdFunding Platform",
    description:
      "Blockchain-based platform that allows users to fund, and start new campaigns.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: crowd,
    source_code_link: "https://haseebdev-proj2.surge.sh/",
  },
  {
    name: "Decentralized Escrow",
    description:
      "The Escrow protocol is used. Before a transaction can be made, tokens are sent to an escrow, which is a third-party smart contract.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "Ethers.js",
        color: "pink-text-gradient",
      },
    ],
    image: escrow,
    source_code_link: "https://github.com/haseebx16/Decentralized-Escrow",
  },
  {
    name: "Youtube Clone",
    description:
      "Web application that enables an alternative youtube experience with no-ads.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://haseebdev-proj3.surge.sh/",
  },
  {
    name: "NFT Marketplace",
    description:
      "A comprehensive NFT Marketplace platform that allows users to buy NFTs, sell NFTs and withdraw their funds.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nft,
    source_code_link: "https://github.com/haseebx16/NFT-Marketplace-V3",
  },
  {
    name: "Decentralized Vending Machine",
    description:
      "A comprehensive Vending Machine that allows users to buy products, and withdraw their funds.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: machine,
    source_code_link: "https://vendingmachine.surge.sh/",
  },
  {
    name: "ECDSA Node",
    description:
      `ECDSA is used across many security systems, is popular for use in secure messaging apps, and it is the basis of Bitcoin security (with Bitcoin "addresses" serving as public keys).`,
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: chain,
    source_code_link: "https://ecdsa-node-delta.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
