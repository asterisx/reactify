const simpleCode = '<Slider value={20} />';
const disabledCode = '<Slider disabled value={20} />';
const customIconCode = '<Slider color="red" value={20} />';
const customSizeCode = `
<Slider small value={20} />

<Slider medium value={20} />

<Slider large value={20} />

<Slider style={{ fontSize: '40px' }} value={20} />
`;
const customThemeCode = `
<Slider primary value={20} />

<Slider secondary value={20} />

<Slider dark value={20} />

<Slider light value={20} />

<Slider info value={20} />

<Slider warning value={20} />

<Slider danger value={20} />

<Slider success value={20} />
`;
const onChangeCode = '<Slider onChange={val => console.log(val)} value={20} />';
const customClassCode = '<Slider className="m-5 w-50" value={20} />';
const valueCode = '<Slider value={50} />';
const unFilledCode = '<Slider value={20} fill={false} />';
const minMaxCode = '<Slider min={200} minAllowed={400} maxAllowed={1600} max={2000} value={200} step={50} />';

export {
  simpleCode,
  valueCode,
  disabledCode,
  customIconCode,
  customSizeCode,
  customThemeCode,
  onChangeCode,
  customClassCode,
  unFilledCode,
  minMaxCode,
};
