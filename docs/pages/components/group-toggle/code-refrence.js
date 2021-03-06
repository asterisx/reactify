const disabledCode = `
<GroupToggle disabled>
{({ selectedIndex }) => (
  <>
    <Button
      index={0}
      success={selectedIndex === 0}
      default={selectedIndex !== 0}
    >
      Option 1
    </Button>
    <Button
      index={1}
      success={selectedIndex === 1}
      default={selectedIndex !== 1}
    >
      Option 2
    </Button>
    <Button
      index={2}
      success={selectedIndex === 2}
      default={selectedIndex !== 2}
    >
      Option 3
    </Button>
  </>
)}
</GroupToggle>
`;

const onSelectionCode = `
<GroupToggle onSelectionChange={({ event, index }) => console.log(event, index)}>
  {({ selectedIndex }) => (
    <>
      <Button
        index={0}
        success={selectedIndex === 0}
        default={selectedIndex !== 0}
      >
        Option 1
      </Button>
      <Button
        index={1}
        success={selectedIndex === 1}
        default={selectedIndex !== 1}
      >
        Option 2
      </Button>
      <Button
        index={2}
        success={selectedIndex === 2}
        default={selectedIndex !== 2}
      >
        Option 3
      </Button>
    </>
  )}
</GroupToggle>
`;

const selectedIndexCode = `
<GroupToggle selectedIndex={1}>
{({ selectedIndex }) => (
  <>
    <Button
      index={0}
      success={selectedIndex === 0}
      default={selectedIndex !== 0}
    >
      Option 1
    </Button>
    <Button
      index={1}
      success={selectedIndex === 1}
      default={selectedIndex !== 1}
    >
      Option 2
    </Button>
    <Button
      index={2}
      success={selectedIndex === 2}
      default={selectedIndex !== 2}
    >
      Option 3
    </Button>
  </>
)}
</GroupToggle>
`;

const simpleCode = `
<GroupToggle>
{({ selectedIndex }) => (
  <>
    <Button
      index={0}
      success={selectedIndex === 0}
      default={selectedIndex !== 0}
    >
      Option 1
    </Button>
    <Button
      index={1}
      success={selectedIndex === 1}
      default={selectedIndex !== 1}
    >
      Option 2
    </Button>
    <Button
      index={2}
      success={selectedIndex === 2}
      default={selectedIndex !== 2}
    >
      Option 3
    </Button>
  </>
)}
</GroupToggle>
`;

export {
  disabledCode,
  onSelectionCode,
  selectedIndexCode,
  simpleCode,
};
