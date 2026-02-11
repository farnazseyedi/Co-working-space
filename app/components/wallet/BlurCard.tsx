import React from "react";

function BlurCard() {
  return (
    <svg
      width="374"
      height="182"
      viewBox="0 0 374 182"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject x="-10" y="-291.289" width="482.578" height="482.579">
        <div
          style={{
            backdropFilter: "blur(5px)",
            clipPath: "url(#bgblur_0_2572_10127_clip_path)",
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>

      <rect
        data-figma-bg-blur-radius="10"
        x="-20.7109"
        y="-38.2893"
        width="372.943"
        height="339.82"
        rx="50"
        transform="rotate(-45 -20.7109 -38.2893)"
        fill="#B7C1DE"
      />

      <defs>
        <clipPath
          id="bgblur_0_2572_10127_clip_path"
          transform="translate(10 291.289)"
        >
          <rect
            x="-20.7109"
            y="-38.2893"
            width="372.943"
            height="339.82"
            rx="50"
            transform="rotate(-45 -20.7109 -38.2893)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default BlurCard;
