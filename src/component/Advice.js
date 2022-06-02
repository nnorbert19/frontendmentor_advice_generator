import React from 'react'
import divider_desktop from '../images/pattern-divider-desktop.svg';
import divider_mobile from '../images/pattern-divider-mobile.svg';
import dice from '../images/icon-dice.svg';

function Advice({advice, err,isLoading,getAdvice}) {
  return (
    <div className="Container">
        {err && <h2>{err}</h2>}
        <h5 className="Advice-id">ADVICE #{advice.slip.id}</h5>
        <h2 className="Advice">"{advice.slip.advice}"</h2>
        <img className="Divider Desktop" alt="divider" src={divider_desktop} />
        <img className="Divider Mobile" alt="divider" src={divider_mobile} />
        <button className="Dice" onClick={() => getAdvice()}>
          <img className="Dice-image" alt="dice" src={dice}></img>
        </button>
    </div>
  )
}

export default Advice
