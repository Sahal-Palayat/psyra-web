"use client"
import { useState } from "react"
import {
  format,
  addDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  isToday,
  isBefore,
  startOfDay,
} from "date-fns"

interface CalendarProps {
  selected: Date | undefined
  onSelect: (date: Date) => void
}

export function Calendar({ selected, onSelect }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        <button
          type="button"
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="p-2 rounded-full hover:bg-[#B6E5DF]/30 text-[#005657]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h2 className="text-lg font-semibold text-[#005657]">{format(currentMonth, "MMMM yyyy")}</h2>
        <button
          type="button"
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="p-2 rounded-full hover:bg-[#B6E5DF]/30 text-[#005657]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    )
  }

  const renderDays = () => {
    const days = []
    const dateFormat = "EEEEE"
    const startDate = startOfWeek(currentMonth)

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center text-xs font-medium text-gray-500 uppercase">
          {format(addDays(startDate, i), dateFormat)}
        </div>,
      )
    }

    return <div className="grid grid-cols-7 mb-2">{days}</div>
  }

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)
    const today = startOfDay(new Date())

    const rows = []
    let days = []
    let day = startDate
    let formattedDate = ""

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "yyyy-MM-dd")
        const cloneDay = day
        // Only disable past dates (before today)
        const isDisabled = isBefore(startOfDay(day), today)

        days.push(
          <div
            key={formattedDate}
            className={`relative p-2 text-center cursor-pointer ${
              !isSameMonth(day, monthStart)
                ? "text-gray-300"
                : isDisabled
                  ? "text-gray-300 cursor-not-allowed"
                  : isToday(day)
                    ? "bg-[#B6E5DF]/20 text-[#005657]"
                    : "text-gray-700 hover:bg-[#B6E5DF]/20"
            } ${selected && isSameDay(day, selected) ? "bg-[#005657] text-white hover:bg-[#005657]/90" : ""}`}
            onClick={() => !isDisabled && onSelect(cloneDay)}
          >
            {format(day, "d")}
          </div>,
        )
        day = addDays(day, 1)
      }
      rows.push(
        <div key={formattedDate} className="grid grid-cols-7">
          {days}
        </div>,
      )
      days = []
    }
    return <div className="mb-2">{rows}</div>
  }

  return (
    <div className="w-full">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  )
}
