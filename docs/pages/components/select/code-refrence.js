const breakpointCode = `
<Select sm md>
  <Select.Item index={1}>Item 1</Select.Item>
  <Select.Item index={2}>Item 2</Select.Item>
  <Select.Item index={3}>Item 3</Select.Item>
  <Select.Item index={4}>Item 4</Select.Item>
</Select>
`;
const propsCode = `
<Select success>
  <Select.Item index={1}>Item 1</Select.Item>
  <Select.Item index={2}>Item 2</Select.Item>
  <Select.Item index={3}>Item 3</Select.Item>
  <Select.Item index={4}>Item 4</Select.Item>
</Select>

<Select large>
  <Select.Item index={1}>Item 1</Select.Item>
  <Select.Item index={2}>Item 2</Select.Item>
  <Select.Item index={3}>Item 3</Select.Item>
  <Select.Item index={4}>Item 4</Select.Item>
</Select>
`;
const selectableCode = `
<Select allSelectable>
  <Select.Item index={1}>Item 1</Select.Item>
  <Select.Item index={2}>Item 2</Select.Item>
  <Select.Item index={3}>Item 3</Select.Item>
  <Select.Item index={4}>Item 4</Select.Item>
</Select>
`;
const selectionCode = `
<Select searchable allSelectable onSelectionChange={props => console.log(props)}>
  <Select.Item index={1}>Item 1</Select.Item>
  <Select.Item index={2}>Item 2</Select.Item>
  <Select.Item index={3}>Item 3</Select.Item>
  <Select.Item index={4}>Item 4</Select.Item>
</Select>
`;
const searchableCode = `
<Select searchable>
  <Select.Item index={1}>Item 1</Select.Item>
  <Select.Item index={2}>Item 2</Select.Item>
  <Select.Item index={3}>Item 3</Select.Item>
  <Select.Item index={4}>Item 4</Select.Item>
</Select>
`;
const simpleCode = `
<Select trayOpen>
  <Select.Item index={1}>Item 1</Select.Item>
  <Select.Item index={2}>Item 2</Select.Item>
  <Select.Item index={3}>Item 3</Select.Item>
  <Select.Item index={4}>Item 4</Select.Item>
</Select>
`;
const singularCode = `
<Select multiple={false}>
  <Select.Item index={1}>Item 1</Select.Item>
  <Select.Item index={2}>Item 2</Select.Item>
  <Select.Item index={3}>Item 3</Select.Item>
  <Select.Item index={4}>Item 4</Select.Item>
</Select>
`;

export {
  breakpointCode,
  propsCode,
  selectableCode,
  selectionCode,
  searchableCode,
  simpleCode,
  singularCode,
};
