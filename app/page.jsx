import TypeWriterEffect from "./components/TypeWriterEffect/TypeWriterEffect";

export default function Home() {
  return (
    <>
      <div className="flex w-full h-screen justify-center items-center z-10 pointer-events-none">
        <div className="block text-center">
          <TypeWriterEffect
            strings={["Hello, I'm Diaz Amantajati Susilo"]}
            wrapperClassName="text-7xl font-extrabold tracking-tight leading-none"
            className="pb-10"
            delay={170}

          />
          <TypeWriterEffect
            strings={[
              "I'm an undergraduate Information Engineering student at Gadjah Mada University.",
            ]}
            wrapperClassName="text-4xl  tracking-tight leading-none"
            cursorClassName="text-4xl"
            delay={90}
          />
        </div>
      </div>
    </>
  );
}
