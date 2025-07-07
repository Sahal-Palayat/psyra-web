"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Search, Check } from "lucide-react"

interface SingleSelectDropdownProps {
  value: string
  onChange: (value: string) => void
  handle: (value: string) => void
  options: string[]
  placeholder?: string
  searchable?: boolean
}

export const SingleSelectDropdown = ({
  value,
  onChange,
  handle,
  options,
  placeholder = "Select an option...",
  searchable = true,
}: SingleSelectDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Filter options based on search term
  const filteredOptions = options.filter((option) => option.toLowerCase().includes(searchTerm.toLowerCase()))

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchTerm("")
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen, searchable])

  const handleOptionClick = (option: string) => {
    onChange(option)
    handle(option)
    setIsOpen(false)
    setSearchTerm("")
  }

  const displayValue = value || placeholder

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Main Select Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-4 text-left bg-white/60 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 flex items-center justify-between group hover:shadow-lg min-h-[60px] ${
          isOpen
            ? "border-teal-400 bg-gradient-to-r from-teal-50/80 to-emerald-50/80 shadow-lg shadow-teal-500/20"
            : "border-gray-200 hover:border-teal-200 hover:bg-gradient-to-r hover:from-teal-50/50 hover:to-emerald-50/50"
        }`}
      >
        <div className="flex-1">
          {value ? (
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"></div>
              <span className="text-gray-800 font-medium">{value}</span>
            </div>
          ) : (
            <span className="text-gray-500 flex items-center gap-3">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              {placeholder}
            </span>
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:text-teal-500 ${
            isOpen ? "rotate-180 text-teal-500" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-xl border-2 border-teal-200 rounded-2xl shadow-2xl shadow-teal-500/20 overflow-hidden animate-in slide-in-from-top-2 duration-300">
          {/* Search Input */}
          {searchable && (
            <div className="p-3 border-b border-teal-100 bg-gradient-to-r from-teal-50/30 to-emerald-50/30">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-teal-500" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search options..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/80 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                />
              </div>
            </div>
          )}

          {/* Options List */}
          <div className="max-h-60 overflow-y-auto custom-scrollbar">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`w-full p-4 text-left transition-all duration-200 flex items-center justify-between group ${
                    value === option
                      ? "bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-700 border-l-4 border-teal-400"
                      : "hover:bg-gradient-to-r hover:from-teal-50/50 hover:to-emerald-50/50 hover:text-teal-600"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        value === option ? "bg-gradient-to-r from-teal-400 to-emerald-400" : "bg-gray-300"
                      }`}
                    ></div>
                    <span className="font-medium">{option}</span>
                  </div>
                  {value === option && <Check className="w-4 h-4 text-teal-600 animate-in zoom-in-50 duration-200" />}
                </button>
              ))
            ) : (
              <div className="p-6 text-center text-gray-500">
                <Search className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p className="font-medium">No options found</p>
                <p className="text-sm">Try adjusting your search</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-teal-100 bg-gradient-to-r from-teal-50/30 to-emerald-50/30">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                {filteredOptions.length} option{filteredOptions.length !== 1 ? "s" : ""} available
              </span>
              {value && (
                <button
                  onClick={() => {
                    onChange("")
                    setIsOpen(false)
                  }}
                  className="text-red-500 hover:text-red-600 font-medium transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #14b8a6, #10b981);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0f766e, #059669);
        }
      `}</style>
    </div>
  )
}
