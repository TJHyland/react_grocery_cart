import React from 'react';
import { Header, Button, Icon, Checkbox } from 'semantic-ui-react';

const Food = ({ id, complete, name, price, updateFood, deleteFood }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Checkbox 
        defaultChecked={complete}
        onClick={() => updateFood(id)}
      />
      <div style={complete ? styles.complete : {}} className="center">
        <Header as="h2" style={{ marginLeft: "15px" }}>{ name } { price} </Header>
      </div>
    </div>
    <Button
      icon
      color="red"
      onClick={() => deleteFood(id)}
      style={{ marginLeft: "15px", }}
    >
      <Icon name="trash" />
    </Button>
  </div>
)

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'green'
  },
  pointer: {
    cursor: 'pointer' 
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
}

export default Food;