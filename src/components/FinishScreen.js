function FinishScreen({ points, numPoints, highscore, dispatch }) {
  const percentage = Math.round((points / numPoints) * 100);
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of <strong>{numPoints}</strong>{" "}
        points. ( {percentage}% )
      </p>
      <p className="highscore">(Highscore : {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
