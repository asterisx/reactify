const borderedColoredCode = `
<StackedCard className="font-responsive">
  <StackedCard.Header>
    <img className="size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
  </StackedCard.Header>
  <StackedCard.Body bordered style={{ borderColor: 'violet' }}>
    <span className="size-medium">
      <h5>Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark sends a message to
      Pepper Potts as his oxygen supply starts to dwindle.
    </span>
  </StackedCard.Body>
  <StackedCard.Footer bordered>
    <div className=" d-flex flex-column h-100 justify-content-between">
      <Button danger>Dislike</Button>
      <Button success>Like</Button>
    </div>
  </StackedCard.Footer>
</StackedCard>
`;
const customClassCode = `
<StackedCard className="font-responsive">
<StackedCard.Header>
  <img className="size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
</StackedCard.Header>
<StackedCard.Body bordered className="text-dark">
  <span className="size-medium">
    <h5>Avenger's Endgame</h5>
    Adrift in space with no food or water, Tony Stark sends a message to
    Pepper Potts as his oxygen supply starts to dwindle.
  </span>
</StackedCard.Body>
<StackedCard.Footer bordered className="text-dark">
  <div className=" d-flex flex-column h-100 justify-content-between">
    <Button danger>Dislike</Button>
    <Button success>Like</Button>
  </div>
</StackedCard.Footer>
</StackedCard>
`;
const customSizeCode = `
<StackedCard small className="font-responsive">
<StackedCard.Header>
  <img className="size-small" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
</StackedCard.Header>
<StackedCard.Body>
  <span className="size-small">
    <h5>Avenger's Endgame</h5>
    Adrift in space with no food or water, Tony Stark sends a message to
    Pepper Potts as his oxygen supply starts to dwindle.
  </span>
</StackedCard.Body>
<StackedCard.Footer bordered>
  <div className=" d-flex flex-column h-100 justify-content-between">
    <Button danger>Dislike</Button>
    <Button success>Like</Button>
  </div>
</StackedCard.Footer>
</StackedCard>

<StackedCard medium className="font-responsive">
  <StackedCard.Header>
    <img className="size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
  </StackedCard.Header>
  <StackedCard.Body>
    <span className="size-medium">
      <h5>Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark sends a message to
      Pepper Potts...
    </span>
  </StackedCard.Body>
  <StackedCard.Footer bordered>
    <div className=" d-flex flex-column h-100 justify-content-between">
      <Button danger>Dislike</Button>
      <Button success>Like</Button>
    </div>
  </StackedCard.Footer>
</StackedCard>

<StackedCard large className="font-responsive">
<StackedCard.Header>
  <img className="size-large" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
</StackedCard.Header>
<StackedCard.Body>
  <span className="size-large">
    <h5>Avenger's Endgame</h5>
    Adrift in space with no food or water, Tony Stark sends a message to
    Pepper Potts as his oxygen supply starts to dwindle.
  </span>
</StackedCard.Body>
<StackedCard.Footer bordered>
  <div className=" d-flex flex-column h-100 justify-content-between">
    <Button danger>Dislike</Button>
    <Button success>Like</Button>
  </div>
</StackedCard.Footer>
</StackedCard>

<StackedCard style={{ height: '100px', marginLeft: '3em' }} className="header-margin-left-small">
<StackedCard.Header style={{ marginLeft: '-3em' }} className="header-margin-left-small-negative">
  <img className="size-custom" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
</StackedCard.Header>
<StackedCard.Body className="p-1 m-0">
  <span className="size-custom">
    <h5 className="font-small margin-padding-small">Avenger's Endgame</h5>
    Adrift in space with no food or water, Tony Stark...
  </span>
</StackedCard.Body>
<StackedCard.Footer bordered className="p-1 m-0">
  <div className=" d-flex flex-column h-100 justify-content-between">
    <Button small danger>Dislike</Button>
    <Button small success className="d-flex justify-content-center">Like</Button>
  </div>
</StackedCard.Footer>
</StackedCard>
`;
const disabledCode = `
<StackedCard disabled className="font-responsive">
  <StackedCard.Header>
    <img className="size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
  </StackedCard.Header>
  <StackedCard.Body>
    <span className="size-medium">
      <h5>Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark sends a message to
      Pepper Potts as his oxygen supply starts to dwindle.
    </span>
  </StackedCard.Body>
  <StackedCard.Footer bordered>
    <div className=" d-flex flex-column h-100 justify-content-between">
      <Button danger>Dislike</Button>
      <Button success>Like</Button>
    </div>
  </StackedCard.Footer>
</StackedCard>
`;
const noShadowCode = `
<StackedCard shadowed={false} className="font-responsive">
  <StackedCard.Header>
    <img className="size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
  </StackedCard.Header>
  <StackedCard.Body>
    <span className="size-medium">
      <h5>Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark sends a message to
      Pepper Potts as his oxygen supply starts to dwindle.
    </span>
  </StackedCard.Body>
  <StackedCard.Footer bordered>
    <div className=" d-flex flex-column h-100 justify-content-between">
      <Button danger>Dislike</Button>
      <Button success>Like</Button>
    </div>
  </StackedCard.Footer>
</StackedCard>
`;
const simpleCode = `
<StackedCard className="font-responsive">
  <StackedCard.Header>
    <img className="size-medium" src="https://asterisx.github.io/reactify-ui/static/assets/avengers.jpg" />
  </StackedCard.Header>
  <StackedCard.Body>
    <span className="size-medium">
      <h5>Avenger's Endgame</h5>
      Adrift in space with no food or water, Tony Stark sends a message to
      Pepper Potts as his oxygen supply starts to dwindle.
    </span>
  </StackedCard.Body>
  <StackedCard.Footer bordered>
    <div className=" d-flex flex-column h-100 justify-content-between">
      <Button danger>Dislike</Button>
      <Button success>Like</Button>
    </div>
  </StackedCard.Footer>
</StackedCard>
`;

export {
  borderedColoredCode,
  customClassCode,
  customSizeCode,
  disabledCode,
  noShadowCode,
  simpleCode,
};
