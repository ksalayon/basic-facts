import React from 'react';
import sizeMe from 'react-sizeme';
import Confetti from 'react-confetti'

var ResultDisplay = (props) => {

  var percentage = ((props.points/props.total) * 100);

  var intro;
  if(percentage < 50) {
    intro = <h3>Practice makes perfect. You're getting there...</h3>;
  } else if(percentage >= 50 && percentage <= 60) {
    intro = <h3>Just a little more. You're getting closer to greatness!</h3>;
  } else if(percentage > 60 && percentage <= 70) {
    intro = <h3>Good job! Told you, you can do it!</h3>;
  } else if(percentage > 70 && percentage <= 80) {
    intro = <h3>Awesome Job! Reach for the stars!</h3>;
  } else if(percentage > 80 && percentage <= 95) {
    intro = <h3>Double high-five! You are now ready to level-up! Great Job!</h3>;
  } else if(percentage > 95 && percentage < 100) {
    intro = <h3>Double, Triple, Quadruple high-five! You're on fire!</h3>;
  } else {
    intro = <h3>Skra-Ka-Doooshh Baby! You're unstoppable like a hulking train on rainbow train-tracks! Weeeeee!</h3>;
  }

  var score = <p>You got {props.points} points over {props.total} </p>;

  const { width, height } = props.size;

  var conf;
  if(percentage === 100) {
    conf = <Confetti {...props.size} />;
  }
  return (
    <div className="results">
      {intro}
      {score}
      { conf }
    </div>

  );
};

export default sizeMe({ monitorHeight: true })(ResultDisplay);
// export {ResultDisplay};
