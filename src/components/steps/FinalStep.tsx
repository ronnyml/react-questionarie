type FinalStepProps = {
  restart: () => void;
};

const FinalStep: React.FC<FinalStepProps> = ({ restart }) => {
  return (
    <div>
      <button type="button" className="restart-button" onClick={restart}>
        Restart questionnaire
      </button>
    </div>
  );
};

export default FinalStep;
