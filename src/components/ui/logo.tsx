export const Logo = ({ color = "white" }: { color?: string }) => {
  return (
    <div className="flex items-center gap-2">
      {/* <span className="text-2xl font-bold" style={{ color }}>
        AlteroLabs
      </span> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="195"
        height="38"
        fill="none"
        viewBox="0 0 195 38"
      >
        <path
          fill={color}
          d="M53.422 9.695h4.564l6.582 18.924H60.8l-1.487-4.612h-7.51l-1.274 4.612h-3.69l6.583-18.924zm-.956 11.741h6.13l-3.025-9.409h-.504l-2.6 9.41zm14.855-12.06h3.185V28.62H67.32V9.376zM81.289 28.62c-.583.106-1.671.186-2.627.186-2.441 0-3.822-1.22-3.822-3.764v-8.11h-1.83v-2.466h1.83v-3.074h3.185v3.074h3.264v2.465h-3.264v7.501c0 1.379.398 1.83 1.778 1.83h1.486v2.358zm14.904-6.653H86.32c.133 3.34 1.699 4.533 3.875 4.533 2.23 0 2.972-.69 3.237-2.041h2.787c-.318 2.703-2.52 4.48-6.077 4.48-4.167 0-7.033-2.73-7.033-7.396 0-4.665 2.92-7.395 6.847-7.395 4.406 0 6.502 2.836 6.237 7.82zm-6.157-5.619c-1.938 0-3.265.981-3.61 3.605h6.848c-.054-2.492-1.274-3.605-3.238-3.605zm9.502-1.882h2.999l.106 3.738h.133c.637-2.598 2.07-3.923 3.981-3.923.291 0 .61.026.902.132v2.995h-1.672c-2.07 0-3.264 1.114-3.264 4.135v7.077h-3.185V14.465zm9.773 7.077c0-4.718 3.105-7.395 7.112-7.395 3.981 0 7.113 2.677 7.113 7.395s-3.132 7.395-7.113 7.395c-4.007 0-7.112-2.677-7.112-7.395zm3.344 0c0 3.525 1.353 4.877 3.768 4.877 2.389 0 3.769-1.272 3.769-4.877 0-3.525-1.38-4.877-3.769-4.877-2.415 0-3.768 1.352-3.768 4.877zm14.412-11.847h3.397V25.81h9.394v2.81h-12.791V9.694zm27.447 18.924h-2.972c-.213-.715-.372-1.802-.372-2.968h-.213c-.583 1.908-2.096 3.286-4.485 3.286-2.202 0-4.14-1.378-4.14-3.817 0-2.332 1.858-4.187 5.441-4.638l3.184-.398v-.742c0-1.934-.796-2.783-2.866-2.783-1.857 0-2.574.636-2.68 1.962h-2.813c.106-2.995 2.415-4.374 5.785-4.374 4.22 0 5.706 1.882 5.706 5.301v5.222c0 1.75.16 2.995.425 3.95zm-9.05-3.923c0 1.352.77 1.962 2.203 1.962 1.858 0 3.344-1.06 3.344-3.737v-1.06l-2.813.29c-1.964.24-2.734 1.088-2.734 2.545zm12.854-15.32h3.185l-.027 8.694h.239c.796-2.465 2.627-3.923 4.83-3.923 2.972 0 5.786 2.518 5.786 7.395s-2.92 7.395-5.759 7.395c-2.177 0-4.061-1.193-4.91-3.605h-.213l-.132 3.287h-2.999V9.376zm6.9 17.043c2.442 0 3.769-1.378 3.769-4.877 0-3.498-1.327-4.85-3.769-4.85-1.991 0-3.769 1.431-3.769 4.797v.106c0 3.393 1.593 4.824 3.769 4.824zm9.164-1.723h2.733c.133 1.3.929 1.909 3.291 1.909 2.097 0 2.787-.61 2.787-1.75 0-1.06-.85-1.51-3.317-2.093-3.053-.716-4.937-1.803-4.937-4.48 0-2.359 2.017-4.135 5.361-4.135 3.689 0 5.467 1.723 5.467 4.109h-2.76c-.053-1.193-.796-1.776-2.68-1.776-1.673 0-2.362.53-2.362 1.617 0 1.166.769 1.537 3.051 2.067 3.292.769 5.229 1.829 5.229 4.48 0 2.57-2.23 4.293-5.786 4.293-4.113 0-6.051-1.67-6.077-4.24z"
        ></path>
        <mask
          id="mask0_454_1784"
          style={{ maskType: "luminance" }}
          width="34"
          height="23"
          x="7"
          y="7"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M40.184 7.3H7.379v22.45h32.805V7.3z"></path>
        </mask>
        <g mask="url(#mask0_454_1784)">
          <path
            fill="#F1C01B"
            d="M26.072 24.797a.773.773 0 01.001 1.113L22.7 29.193c-.315.306-.937.556-1.383.556H16.97c-.446 0-.55-.246-.23-.546l6.46-6.075a.848.848 0 011.156.008l1.715 1.662v-.001z"
          ></path>
          <path
            fill="#8B5CF6"
            d="M29.978 12.984a.77.77 0 010 1.11l-6.905 6.69-1.147 1.11-4.026 3.9-1.147 1.111-2.363 2.288a.832.832 0 01-1.147 0l-4.5-4.359-1.136-1.1a.763.763 0 01.012-1.1l2.363-2.288 1.147-1.11 4.026-3.901 1.147-1.11.134-.131 1.147-1.111 4.501-4.36 1.136-1.1c.309-.299.814-.299 1.123 0l1.136 1.1 4.5 4.36z"
          ></path>
          <path
            fill="#2AD68E"
            d="M39.946 22.635c.316.306.32.8.013 1.1l-1.136 1.1-4.5 4.36a.832.832 0 01-1.148 0l-4.067-3.94-1.147-1.111-2.322-2.25a.77.77 0 010-1.11l4.5-4.36 1.136-1.099c.31-.3.82-.294 1.136.012l7.536 7.3v-.002z"
          ></path>
        </g>
      </svg>
    </div>
  );
};
