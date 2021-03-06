type TerminalProps = {
  logs: string;
};

const Terminal = ({ logs }: TerminalProps) => (
  <div className="flex justify-center items-center mt-8">
    <div className="max-w-screen-sm mx-4 text-gray-300 rounded-lg shadow-lg overflow-hidden text-xs">
      <div className="h-8 flex items-center p-2 justify-between bg-gradient-to-b from-gray-700 to-gray-800">
        <div className="flex items-center gap-1">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <span className="font-bold select-none">
            Avancement de la modélisation
          </span>
        </div>
      </div>
      <div className="max-h-104 overflow-y-auto px-2 sm:px-8 py-1 sm:py-4 bg-gray-900 font-mono flex flex-col-reverse">
        <span>
          {[...logs.split("\n"), "..."].map((line, index) => (
            <div
              key={index}
              className={`text-terminal-small sm:text-terminal text-justify py-0.5 ${
                index % 2 === 0 ? "text-blue-300" : "text-green-300"
              }`}
            >
              {line}
              <br />
            </div>
          ))}
        </span>
      </div>
    </div>
  </div>
);

export default Terminal;
