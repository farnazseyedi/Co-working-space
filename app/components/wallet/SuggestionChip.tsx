"use client";
import React from "react";

interface SuggestionChipProps {
  label: string;
  onClick: () => void;
}

export default function SuggestionChip({
  label,
  onClick,
}: SuggestionChipProps) {
  return (
    <button
      className="px-4 py-1 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 transition"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
