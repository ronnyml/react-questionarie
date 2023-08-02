import { useFormContext, initialState } from "context/AppContext";

type FinalStepProps = {
  restart: () => void;
};

const FinalStep: React.FC<FinalStepProps> = ({ restart }) => {
  const { setFormData } = useFormContext();
  const handleOnClick = () => {
    setFormData(initialState);
    restart();
  }

  return (
    <div>
      <button type="button" className="restart-button" onClick={handleOnClick}>
        Restart questionnaire
      </button>
    </div>
  );
};

export default FinalStep;
