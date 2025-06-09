"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronDown, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface DynamicSelectProps {
  value: string
  onChange: (value: string) => void
  handle: (value: string) => void
  options: string[]
  placeholder?: string
}

export default function DynamicSelect({
  value,
  onChange,
  handle,
  options,
  placeholder = "Type to search or select an option",
}: DynamicSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredOptions, setFilteredOptions] = useState(options)

  // Filter options based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredOptions(options)
    } else {
      const filtered = options.filter((option) => option.toLowerCase().includes(searchTerm.toLowerCase()))
      setFilteredOptions(filtered)
    }
  }, [searchTerm, options])

  // Handle option selection
  const handleSelect = (option: string) => {
    setSearchTerm(option)
    onChange(option)
    handle(option)
    setIsOpen(false)
  }

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setSearchTerm(inputValue)
    setIsOpen(true)

    // If user types exactly an option, auto-select it
    // const exactMatch = options.find((option) => option.toLowerCase() === inputValue.toLowerCase())
    // if (exactMatch) {
    //   onChange(exactMatch)
    //   handle(exactMatch)
    // }
  }

  // Handle input focus
  const handleInputFocus = () => {
    setIsOpen(true)
  }

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest(".dynamic-select-container")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="dynamic-select-container relative w-full">
      <div className="relative">
        <Input
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder={placeholder}
          className="w-full bg-white/70 backdrop-blur-sm border-emerald-200/60 focus:border-teal-500 focus:ring-teal-500/20 rounded-xl py-6 px-4 pr-12 text-base transition-all duration-300"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          <Search className="h-4 w-4 text-gray-400" />
          <ChevronDown
            className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-emerald-200/60 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto">
          {filteredOptions.length > 0 ? (
            <div className="p-2">
              {filteredOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="w-full text-left py-3 px-4 hover:bg-emerald-50/80 focus:bg-emerald-50/80 rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-3"
                >
                  <span className="text-gray-700">{option}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              <div className="flex flex-col items-center gap-2">
                <Search className="h-5 w-5 text-gray-400" />
                <span className="text-sm">No options found for "{searchTerm}"</span>
                <span className="text-xs text-gray-400">Try a different search term</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
