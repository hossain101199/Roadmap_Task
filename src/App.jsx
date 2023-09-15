import Container from "./components/atoms/Container";

import PhaseLeft from "./components/molecules/PhaseLeft";
import PhaseRight from "./components/molecules/PhaseRight";

const App = () => {
  return (
    <div className="bg-primary py-[120px] text-white">
      <Container>
        <h2 className="font-bold text-center text-[57px]">Roadmap</h2>
        <p className="font-normal text-center text-lg text-textColor mt-5">
          The following roadmap lists 2022 milestones.
        </p>

        <div className="mt-[93px] flex flex-col items-center gap-[80px] relative">
          <hr className="w-1 h-full bg-secondary absolute" />
          {[1, 2, 3, 4].map(() => (
            <>
              <PhaseRight />
              <PhaseLeft />
            </>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default App;
