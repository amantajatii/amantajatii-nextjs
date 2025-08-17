import Galaxy from "./components/Galaxy/Galaxy";
import SplitText from "./components/SplitText/SplitText";
import TextType from "./components/TextType/TextType";

export default function Home() {
  return (
    <>
      <div className="flex w-full h-screen justify-center items-center z-10 pointer-events-none">
        <div className="h-8/12 border-y-1 border-slate-500/30 w-screen absolute">
          <Galaxy
            mouseRepulsion
            mouseInteraction
            density={1}
            glowIntensity={0.3}
            saturation={0}
            hueShift={140}
            className="absolute inset-0 -z-50 w-full h-full opacity-50"
          />
        </div>
        <div className="block text-center p-20 xl:p-0">
          <div>
            <SplitText
              text="Hello, I'm Diaz Amantajati Susilo."
              className="text-6xl font-semibold text-center block pb-3"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
          <div>
            <TextType
              text={[
                "I'm an undergraduate Information Engineering student at Gadjah Mada University.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
