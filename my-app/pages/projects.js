import AnimatedCursor from "../components/AnimatedCursor";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Commerce Application",
    description:
      "An interactive e-commerce app built with Next.js and React. Features include product listing, cart, wishlist, and server-side rendering for optimal performance.",
    link: "https://e-commerce-app-sigma-eight.vercel.app/",
    github: "https://github.com/neelamkoli06/E-commerce-app.git",
  },
  {
    id: 2,
    title: "E-commerce",
    description:
      "An interactive e-commerce app built with Next.js and React. Features include product listing, cart, wishlist, and server-side rendering for optimal performance.",
    link: "https://e-commerce-amber-iota-49.vercel.app/",
    github: "https://github.com/neelamkoli06/E-commerce.git",
  },
  {
    id: 3,
    title: "Currency-Converter",
    description:
      "The Currency Converter is a simple web app that allows users to convert one currency to another using real-time exchange rates.",
    link: "https://currency-converter-pi-self.vercel.app/",
    github: "https://github.com/neelamkoli06/Currency-Converter.git",
  },
  {
    id: 4,
    title: "Todo List",
    description:
      "The To-Do List app is a simple, intuitive tool for managing tasks. Users can add, edit, and delete tasks, helping them stay organized.",
    link: "https://todo-list-two-topaz.vercel.app/",
    github: "https://github.com/neelamkoli06/todo-list.git",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "Provides real-time weather updates based on the user's location or a searched city.",
    link: "https://weather-app-weld-nine-75.vercel.app/",
    github: "https://github.com/neelamkoli06/weather-app.git",
  },
  {
    id: 6,
    title: "Villa",
    description:
      "The Villa Responsive website showcases villa rentals with a modern, mobile-friendly design.",
    link: "https://villa-responsive-git-main-neelam-kolis-projects.vercel.app/",
    github: "https://github.com/neelamkoli06/Villa-Responsive.git",
  },
  {
    id: 7,
    title: "Todo App Manager",
    description:
      "Helps users manage tasks with features to add, edit, and delete to-dos.",
    link: "https://todo-app-manager-brown.vercel.app/",
    github: "https://github.com/neelamkoli06/Todo-App-Manager.git",
  },
  {
    id: 8,
    title: "Calculator",
    description:
      "A simple and intuitive interface for performing basic arithmetic calculations.",
    link: "https://neelamkoli06-web-lgm-task3-compulsory-task.vercel.app/",
    github:
      "https://github.com/neelamkoli06/neelamkoli06-web-lgm-task3-compulsory-task.git",
  },
  {
    id: 9,
    title: "Rock-Paper-Scissor Game",
    description:
      "Lets users play the classic game against the computer. Choose rock, paper, or scissors and see the result instantly.",
    link: "https://rock-paper-scissor-game-git-master-neelamkoli06.vercel.app/",
    github: "https://github.com/neelamkoli06/RockPaperScissor-game.git",
  },
  {
    id: 10,
    title: "Food Delivery Application",
    description:
      "A MERN stack app for browsing menus, placing orders, and tracking deliveries.",
    link: "#",
    github: "https://github.com/neelamkoli06/Food-Delivery-App.git",
  },
];

export default function Projects() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
    <AnimatedCursor />
    <div className="container mx-auto p-6">
      <h1 className="text-center text-4xl font-extrabold mb-12">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-all"
          >
            <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
            <p className="mb-4 text-gray-300">{project.description}</p>
            <div className="flex justify-between items-center mt-4">
              {/* Live Demo Button */}
              <Link href={project.link} passHref>
                <button className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 ease-in-out">
                  <FaExternalLinkAlt className="mr-2 text-lg" />
                  Live Demo
                </button>
              </Link>
              {/* GitHub Button */}
              <Link href={project.github} passHref>
                <button className="flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold rounded-lg shadow-md hover:from-gray-600 hover:to-gray-500 transform hover:scale-105 transition-all duration-300 ease-in-out">
                  <FaGithub className="mr-2 text-lg" />
                  GitHub
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
