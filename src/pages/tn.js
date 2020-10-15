import { useState } from 'react';

let values = [
  { name: 'kindness', url: 'https://media.giphy.com/media/tioQ0snm3PHnG/giphy.gif' },
  { name: 'the customer', url: 'https://media.giphy.com/media/Qtp1Ps7V6mRZwja223/giphy.gif' },
  { name: 'collaboration', url: 'https://media.giphy.com/media/l2QEdoFAgf1zmhEK4/giphy.gif'},
  { name: 'looking to the future', url: 'https://media.giphy.com/media/xqc5bUb5OV1Di/giphy.gif' },
  { name: 'being an exciting place to work', url: 'https://media.giphy.com/media/1qhzyXcmQIt2cGAMCO/giphy.gif' },
  { name: 'sleeping well', url: 'https://media.giphy.com/media/ZeijZbSFbVcq47fQBX/giphy.gif' },
  { name: 'teamwork', url: 'https://media.giphy.com/media/xUPGcjQ6dJEjH5uwMw/giphy-downsized-large.gif' },
  { name: 'winning', url: 'https://media.giphy.com/media/N49r3KhVBrXiw/giphy.gif' },
];

function TN() {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    const newValue = Math.floor(Math.random() * (values.length));
    if (values[newValue] !== value) {
      setValue(values[newValue]);
    } else {
      handleClick();
    }
  }

  return (
    <main className="TN Home">
      <div className="TN-content">
        <h1 className="TN-header">Tuft & Needle values</h1>

        {
          value &&
          <>
            <h3 className="TN-subtitle">{value.name}</h3>
            <img alt={`${value.name} gif`} className="TN-gif" src={value.url} />
          </>
        }

        <button className="TN-button" onClick={handleClick}>
          <img alt="Question block" className="TN-blockImg" src="https://25.media.tumblr.com/0203de9c403a0da0ef7bf61e435cee0c/tumblr_mm7gdb53IN1re7l7wo1_r1_250.gif" />
        </button>

        <footer className="TN-footer">
          Crafted in Tennessee. Christian Hall &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </main>
  )
}
  
  export default TN
  