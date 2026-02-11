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
      className="px-4 py-1 text-sm text-neutral-950 border-b-2 border-tertiary-500 hover:bg-gray-100 transition"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
