"use client";

import { useState, useEffect, useRef } from "react";
import { getAllProductions } from "@/data/productionData";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const productions = getAllProductions();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setShowInput(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const getRandomProductions = (count: number = 5) => {
    const shuffled = [...productions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const filtered = productions.filter((production) =>
        production.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults(getRandomProductions());
      setIsOpen(true);
    }
  };

  const toggleSearch = () => {
    setShowInput(!showInput);
    if (!showInput) {
      setSearchQuery("");
      setResults(getRandomProductions());
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="flex items-center">
        {showInput ? (
          <input
            ref={inputRef}
            type="text"
            placeholder="Search productions..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="bg-transparent border-none outline-none text-white placeholder-gray-300 w-40 sm:w-48"
          />
        ) : null}
        <button
          aria-label="Search"
          className="text-white font-bold hover:bg-gray-700 rounded-full p-2 transition-all duration-200"
          onClick={toggleSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-64 bg-[#5f1e1d] rounded-lg shadow-lg z-50"
          >
            <div className="py-2">
              {searchQuery.length === 0 && (
                <div className="px-4 pt-8 pb-2 text-sm text-gray-300 border-b border-gray-700">
                  Popular Productions
                </div>
              )}
              {results.map((production) => (
                <Link
                  key={production.id}
                  href={production.link}
                  className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors"
                  onClick={() => {
                    setIsOpen(false);
                    setSearchQuery("");
                    setShowInput(false);
                  }}
                >
                  {production.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
